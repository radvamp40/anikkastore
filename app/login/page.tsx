"use client";

import { Form, Formik } from "formik";
import { FormInput } from "../components/form-input/FormInput";
import { loginValidationSchema } from "./validations";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { LoginRequestI } from "@/store/api/auth/types";
import { useRouter } from "next/navigation";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const initialValues: LoginRequestI = { username: "", password: "" };

export default function Login() {
  const { login, loginStatus } = useAuth();
  const router = useRouter();

  const onSubmit = (values: LoginRequestI) => {
    try {
      login(values);
      router.push("/");
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      {/* handle error */}
      {loginStatus.isError && (
        <p className="text-red-500 mb-2">
          {
            (loginStatus.error as FetchBaseQueryError | SerializedError)?.data
              ?.message
          }
        </p>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormInput
            name="username"
            type="text"
            placeholder="Enter your username"
            label="Username"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Link className="text-blue-400" href="/signup">
            Create new account?
          </Link>
          <button
            type="submit"
            disabled={loginStatus.isLoading}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
