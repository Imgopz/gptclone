import { SignUp } from "@clerk/clerk-react";
import "./signUnPage.css";

const SignUnPage = () => {
  return (
    <div className="signUnPage">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignUnPage;
