import React from 'react';
import { shallow, mount } from 'enzyme';
import DeleteModal from './DeleteModal';
import { Button, Typography } from "@mui/material";

const toggleFunc = jest.fn();
const handleDelete = jest.fn();

test('check Text render and props called', () => {
  const component = shallow(
    <DeleteModal open={true} toggle={toggleFunc} handleDelete={handleDelete}/>
  );
  expect(component.find(Typography).text()).toEqual('Are you sure that wanna delete this item?')
  expect(component.find(Button).at(0).text()).toEqual('Delete')
  expect(component.find(Button).at(1).text()).toEqual('Cancel')

  component.find(Button).at(0).simulate('click')
  expect(handleDelete).toHaveBeenCalledTimes(1);

  component.find(Button).at(1).simulate('click')
  expect(toggleFunc).toHaveBeenCalledTimes(1);
});
