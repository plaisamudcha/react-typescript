// import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function Guest() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* <SignInForm /> */}
      <SignUpForm />
      <p className="text-center">
        {/* Don't have an account? <button>Sign Up</button> */}
        Already have an account? <button>Sign In</button>
      </p>
    </div>
  );
}
