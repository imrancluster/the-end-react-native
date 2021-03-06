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

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

                    <Text style={styles.header}>- LOGIN -</Text>

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

                    <TouchableOpacity
                        style={styles.btnLog}
                        onPress={this.login}>
                        <Text style={styles.whiteColor}>Log in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.registration}>
                        <Text style={styles.btnReg}>Sign Up?</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );
    }

    // Login Submit Function
    login = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if(reg.test(this.state.email) === false)
        {
            console.log("Email is Not Correct");
            alert("Invalid email");
        } else {
            alert("Valid email");
        }

    }

    registration = () => {
        this.props.navigation.navigate("Registration");
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
        backgroundColor: '#0c3637',
        padding: 20,
        alignItems: 'center',
    },
    btnReg: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    whiteColor: {
      color: '#fff',
    }

});