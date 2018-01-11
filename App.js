import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Main from "./src/Main";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ghettoYelpApp from "./src/reducers/Reducers";
import thunk from 'redux-thunk';

let state = { status: 1, data: [], item: null};

let store = createStore(ghettoYelpApp, state,  applyMiddleware(thunk));


export default class App extends React.Component {

    constructor() {
        super();
    }


    render() {
        return(
            <Provider store={store}>
            <Main/>
            </Provider>
        )
    }
}



