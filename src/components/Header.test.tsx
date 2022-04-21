import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import {
  MemoryRouter,
} from "react-router-dom";

test('renders without crashing', () => {
  const component = shallow(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
  );
  console.log(component.text())
  expect(component.text()).toEqual('Project 01 - ReactJS Redux')
});