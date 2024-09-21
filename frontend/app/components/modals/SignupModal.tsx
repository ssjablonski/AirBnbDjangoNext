"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const [email, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [password2, setRepeatPassword] = useState("");
  const [error, setError] = useState<string[]>([]);

  const submitSignup = async () => {
    const formData = {
      email,
      password1,
      password2,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setError(tmpErrors);
    }
  };

  const content = (
    <>
      <form onSubmit={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Your email address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Your password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          onChange={(e) => setRepeatPassword(e.target.value)}
          type="password"
          required
          placeholder="Repeat password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        {error.map((err, i) => {
          return (
            <div
              key={i}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {err}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitSignup} />
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
