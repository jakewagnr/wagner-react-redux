import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Restaurants from "./components/Restaurants";
import AppHeader from "./components/AppHeader";
import {connect} from "react-redux";
import Detail from "./components/Detail";
import LoadingSpinner from "./components/LoadingSpinner";





class Main extends React.Component {

    render() {
        let display = "";
        const STATUS = this.props.STATUS

        if(STATUS == 1){
            display = <Text>Tap the load button to load resturants near you</Text>;
        }
        if(STATUS == 2){
            display = <LoadingSpinner/>;
        }
        if(STATUS == 3){
            display = <Restaurants/>;
        }
        if(STATUS == 4){
            display = <Detail/>;
        }

        return (
            <Container>
                <AppHeader/>
                <Content>
                    {display}
                </Content>
                <Footer>
                    <Text>Jacob Wagner</Text>
                </Footer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        STATUS: state.status
    }
}

export default connect(mapStateToProps)(Main)