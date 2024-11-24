import {render, screen} from '@testing-library/react';
import InputText from '../InputText';
import { User } from "@/User";
import { useForm} from "react-hook-form"
const {register, formState: { errors }} = useForm<User>();

describe('InputText', () => {
    it('should render', () => {
        render(<InputText errors={errors?.user_name } register={register} name="user_name" label="Name" />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('should render notes', () => {        
        render(<InputText errors={errors?.user_name } register={register} name="user_name" label="Name" notes="Notes"/>);
        expect(screen.getByText('Notes')).toBeInTheDocument();
    });
});