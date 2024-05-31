import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import Rating from '../src/components/Rating';

// Configure Enzyme for React 16
configure({ adapter: new Adapter() });

describe('Rating component', () => {
    it('renders correctly with given value', () => {
        const wrapper = shallow(<Rating value={3.5} />);
        const stars = wrapper.find('i');
        expect(stars.length).to.equal(5);
    });

    it('renders text correctly if provided', () => {
        const wrapper = shallow(<Rating value={2} text="Very Good" />);
        const textElement = wrapper.find('span').last();
        expect(textElement.text()).to.equal('Very Good');
    });

    it('renders with custom color', () => {
        const wrapper = shallow(<Rating value={4} color="red" />);
        const stars = wrapper.find('i');
        stars.forEach(star => {
            expect(star.prop('style')).to.deep.include({ color: 'red' });
        });
    });
});
