'use client';
import InputText from "../../components/InputText/InputText";
import { setName, setIllegalName} from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
export default function UserInformation() {
    const dispatch = useDispatch<AppDispatch>();

    const onChangeName = (e: any) => dispatch(setName(e.target.value));
    const onChangeIllegalName = (e: any) => dispatch(setIllegalName(e.target.value));

    const userName = useAppSelector((state: any) => state.userInformation.user_name);
    const userIllegalName = useAppSelector((state: any) => state.userInformation.user_illegal_name);
    return (
        <div>
            <InputText name="user_name" label="Legal Name" onUpdate={onChangeName} />
            <InputText name="user_illegal_name" label="Illegal Name, Nickname, Alias" onUpdate={onChangeIllegalName} />
            <p>{userName}</p>
            <p>{userIllegalName}</p>
        </div>
        
    )
}