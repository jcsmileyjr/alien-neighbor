import { UseFormRegister } from "react-hook-form";
import { User } from "@/User";

export default function SelectInput({ name, label, register }: { name: "user_name" | "user_illegal_name"| "user_commute_distance"| "user_run_speed", label: string, register: UseFormRegister<User> }) {
    return (
        <div className="mb-4">
            <label className="text-base" htmlFor="user_name">{label}</label>
            <select id={name} {...register(name)} className="border border-blueBlack border-2 p-2 rounded w-full " >
                <option value="5">0 - 5</option>
                <option value="10">5 - 10</option>
                <option value="20">10 - 20</option>
                <option value="40">20 - 40</option>
                <option value="60">40 - 60</option>                
            </select>
        </div>        
    );
}