import React from "react";

import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface FormPropsField<T extends FieldValues> {
  name: FieldPath<T>;
  type?: string;
  control: Control<T>;
  placeholder?: string;
}

const Form_FieldsContainer = <T extends FieldValues>({
  name,
  type = "text",
  control,
  placeholder,
}: FormPropsField<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Form_FieldsContainer;
