import { useAlert } from "hooks";
import { ChangeEvent, useState } from "react";
import { useToggle } from "./useToggle";

export function useContactMe() {
  const [name, onName, nameReset] = useInput();
  const [email, onEmail, emailReset] = useInput();
  const [subject, onSubject, subjectReset] = useInput();
  const [message, onMessage, messageReset] = useInput();
  const resetFunctions = [nameReset, emailReset, subjectReset, messageReset];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { alert, onAlert } = useAlert();

  const [alertName, setAlertName] = useState<string>("");
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setAlertName(() => "");
    setIsLoading(() => true);
    try {
      console.log(name, email, error, isLoading, message);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const { status } = res;

      switch (status) {
        case 200:
          setAlertName(() => name);
          onAlert();
          setTimeout(() => resetFunctions.forEach((f) => f()), 200);
          break;
        default:
          const payload = await res.json();
          setError(() => payload["error"]);
      }
    } catch (e) {
      setError(() => "Server isn't responding right now, try again later");
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
    error,
    onSuccess: { alert, alertName },
  };
}

type OnHTMLInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInput(): [string, (e: OnHTMLInput) => void, () => void] {
  const [state, setState] = useState<string>("");
  const onInput = (e: OnHTMLInput) => setState(() => e.target.value);
  const onReset = () => setState(() => "");

  return [state, onInput, onReset];
}
