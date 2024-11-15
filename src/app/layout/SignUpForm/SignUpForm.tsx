'use client';
import InputText from "../../components/InputText/InputText";
import { setName, setIllegalName} from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from "@/User";

// Testing
import { useAppSelector } from "@/redux/store";

export default function UserInformation() {
    const {register, handleSubmit} = useForm<User>();
    const dispatch = useDispatch<AppDispatch>();

    // Testing
    const userName = useAppSelector((state: any) => state.userInformation.user_name);
    const userIllegalName = useAppSelector((state: any) => state.userInformation.user_illegal_name);

    const onSubmit: SubmitHandler<User> = (data) => {
        dispatch(setName(data.user_name));
        if(data.user_illegal_name) dispatch(setIllegalName(data.user_illegal_name));
        console.log(data)
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InputText register={register} name="user_name" label="Legal Name" />
                    <InputText register={register} name="user_illegal_name" label="Illegal Name, Nickname, Alias" notes="We don’t judge. Everyone, regardless of reasons running from Earth, is welcome." />

                </div>
                <div>Living Space Preference</div>
            </form>

            {/* Testing */}
            <p>{userName}</p>
            <p>{userIllegalName}</p>
            <SubmitButton handleSubmit={handleSubmit(onSubmit)} messageOne='Submit' messageTwo='to Aliens' notes="Pressing submit implies agreement to minor body injury waiver and being accidentally consumed. " />
        </section>
        
    )
}