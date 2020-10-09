import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    // First Test
    it('renders', () => {
        render(<Contact />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render ContactForm
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
})