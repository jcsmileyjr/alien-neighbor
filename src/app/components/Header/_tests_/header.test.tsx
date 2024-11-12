import {render, screen} from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('should render', () => {
        render(<Header />);
        expect(screen.getByText('Space Colony Sign Up')).toBeInTheDocument();
    });

    it('should render the Alien Neighbor logo', () => {
        render(<Header />);
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('src', "/_next/image?url=%2Fimages%2Falien-planet.jpg&w=64&q=75")
    });
});