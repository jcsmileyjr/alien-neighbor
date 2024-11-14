import {render, screen} from '@testing-library/react';
import SubmitButton from '../SubmitButton';


describe('SubmitButton', () => {
    it('should render', () => {
        render(<SubmitButton messageOne='Submit' messageTwo='To' />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });    
}); 