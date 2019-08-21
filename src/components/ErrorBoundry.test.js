import {shallow} from "enzyme/build";
import ErrorBoundry from "./ErrorBoundry";
import React from "react";

let wrapper = shallow(<ErrorBoundry/>);

it('renders ErrorBoundry without crashing', function () {
    wrapper.setState({ hasError: false });
    expect(wrapper).toMatchSnapshot();
});
