import { Container, Header, Content, Spinner } from 'native-base';
import React from 'react';

export default class LoadingSpinner extends React.Component {
    render() {
        return (
                <Content>
                    <Spinner color='blue' />
                </Content>
        );
    }
}