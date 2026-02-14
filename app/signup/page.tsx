"use client";

import { Formik, Form } from "formik";
import { FormInput } from "../components/form-input/FormInput";
import { signupValidationSchema } from "./validations";
import Link from "next/link";
import { SignupRequestI } from "@/store/api/auth/types";

const initialValues: SignupRequestI = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
};

export default function Signup() {
  const handleSubmit = async (values: SignupRequestI) => {};

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput
            name="firstName"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
          />
          <FormInput
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
          />
          <FormInput
            name="username"
            type="text"
            label="Username"
            placeholder="Choose a username"
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Choose a password"
          />
          <Link className="text-blue-400" href="/login">
            already have an account?
          </Link>
          <button
            type="submit"
            className="w-full mt-4 py-2 rounded text-white bg-green-500 hover:bg-green-600"
          >
            Signup
          </button>
        </Form>
      </Formik>
    </div>
  );
}
