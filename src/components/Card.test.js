import { shallow } from 'enzyme';
import React from 'react';
import Card from "./Card";

it('expect to render SearchBox component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
