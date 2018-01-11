import React from "react";
import {Body, Container, Content, Header, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import {connect} from "react-redux";
import * as actions from "../actions/Actions";


class RestaurantList extends React.Component {
    render() {
        return (


                        <ListItem id={this.props.id} onPress={this.props.toDetail}>
                            <Body>
                            <Text>{this.props.name}</Text>
                            <Text note>{this.props.price}</Text>
                            </Body>
                            <Right>
                                <Text note >{(this.props.distance/1000).toFixed(2)} km</Text>
                            </Right>
                        </ListItem>


        );
    }
}

function mapStateToProps(state) {
    return{
        DATA: state.data
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return{
        toDetail: () => {console.log(ownProps.id);
        return dispatch(actions.detailDispatch(ownProps))}
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)