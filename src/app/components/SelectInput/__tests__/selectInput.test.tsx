import { render, screen } from '@testing-library/react';
import SelectInput from '../SelectInput';
import { User } from "@/User";
import { useForm } from "react-hook-form";
import commute from "@/app/lib/commute";

// Create a wrapper component to handle `useForm`
const SelectInputWrapper = (props: any) => {
    const { register } = useForm<User>();
    const labelTitle = 'How far do you mind commuting to work';
    return <SelectInput options={commute} name="user_commute_distance" label={labelTitle} register={register} />;
};

describe('SelectInput', () => {
    const labelTitle = 'How far do you mind commuting to work';
    it('should render', () => {
        render(
            <SelectInputWrapper/>
        );
        expect(screen.getByLabelText(labelTitle)).toBeInTheDocument();
    });
});