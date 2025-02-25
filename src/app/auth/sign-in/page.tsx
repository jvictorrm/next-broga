import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-center w-full h-full min-h-screen">
        <div className="max-w-[600px] mx-auto border border-slate-800 rounded-lg p-8">
          <h1>Log into your account</h1>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
