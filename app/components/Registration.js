import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HelloTest } from '../helper/Helper';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('Profile');
        }
    }


    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Text style={styles.header}>- Registration -</Text>

                    <TextInput
                        style={styles.textInput}
                        placeholder='Name'
                        onChangeText={ (name) => this.setState({name}) }
                        underlineColorAndroit='transparent'
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        onChangeText={ (email) => this.setState({email}) }
                        underlineColorAndroit='transparent'
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={ (password) => this.setState({password}) }
                        underlineColorAndroit='transparent'
                        secureTextEntry={true}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Password Confirmation'
                        onChangeText={ (password_confirmation) => this.setState({password_confirmation}) }
                        underlineColorAndroit='transparent'
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.btnReg}
                        onPress={this.registration}>
                        <Text>Submit</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );
    }

    registration = () => {
        if (HelloTest(this.state.email) !== false) {
            alert('Valid Email');
        } else {
            alert('Invalid Email');
        }
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C2037',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btnLog: {
        alignSelf: 'stretch',
        backgroundColor: 'skyblue',
        padding: 20,
        alignItems: 'center',
    },
    btnReg: {
        alignSelf: 'stretch',
        backgroundColor: 'skyblue',
        padding: 20,
        alignItems: 'center',
    }

});