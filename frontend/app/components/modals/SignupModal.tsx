"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          required
          placeholder="Your email address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          type="password"
          required
          placeholder="Your password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          type="password"
          required
          placeholder="Repeat password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>

        <CustomButton label="Submit" onClick={() => console.log("submit")} />
      </form>
    </>
  );

  return (
    <Modal
      label="Sign up"
      content={content}
      isOpen={signupModal.isOpen}
      close={signupModal.close}
    />
  );
};

export default SignupModal;
