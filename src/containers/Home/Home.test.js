import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);
const results = [{name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"},
{name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"},
{name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/"},
{name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/"},
{name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/"}]
const store = mockStore({pokemons: { data: {results}, loading: false, error: '', dataDetail: {} }});

describe('<Home />', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<Provider store={store}><Home /></Provider>);
        expect(wrapper).toMatchSnapshot();
    });
    
})
