import { UseFormRegister, FieldError } from "react-hook-form";
import { User } from "@/User";
import Image from "next/image";

  // Sanitization function
const sanitizeName = (value: string) => {
    // Trim whitespace and remove special characters (example: only letters, spaces, and dashes allowed)
    return value.replace(/[^a-zA-Z\s- ]/g, '');
};

export default function InputText({ name, label, notes, errors, register }: { name: "user_name" | "user_illegal_name", label: string, notes?: string, errors: FieldError | undefined, register: UseFormRegister<User> }) {
    return (
        <div className="mb-6">
            <label className="text-base font-bold flex flex-row justify-between w-full" htmlFor={name}>
                {label}
                {errors && <p className="text-sm text-red-500">Required</p>}
            </label>
            <div className="flex flex-row items-center justify-between relative">
            <input {...register(name, { 
            required: true, 
            maxLength: 30, 
            onChange: (e) => {
                e.target.value = sanitizeName(e.target.value); // Sanitize in real-time
            }
            })} id={name} type="text" placeholder="Type here" className="border border-blueBlack border-2 p-2 rounded w-full peer pr-6" />
                <Image className="absolute right-0 opacity-0 transition-opacity peer-focus:animate-flash mr-2" src="/images/alien-icon-color.jpg" alt="Logo" width={15} height={15} />
            </div> 
            {notes && <p className="text-base text-offBlack">{notes}</p>}
            
        </div>
    );
}