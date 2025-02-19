import SubmitButton from "@/components/Forms/SubmitButton";
import TextInput from "@/components/Forms/TextInput";

const SignUpPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-center w-full h-full min-h-screen">
        <div className="max-w-[600px] mx-auto border border-slate-800 rounded-lg p-8">
          <h1>Create your account</h1>
          <form action="">
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
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
