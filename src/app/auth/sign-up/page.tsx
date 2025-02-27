import Link from "next/link";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-center w-full h-full min-h-screen">
        <div className="max-w-[600px] mx-auto border border-slate-800 rounded-lg p-8">
          <h1>Create your account</h1>
          <SignUpForm />

          <div className="mt-8">
            <Link href="/auth/sign-in">Already have an account? Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
