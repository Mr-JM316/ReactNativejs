import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const Employees = [
        { name: 'Adam #1', Age: 20 },
        { name: 'David #2', Age: 25 },
        { name: 'Laura #3', Age: 30 },
        { name: 'Justin #4', Age: 35 },
    ];
    return (
        <FlatList keyExtractor={Employee => Employee.name}
            data={Employees}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>;
            }}
        />
    );


};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

