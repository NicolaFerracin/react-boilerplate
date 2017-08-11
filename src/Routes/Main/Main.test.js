import React from 'react';
import Main from './Main.js';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  myReducer:{
    someState: 'ABC'
  }
};
let store;
let component;
describe('<Main/> route test', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<Main store={store} />).shallow();
  });
  it('should contain h1', () => {
    expect(component.find('h1')).toHaveLength(1);
  });
  it('h1 should contain class', () => {
    const expected = 'salutation';
    expect(component.find('h1').hasClass(expected)).toEqual(true);
  });
  it('h1 should contain text', () => {
    const expected = 'Hello World!';
    expect(component.find('h1').text()).toEqual(expected);
  });
});
