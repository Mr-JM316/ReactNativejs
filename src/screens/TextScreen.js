import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
    const [Name, setName] = useState('');
    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={Name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text>My Name is {Name}</Text>
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
export default TextScreen;