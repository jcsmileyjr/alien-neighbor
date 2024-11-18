'use client';
import InputText from "../../components/InputText/InputText";
import { setName, setIllegalName, setRunSpeed } from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import SelectInput from "@/app/components/SelectInput/SelectInput";
import RadioOptions from "@/app/components/RadioOptons/RadioOptions";
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from "@/User";
import commute from "@/app/lib/commute"; 
import running from "@/app/lib/running";

// Testing
import { useAppSelector } from "@/redux/store";

export default function UserInformation() {
    const {register, handleSubmit} = useForm<User>();
    const dispatch = useDispatch<AppDispatch>();

    // Testing
    const userName = useAppSelector((state: any) => state.userInformation.user_name);
    const userIllegalName = useAppSelector((state: any) => state.userInformation.user_illegal_name);
    const userCommuteDistance = useAppSelector((state: any) => state.userInformation.user_commute_distance);

    const onSubmit: SubmitHandler<User> = (data) => {
        dispatch(setName(data.user_name));
        if(data.user_illegal_name) dispatch(setIllegalName(data.user_illegal_name));
        if(data.user_run_speed) dispatch(setRunSpeed(data.user_run_speed));
        console.log(data)
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border border-offGray border-2 p-2 sm:p-4 rounded relative pt-4">
                    <p className="absolute -top-3 text-base text-blueBlack">Personal Information</p>
                    <InputText register={register} name="user_name" label="Legal Name" />
                    <InputText register={register} name="user_illegal_name" label="Illegal Name, Nickname, Alias" notes="We don’t judge. Everyone, regardless of reasons running from Earth, is welcome." />
                    <RadioOptions options={running} register={register} name="user_run_speed"  label="Out of curiosity, how swiftly can you sprint while screaming for HELP on this charming spider-infested alien planet?'" />
                </div>
                <div>Living Space Preference</div>
            </form>

            {/* Testing */}
            <p>{userName}</p>
            <p>{userIllegalName}</p>
            <p>{userCommuteDistance}</p>
            <SubmitButton handleSubmit={handleSubmit(onSubmit)} messageOne='Submit' messageTwo='to Aliens' notes="Pressing submit implies agreement to minor body injury waiver and being accidentally consumed. " />
        </section>
        
    )
}