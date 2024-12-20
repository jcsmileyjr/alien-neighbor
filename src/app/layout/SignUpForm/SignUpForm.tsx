'use client';
import InputText from "../../components/InputText/InputText";
import { setName, setIllegalName, setRunSpeed } from "@/redux/features/userInformationSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import RadioOptions from "@/app/components/RadioOptons/RadioOptions";
import RadioValues from "@/app/components/RadioValues/RadioValues";
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from "@/User";
import running from "@/app/lib/running";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function UserInformation() {
    const router = useRouter() // Routes a user to another page

    const {register, handleSubmit, formState: { errors }} = useForm<User>();
    const dispatch = useDispatch<AppDispatch>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit: SubmitHandler<User> = (data) => {
        dispatch(setName(data.user_name));
        if(data.user_illegal_name) dispatch(setIllegalName(data.user_illegal_name));
        if(data.user_run_speed) dispatch(setRunSpeed(data.user_run_speed));
        setIsSubmitted(true);
        const timer = setTimeout(() => {
            router.push("/Settlement");
        }, 4000);
        return () => clearTimeout(timer);
    };

    return (
        <section>
            <form className={`transform ${isSubmitted ? 'animate-fadeOut' : ''}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="border border-offGray border-2 p-2 sm:p-4 rounded relative pt-4">
                    <p className="text-base text-blueBlack flex flex-row justify-between w-full pr-2 sm:pr-4 mb-4">Personal Information 
                        <Image className="opacity-25" src="/images/alien-icon.png" alt="Logo" width={15} height={15} />
                    </p>
                    <InputText errors={errors?.user_name } register={register} name="user_name" label="Legal Name" />
                    <InputText errors={errors?.user_illegal_name} register={register} name="user_illegal_name" label="Illegal Name, Nickname, Alias" notes="We don&apos;t judge. Everyone, regardless of reasons running from Earth, is welcome." />
                    <RadioOptions errors={errors.user_run_speed} options={running} register={register} name="user_run_speed"  label="Out of curiosity, how swiftly can you sprint while screaming for HELP on this charming spider-infested alien planet?'" />
                </div>
                <div className="border border-offGray border-2 p-2 sm:p-4 rounded relative pt-4 mt-8">
                    <p className="text-base text-blueBlack flex flex-row justify-between w-full pr-2 sm:pr-4 mb-4">Living Space Preference
                        <Image className="opacity-25" src="/images/alien-icon.png" alt="Logo" width={15} height={15} />
                    </p>
                    <div className="flex justify-end items-center gap-4 mb-2 text-blueBlack">
                        <p>Yes</p>
                        <p>It&apos;s Ok</p>
                    </div>
                    <RadioValues name="mindAliens" content="Do you mind aliens?" />
                    <RadioValues name="nearbyAliens" content="Can neighbors live nearby, but unknown." />
                    <RadioValues name="pettingAliens" content="Have you fantasized about petting 6&apos;5 foot spiders in the dark where no one can hear you scream!" />
                </div>
            </form>
            <div className={`transform ${isSubmitted ? 'animate-moveUp' : ''}`}>
                <SubmitButton handleSubmit={handleSubmit(onSubmit)} messageOne='Submit' messageTwo='to Aliens' notes="Pressing submit implies agreement to minor body injury waiver and being accidentally consumed. " />
            </div>
        </section>
        
    )
}