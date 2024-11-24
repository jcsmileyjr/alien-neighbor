import {render, screen} from '@testing-library/react';
import SelectInput from '../SelectInput';
import { User } from "@/User";
import { useForm} from "react-hook-form"
import commute from "@/app/lib/commute";

describe('SelectInput', () => {
    const {register} = useForm<User>();
    const labelTitle = 'How far do you mind commuting to work';
    it('should render', () => {
        render(<SelectInput options={commute} name="user_commute_distance" label={labelTitle} register={register} />);
        expect(screen.getByLabelText(labelTitle)).toBeInTheDocument();
    });
});