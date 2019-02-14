import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';
import { Footer } from './Footer';
import { configure, shallow } from 'enzyme';
import { render } from 'react-testing-library';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders a signup message when on "stage 1" ', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Sign up for the TLC newsletter.')).toBeInTheDocument();
});
