import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from "./CounterButton";

it('expect to render CounterButton component', function () {
    const mockColor = 'red';
    const Component = shallow(<CounterButton color={mockColor}/>);
    expect(Component).toMatchSnapshot();

    const clikableButton = Component.find("button");
    clikableButton.simulate("click");
    clikableButton.simulate("click");
    expect(Component.state()).toEqual({count: 2});
    expect(Component.props().color).toEqual('red');
});
