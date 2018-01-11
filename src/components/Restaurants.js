import React from "react";
import {Body, Container, Content, Header, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import {connect} from "react-redux";
import RestaurantList from "./RestaurantList";
import * as actions from "../actions/Actions";


class Restaurants extends React.Component {
    render() {
        let data = this.props.data.map((item)=>{
            return(
            <RestaurantList {...item} id={item.id}/>
            )
        });
        return (
            <Container>
                <Content>
                    <List>
                    {data}
                    </List>
                    </Content>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.data
    };
};

export default connect(mapStateToProps)(Restaurants)