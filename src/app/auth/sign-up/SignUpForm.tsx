"use client";

import SubmitButton from "@/components/Forms/SubmitButton";
import TextInput from "@/components/Forms/TextInput";
import { useFormState } from "react-dom";
import { handleSignUpForm } from "./actions";

const SignUpForm = () => {
  const [state, formAction] = useFormState(handleSignUpForm, {});

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="E-mail" inputMode="email" />
      <TextInput name="password" label="Passsword" type="password" />
      <TextInput
        name="passwordConfirmation"
        label="Password Confirmation"
        type="password"
      />

      <SubmitButton>Create account</SubmitButton>
    </form>
  );
};

export default SignUpForm;
