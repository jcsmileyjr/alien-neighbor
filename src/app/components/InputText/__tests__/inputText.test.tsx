import {render, screen} from '@testing-library/react';
import InputText from '../InputText';

describe('InputText', () => {
    it('should render', () => {
        render(<InputText name="name" label="Name" />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });
});