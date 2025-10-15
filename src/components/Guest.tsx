// import SignInForm from './SignInForm';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { useState } from "react";

const Mode = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
} as const;

type Mode = (typeof Mode)[keyof typeof Mode];

export default function Guest() {
  const [mode, setMode] = useState<Mode>(Mode.SIGN_IN);
  return (
    <div className="flex flex-col gap-2 w-full">
      {mode === Mode.SIGN_IN && <SignInForm />}
      {mode === Mode.SIGN_UP && <SignUpForm />}
      <p className="text-center">
        {mode === Mode.SIGN_IN ? (
          <>
            Don't have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setMode(Mode.SIGN_UP)}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setMode(Mode.SIGN_IN)}
            >
              Sign In
            </button>
          </>
        )}
      </p>
    </div>
  );
}
