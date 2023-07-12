import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import Button from 'react-native-paper';

export default function Interessados({ navigation }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Pegar os interessados do animal
    }, []);
    return (
        <SafeAreaView style={{ marginTop: 64 }}>
            <View style={styles.perfil}>
                <Image source={require('../../../assets/fotoperfil.png')} style={styles.image} />
                <Text styles={styles.text}>Nome do Interessado</Text>
                <Text styles={styles.text}>XX anos</Text>
            </View>
            <View style={styles.perfil}>
                <Image source={require('../../../assets/fotoperfil.png')} style={styles.image} />
                <Text styles={styles.text}>Nome do Interessado</Text>
                <Text styles={styles.text}>XX anos</Text>
            </View>
            <View style={styles.perfil}>
                <Image source={require('../../../assets/fotoperfil.png')} style={styles.image} />
                <Text styles={styles.text}>Nome do Interessado</Text>
                <Text styles={styles.text}>XX anos</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    perfil: {
        flexDirection: 'col',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    text: {
        fontSize: '18px',
        fontWeight: '500',
        color: '#434343'
    }
});