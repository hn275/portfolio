import { ChangeEvent, useState } from "react";

export function useContactMe() {
  const [name, onName] = useInput();
  const [email, onEmail] = useInput();
  const [subject, onSubject] = useInput();

  return {
    name,
    onName,
    email,
    onEmail,
    subject,
    onSubject,
  };
}

type OnHTMLInput = ChangeEvent<HTMLInputElement>;
function useInput(): [string, (e: OnHTMLInput) => void] {
  const [state, setState] = useState<string>("");

  const onInput = (e: OnHTMLInput) => setState(() => e.target.value);

  return [state, onInput];
}
