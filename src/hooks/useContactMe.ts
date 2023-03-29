import { useAlert } from "hooks";
import { ChangeEvent, useState } from "react";

export function useContactMe() {
  const [name, onName, nameReset] = useInput();
  const [email, onEmail, emailReset] = useInput();
  const [subject, onSubject, subjectReset] = useInput();
  const [message, onMessage, messageReset] = useInput();
  const resetFunctions = [nameReset, emailReset, subjectReset, messageReset];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const success = useAlert();
  const error = useAlert();

  const [successAlert, setSuccessAlert] = useState<string>("");
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    // form validation
    for (const i of [name, email, subject, message]) {
      if (i === "") {
        setErrorMessage(() => "Input fields can't be empty!");
        error.onAlert();
        return;
      }
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(regex)) {
      setErrorMessage(() => "Invalid email format, please try again.");
      error.onAlert();
      return;
    }

    setSuccessAlert(() => "");
    setIsLoading(() => true);
    try {
      console.log(name, email, errorMessage, isLoading, message);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const { status } = res;

      switch (status) {
        case 200:
          setSuccessAlert(() => `Email sent! Talk to you soon, ${name}`);
          success.onAlert();
          setTimeout(() => resetFunctions.forEach((f) => f()), 200);
          break;
        default:
          const payload = await res.json();
          error.onAlert();
          setErrorMessage(() => payload["error"]);
      }
    } catch (e) {
      setErrorMessage(
        () => "Server isn't responding right now, try again later"
      );
      error.onAlert();
    } finally {
      setIsLoading(() => false);
    }
  }

  return {
    name,
    onName,
    email,
    onEmail,
    subject,
    onSubject,
    message,
    onMessage,
    handleSubmit,
    isLoading,
    success: { onSuccess: success.alert, message: successAlert },
    error: { onError: error.alert, message: errorMessage },
  };
}

type OnHTMLInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInput(): [string, (e: OnHTMLInput) => void, () => void] {
  const [state, setState] = useState<string>("");
  const onInput = (e: OnHTMLInput) => setState(() => e.target.value);
  const onReset = () => setState(() => "");

  return [state, onInput, onReset];
}
