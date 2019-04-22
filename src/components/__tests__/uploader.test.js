import React from 'react'
import { shallow } from 'enzyme'
import Uploader from '../uploader.js'

let props = {
  uploadLineup: jest.fn()
}

describe('Uploader Component',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Uploader {...props} />)
  })
  it('renders the Uploader component',()=>{
    expect(wrapper).toBeDefined();
  })
  it('calls the onChange function when file is uploaded',()=>{
    wrapper.find('input').simulate('change');
    expect(props.uploadLineup).toHaveBeenCalled();
  })
})
