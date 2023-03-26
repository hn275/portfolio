import { ChangeEvent, useState } from "react";

export function useContactMe() {
  const [name, onName, nameReset] = useInput();
  const [email, onEmail, emailReset] = useInput();
  const [subject, onSubject, subjectReset] = useInput();
  const [message, onMessage, messageReset] = useInput();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(() => true);
    try {
      console.log(name, email, error, isLoading, message);
      // TODO: do fetch function
      // reset form
      [nameReset, emailReset, subjectReset, messageReset].forEach((fn) => fn());
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
  };
}

type OnHTMLInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInput(): [string, (e: OnHTMLInput) => void, () => void] {
  const [state, setState] = useState<string>("");
  const onInput = (e: OnHTMLInput) => setState(() => e.target.value);
  const onReset = () => setState(() => "");

  return [state, onInput, onReset];
}
