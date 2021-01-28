//20.4.7
import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('renders', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

it('renders', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
});

it('renders', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('button')).toHaveTextContent('Submit');
});