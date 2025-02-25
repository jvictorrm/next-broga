"use client";

import SubmitButton from "@/components/Forms/SubmitButton";
import TextInput from "@/components/Forms/TextInput";
import { useFormState } from "react-dom";
import { handleSignInForm, SignInState } from "./actions";

const initialState: SignInState = {
  isValid: undefined,
  errors: {
    email: undefined,
    password: undefined,
  },
};

const SignInForm = () => {
  const [state, formAction] = useFormState(handleSignInForm, initialState);

  return (
    <form action={formAction}>
      <TextInput
        name="email"
        label="E-mail"
        inputMode="email"
        error={state.errors.email}
      />
      <TextInput
        name="password"
        label="Passsword"
        type="password"
        error={state.errors.password}
      />

      <SubmitButton>Log in</SubmitButton>
    </form>
  );
};

export default SignInForm;
