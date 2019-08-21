import { shallow } from 'enzyme';
import React from 'react';
import Header from "./Header";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
    const mockProps = {
        shouldComponentUpdate: jest.fn(),
    };
    wrapper = shallow(<Header { ...mockProps }/>)
});

it('expect to render Header component', () => {
    expect(wrapper).toMatchSnapshot();
});
