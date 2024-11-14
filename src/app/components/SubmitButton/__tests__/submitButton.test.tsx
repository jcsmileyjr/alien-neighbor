import {render, screen} from '@testing-library/react';
import SubmitButton from '../SubmitButton';


describe('SubmitButton', () => {
    it('should render', () => {
        render(<SubmitButton handleSubmit={() => Promise.resolve() } messageOne='Submit' messageTwo='To' />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });    

    it('should render notes', () => {
        render(<SubmitButton handleSubmit={() => Promise.resolve() } messageOne='Submit' messageTwo='To' notes="Notes" />);
        expect(screen.getByText('Notes')).toBeInTheDocument();
    });
}); 