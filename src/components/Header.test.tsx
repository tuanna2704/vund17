import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { Typography} from "@mui/material";

test('check Header component', () => {
  const component = shallow(
    <Header/>
  );

  expect(component.find(Typography).text()).toEqual('ReactJs - Reskill')
});
