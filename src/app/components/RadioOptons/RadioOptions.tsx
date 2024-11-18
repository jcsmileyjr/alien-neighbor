import { UseFormRegister } from "react-hook-form";
import { User } from "@/User";

export default function RadioOptions({ name, label, options, register }: { name: "user_name" | "user_illegal_name"| "user_commute_distance"| "user_run_speed", label: string, options: string[], register: UseFormRegister<User> }) {
    return (
        <div className="mb-4 flex flex-col items-center gap-4">       
            <label className="text-base font-bold text-blueBlack" htmlFor={name}>{label}</label>
            {options.map((option) => (
                <div className="flex flex-row gap-4" key={`${name}-${option.split(' ').slice(0, 2).join(' ')}`}>
                    <input {...register(name, { required: true })} id={option.split(' ').slice(0, 2).join(' ')} type="radio" className="h-12 w-12 border border-spaceGold border-2 p-2 rounded accent-spaceGold active:accent-spaceGold checked:border-spaceGold checked:border-0" />
                    <label className="text-sm text-blueBlack" htmlFor={option.split(' ').slice(0, 2).join(' ')}>{option}</label>
                </div>
            ))}
        </div>
    )
}