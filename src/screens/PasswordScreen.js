import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';


const PasswordScreen = () => {
    const [Password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={Password}
                onChangeText={newValue => setPassword(newValue)}
            />
            {Password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: '#000000',
        borderWidth: 1
    }
})
export default PasswordScreen;