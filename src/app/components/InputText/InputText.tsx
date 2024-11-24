import { UseFormRegister, FieldError } from "react-hook-form";
import { User } from "@/User";

export default function InputText({ name, label, notes, errors, register }: { name: "user_name" | "user_illegal_name", label: string, notes?: string, errors: FieldError | undefined, register: UseFormRegister<User> }) {
    return (
        <div className="mb-6">
            <label className="text-base font-bold flex flex-row justify-between w-full" htmlFor={name}>{label} {errors && errors[name as keyof typeof errors] && <p className="text-sm text-red-500">Required</p>}</label>
            <input {...register(name, { required: true })} id={name} type="text" placeholder="Type here" className="border border-blueBlack border-2 p-2 rounded w-full " />
            {notes && <p className="text-base text-offBlack">{notes}</p>}
            
        </div>
    );
}