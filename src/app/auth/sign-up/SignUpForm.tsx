"use client";

import SubmitButton from "@/components/Forms/SubmitButton";
import TextInput from "@/components/Forms/TextInput";
import { useFormState } from "react-dom";
import { handleSignUpForm, SignUpState } from "./actions";

const initialState: SignUpState = {
  isValid: undefined,
  errors: {
    name: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  },
};

const SignUpForm = () => {
  const [state, formAction] = useFormState(handleSignUpForm, initialState);

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" error={state.errors.name} />
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
      <TextInput
        name="passwordConfirmation"
        label="Password Confirmation"
        type="password"
        error={state.errors.passwordConfirmation}
      />

      <SubmitButton>Create account</SubmitButton>
    </form>
  );
};

export default SignUpForm;
