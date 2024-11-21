import { UseFormRegister } from "react-hook-form";
import { User } from "@/User";

const SelectInput = ({ name, label, options, register }: { name: "user_name" | "user_illegal_name"| "user_commute_distance"| "user_run_speed", label: string, options: string[], register: UseFormRegister<User> }) => {
    return (
        <div className="mb-4">
            <label className="text-base" htmlFor={name}>{label}</label>
            <select id={name} {...register(name)} className="border border-blueBlack border-2 p-2 rounded w-full " >
                {options.map((option) => (
                    <option key={`${name}-${option.slice(0, 2)}`} value={option}>{option}</option>
                ))}              
            </select>
        </div>        
    );
}

export default SelectInput;