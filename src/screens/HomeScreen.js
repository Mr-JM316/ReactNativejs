
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"; import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Welcome To ASOFT World</Text>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Our Team" />
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Goal" />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Images" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Count" />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Register Here" />
      <Button
        onPress={() => navigation.navigate('Passw')}
        title="Password" />
        <Button
          onPress={() => navigation.navigate('Cht')}
          title="Test Chat" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
export default HomeScreen;

