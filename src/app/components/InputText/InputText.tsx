import { UseFormRegister, FieldError, UseFormReturn} from "react-hook-form";
import { User } from "@/User";

const InputText = ({ name, label, notes, errors, formMethods }: { name: "user_name" | "user_illegal_name", label: string, notes?: string, errors?: FieldError | undefined, formMethods: UseFormReturn<User> }) => {
    return (
        <div className="mb-4">
            <label className="text-base font-bold flex flex-row justify-between w-full" htmlFor={name}>{label} {errors && errors[name as keyof typeof errors] as FieldError && <p className="text-sm text-red-500">Required</p>}</label>
            <input {...formMethods.register(name, { required: true })} id={name} type="text" placeholder="Type here" className="border border-blueBlack border-2 p-2 rounded w-full " />
            {notes && <p className="text-base text-offBlack">{notes}</p>}
            
        </div>
    );
}

export default InputText;