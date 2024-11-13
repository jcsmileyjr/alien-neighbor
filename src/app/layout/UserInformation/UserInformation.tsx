'use client';
import InputText from "../../components/InputText/InputText";
//import { useAppSelector } from "@/redux/store";
export default function UserInformation() {
    //const userName = useAppSelector((state: any) => state.userInformation.user_name);
    return (
        <div>
            <InputText name="user_name" label="Legal Name" />
        </div>
    )
}