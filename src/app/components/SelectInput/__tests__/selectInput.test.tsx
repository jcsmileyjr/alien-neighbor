import {render, screen} from '@testing-library/react';

import SelectInput from '../SelectInput';

describe('SearchInput', () => {
    const labelTitle = 'How far do you mind commuting to work';
    it('should render', () => {
        render(<SelectInput />);
        expect(screen.getByLabelText(labelTitle)).toBeInTheDocument();
    });
});