import React from 'react'
import { shallow } from 'enzyme'
import Results from '../results.js'
import Lineup from '../../lineupClass.js';

const lineup = new Lineup(['player1','player2'],1200,1);
lineup.firstHalfArray.push(0);
const props = {
  changeResults: jest.fn(),
  lineupArray: [lineup],
  getTime: jest.fn()
}

describe('Results component',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Results {...props} />)
  })
  it('renders',()=>{
    expect(wrapper.find('div.reportDiv')).toBeDefined();
  })
  it('reacts to the onclick',()=>{
    wrapper.find('button').simulate('click');
    expect(props.changeResults).toHaveBeenCalled();
  })
  it('fills out the lineup properly',()=>{
    expect(wrapper.find('td').first().text()).toEqual('player1-player2')
  })
  it('calls the getTime function',()=>{
    expect(props.getTime).toHaveBeenCalled();
  })
})
