import React from "react";
import { Button, Text, Container, Content } from 'native-base';
import {connect} from "react-redux";
import * as actions from "../actions/Actions";
import {isFetching} from "../actions/Actions";


class Detail extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>{this.props.ITEM.name}</Text>
                    <Text>{this.props.ITEM.phone}</Text>
                    <Text>{(this.props.ITEM.distance/1000).toFixed(2)} km</Text>
                    <Text>{this.props.ITEM.price}</Text>
                    <Text>Rating: {this.props.ITEM.rating}</Text>
                    <Text>Reviews: {this.props.ITEM.review_count}</Text>
                    <Button onPress={this.props.isFetching}><Text>Back</Text></Button>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        ITEM: state.item
    }
}

const mapDistpatchToProps = (dispatch) => {
    return{
        isFetching: () => dispatch(actions.isFetching(3))
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Detail)