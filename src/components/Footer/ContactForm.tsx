import { useState } from "react";
import { TextInput } from "./TextInput";

export function ContactForm() {
  const [email, setEmail] = useState<string>("");

  return (
    <form>
      <TextInput
        label="Email"
        value={email}
        onChange={(e: any) => setEmail(() => e.target.value)}
      />
    </form>
  );
}
