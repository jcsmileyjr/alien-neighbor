import { UseFormRegister } from "react-hook-form";
import { User } from "@/User";

export default function InputText({ name, label, notes, register }: { name: "user_name" | "user_illegal_name", label: string, notes?: string, register: UseFormRegister<User> }) {
    return (
        <div className="mb-4">
            <label className="text-base" htmlFor={name}>{label}</label>
            <input {...register(name, { required: true })} id={name} type="text" className="border border-blueBlack border-2 p-2 rounded w-full " />
            {notes && <p className="text-sm text-offBlack">{notes}</p>}
        </div>
    );
}