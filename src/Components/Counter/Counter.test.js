import React from 'react';
import ConnectedCounter, { Counter } from './Counter';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

function setup(connected = false, number = 1) {
  const mockStore = configureMockStore([thunk]);
  const storeStateMock = {
    'count': {
      number
    }
  };
  const store = mockStore(storeStateMock);
  const actions = {
    'increase': jest.fn(),
    'decrease': jest.fn()
  };
  let component;
  if (connected) {
    component = mount(<ConnectedCounter store={store} {...actions} />);
  } else {
    component = mount(<Counter store={store} {...actions} />);
  }

  return {
    'component': component,
    'actions': actions,
    'buttons': component.find('button'),
    'p': component.find('p')
  };
}

describe('<Counter/> component test', () => {
  it('should display count', () => {
    const { p } = setup(true);
    expect(p.text()).toMatch(/^Some state changes: 1/);
  });
  it('first button should call INCREASE', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.increase).toBeCalled();
  });
  it('second button should call DECREASE', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.decrease).toBeCalled();
  });
});
