import {render, screen} from '@testing-library/react';
import InputText from '../InputText';
import { User } from "@/User";
import { useForm} from "react-hook-form"


describe('InputText', () => {
    it('should render', () => {
        const {register, formState: { errors }} = useForm<User>();
        render(<InputText errors={errors?.user_name } register={register} name="user_name" label="Name" />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('should render notes', () => {  
        const {register, formState: { errors }} = useForm<User>();      
        render(<InputText errors={errors?.user_name } register={register} name="user_name" label="Name" notes="Notes"/>);
        expect(screen.getByText('Notes')).toBeInTheDocument();
    });
});