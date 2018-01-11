import React from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {connect} from 'react-redux';
import  * as actions from "../actions/Actions";



class AppHeader extends React.Component {

    render() {
        return <Header>
            <Left/>
            <Body>
            <Title>Ghetto Yelp</Title>
            </Body>
            <Right>
                <Button transparent onPress={this.props.getGeolocalizedList}>

                    <Icon name='cloud-download'/>
                </Button>
            </Right>
        </Header>
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getGeolocalizedList: () => dispatch(actions.getGeolocalizedList())
    }

}

export default connect(undefined, mapDispatchToProps)(AppHeader);