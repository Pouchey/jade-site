import { SubmitHandler } from "react-hook-form";

export type FormValues = {
  name: string;
  password: string;
};


export interface FormProps {
  onSubmit: SubmitHandler<FormValues> 
}