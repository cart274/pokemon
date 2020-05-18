import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';
import Enzyme, { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);
const store = mockStore({pokemons: { data: {}, loading: false, error: '', dataDetail: {} }});

describe('<Home />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
