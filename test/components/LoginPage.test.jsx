import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../src/components/LoginPage';

test('should render login page correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);

    wrapper.find('button').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});
