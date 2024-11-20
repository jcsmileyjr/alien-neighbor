import { UseFormRegister, FieldError } from "react-hook-form";
import { User } from "@/User";

export default function RadioOptions({ name, label, options, errors, register }: { name: "user_name" | "user_illegal_name"| "user_commute_distance"| "user_run_speed", label: string, options: string[], errors: FieldError | undefined, register: UseFormRegister<User> }) {
    return (
        <div className="mb-4 flex flex-col items-center gap-4">       
            <label className="text-base font-bold text-blueBlack gap-4" htmlFor={name}>{label} {errors && errors[name as keyof typeof errors] &&<p className="text-sm text-red-500">Required</p>}</label>
            {options.map((option) => (
                <div className="flex flex-row gap-4 w-full" key={`${name}-${option.split(' ').slice(0, 2).join(' ')}`}>
                    <input {...register(name, { required: true })} id={option.split(' ').slice(0, 2).join(' ')} type="radio" className="min-h-6 min-w-6 border border-spaceGold border-2 p-2 rounded accent-spaceGold active:accent-spaceGold checked:border-spaceGold checked:border-0" />
                    <label className="text-sm text-blueBlack" htmlFor={option.split(' ').slice(0, 2).join(' ')}>{option}</label>
                </div>
            ))}
        </div>
    )
}