import React from "react";
import { default as BasePhoneInput, PhoneInputProps } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import classNames from "@lib/classNames";

export const PhoneInput = (props: PhoneInputProps) => (
  <BasePhoneInput
    {...props}
    className={classNames(
      "shadow-sm rounded-md block w-full py-px px-3 border border-1 border-gray-300 ring-black focus-within:ring-1 focus-within:border-brand dark:border-gray-900 dark:text-brandcontrast dark:bg-brand",
      props.className
    )}
    onChange={() => {
      /* DO NOT REMOVE: Callback required by PhoneInput, comment added to satisfy eslint:no-empty-function */
    }}
  />
);

export default PhoneInput;
