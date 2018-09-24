import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }

    render() {
        return (
            <View style={styles.flex}>
                <ImageBackground source={require('../img/bnk48.png')} style={styles.backdrop}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} /> 
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25  },
    backdrop: { width: '100%', height: '100%'},
    flex: {flex:1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}
});
