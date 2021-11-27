import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="forest"
                Imagesource={require('../../assets/forest.jpg')}
                score={8}
            />
            <ImageDetail
                title="Beach"
                Imagesource={require('../../assets/beach.jpg')}
                score={7}
            />
            <ImageDetail
                title="Mountain"
                Imagesource={require('../../assets/forest.jpg')}
                score={9}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;