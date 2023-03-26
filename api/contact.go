package handler

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"gopkg.in/gomail.v2"
)

var (
	googlePassword string
	googleMail     string
	protonMail     string
)

const (
	smtpHost string = "smtp.gmail.com"
	smtpPort int    = 587
)

func init() {
	googlePassword = os.Getenv("GOOGLE_PASSWORD")
	googleMail = os.Getenv("GOOGLE_EMAIL")
	protonMail = os.Getenv("PROTON_EMAIL")
	if googlePassword == "" || protonMail == "" || googleMail == "" {
		log.Fatal("Missing env vars. Required: `GOOGLE_APP_PASSWORD`, `GOOGLE_EMAIL`, `PROTON_EMAIL`")
	}
}

type ContactInformation struct {
	Name    string `json:"name"`
	Subject string `json:"subject"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// get request body
	var contacts ContactInformation
	if err := json.NewDecoder(r.Body).Decode(&contacts); err != nil {
		handleError(w, err, http.StatusInternalServerError, "Something went wrong, try again later.")
		return
	}
	defer r.Body.Close()

	// send mail
	if err := sendEmail(contacts); err != nil {
		handleError(w, err, http.StatusBadGateway, "Email server is not responding, try again later.")
		return
	}

	w.WriteHeader(http.StatusOK)
}

func handleError(w http.ResponseWriter, err error, statusCode int, message string) {
	if err != nil {
		log.Println(err)
	}

	w.WriteHeader(statusCode)
	if err := json.NewEncoder(w).Encode(map[string]string{"error": message}); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Println(err)
	}
}

func sendEmail(c ContactInformation) error {
	m := gomail.NewMessage()
	m.SetHeader("From", googleMail)
	m.SetHeader("To", protonMail)
	m.SetHeader("Subject", c.Subject)
	m.SetBody("text/html", fmt.Sprintf(`
Content:
<br />
%s
<br />
<br />
<a href="mailto:%s?subject=Thanks for reaching out!&body=Hello %s">reply to %s</a>
	`, c.Message, c.Email, c.Name, c.Name))

	d := gomail.NewDialer(smtpHost, smtpPort, googleMail, googlePassword)

	return d.DialAndSend(m)
}
