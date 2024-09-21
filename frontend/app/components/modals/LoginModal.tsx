"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email,
      password,
    };

    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setError(response.non_field_errors);
    }
  };

  const content = (
    <>
      <form onSubmit={submitLogin} className="space-y-4">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Your password"
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

        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  );

  return (
    <Modal
      label="Log in"
      content={content}
      isOpen={loginModal.isOpen}
      close={loginModal.close}
    />
  );
};

export default LoginModal;
