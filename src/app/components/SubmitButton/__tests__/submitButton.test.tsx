import {render, screen} from '@testing-library/react';



describe('SubmitButton', () => {
    it('should render', () => {
        render(<SubmitButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });    
}); 