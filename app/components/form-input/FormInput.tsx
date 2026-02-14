"use client";

import classNames from "classnames";
import { FieldHookConfig, useField } from "formik";
import React from "react";

interface FormInputPropsI {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const FormInput: React.FC<FormInputPropsI> = ({ label, ...props }) => {
  const [field, meta] = useField(props as FieldHookConfig<string>);
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.name} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        {...field}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className={classNames(
          "px-3 py-2 border rounded focus:outline-none focus:ring",
          { "border-red-500": meta.touched && !!meta.error },
          { "border-gray-300": !meta.touched || !meta.error },
        )}
      />
      {meta.touched && meta.error && (
        <span className="text-red-500 text-sm mt-1">{meta.error}</span>
      )}
    </div>
  );
};
