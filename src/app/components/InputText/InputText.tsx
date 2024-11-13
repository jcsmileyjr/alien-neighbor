'use client';
import { setName } from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function InputText({ name, label, notes }: { name: string, label: string, notes?: string }) {
    const dispatch = useDispatch<AppDispatch>();

    const onChange = (e: any) => dispatch(setName(e.target.value));
    return (
        <div>
            <label className="text-base" htmlFor={name}>{label}</label>
            <input id={name} type="text" onChange={onChange} className="border border-blueBlack border-2 p-2 rounded w-full " />
            {notes && <p className="text-sm">{notes}</p>}
        </div>
    );
}