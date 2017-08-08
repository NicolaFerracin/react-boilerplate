import React from 'react';
import Main from './Main.js';
import { mount } from 'enzyme';

let wrapper
describe('<Main/> route test', () => {
    beforeEach(() => {
        wrapper = mount(<Main />);
    });

    it('should contain text', () => {
        const expected = 'Hello World!';
        expect(wrapper.text()).toEqual(expected);
    });
    it('should contain h1', () => {
        expect(wrapper.find('h1').length).toBe(1);
    });
    it('h1 should contain class', () => {
        const expected = 'salutation';
        expect(wrapper.find('h1').hasClass(expected)).toEqual(true);
    });
});
