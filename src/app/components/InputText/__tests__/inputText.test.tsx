import {render, screen} from '@testing-library/react';
import InputText from '../InputText';
import { User } from "@/User";
import { useForm} from "react-hook-form"

const InputTextWrapper = () => {
    const {register, formState: { errors }} = useForm<User>();
    return <InputText errors={errors?.user_name } register={register} name="user_name" label="Name" notes="Notes" />;
}


describe('InputText', () => {
    it('should render', () => {
        render(<InputTextWrapper />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('should render notes', () => {  
        render(<InputTextWrapper />);
        expect(screen.getByText('Notes')).toBeInTheDocument();
    });
});