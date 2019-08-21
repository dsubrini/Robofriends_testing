import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage { ...mockProps }/>)
});

it('renders MaiPage without crashing', function () {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', function () {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    };
    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters robots correctly 2', function () {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    };
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage { ...mockProps3 }/>);
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});

it('render isPending correctly', function () {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        isPending: true
    };
    const wrapper4 = shallow(<MainPage { ...mockProps4 }/>);
});
