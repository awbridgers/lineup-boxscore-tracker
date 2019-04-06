import React from 'react';
import { shallow } from 'enzyme';
import NamePlate from '../namePlate.js';


describe('namePlate component',()=>{
  let wrapper;
  beforeEach(() => wrapper = shallow(<NamePlate name = 'John Cena' id = '0' onClick = {()=>{}} />));
  it('renders without crashing',()=>{
    shallow(<NamePlate name = 'John Cena' />);
  })
  it('renders the name correctly',()=>{
    expect(wrapper.find('span').text()).toEqual('John Cena');
    wrapper.setProps({name: 'Darth Nihilus'});
    expect(wrapper.find('span').text()).toEqual('Darth Nihilus');
  })
  it('changes the background color if name is empty',()=>{
    const div = wrapper.find('div')
    expect(div.props().style).toHaveProperty('background', '#CFB53B')
    wrapper.setProps({name: ''});
    const newDiv = wrapper.find('div')
    expect(newDiv.props().style).toHaveProperty('background', 'grey');
  })
})
