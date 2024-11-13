import {render, screen} from '@testing-library/react';
import InputText from '../InputText';

describe('InputText', () => {
    it('should render', () => {
        render(<InputText name="name" label="Name" onUpdate={() => {}} />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('should render notes', () => {
        render(<InputText name="name" label="Name" notes="Notes" onUpdate={() => {}} />);
        expect(screen.getByText('Notes')).toBeInTheDocument();
    });
});