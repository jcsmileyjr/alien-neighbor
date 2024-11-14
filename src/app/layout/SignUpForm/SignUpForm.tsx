'use client';
import InputText from "../../components/InputText/InputText";
import { setName, setIllegalName} from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from "@/User";

export default function UserInformation() {
    const {register, trigger, handleSubmit} = useForm<User>();

    const onSubmit: SubmitHandler<User> = (data) => console.log(data);

    const dispatch = useDispatch<AppDispatch>();
    const onChangeName = (e: any) => dispatch(setName(e.target.value));
    const onChangeIllegalName = (e: any) => dispatch(setIllegalName(e.target.value));

  // 
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InputText register={register} name="user_name" label="Legal Name" onUpdate={onChangeName} />
                    <InputText register={register} name="user_illegal_name" label="Illegal Name, Nickname, Alias" onUpdate={onChangeIllegalName} notes="We don’t judge. Everyone, regardless of reasons running from Earth, is welcome." />

                </div>
                <div>Living Space Preference</div>
            </form>

            <SubmitButton handleSubmit={handleSubmit(onSubmit)} messageOne='Submit' messageTwo='to Aliens' notes="Pressing submit implies agreement to minor body injury waiver and being accidentally consumed. " />
        </section>
        
    )
}