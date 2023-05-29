import { Button } from 'react-native';
import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const imagemOps = require('./../../../assets/imagem-ops.png');

export default function TelaErroAutorizacao({ navigation }) {

    return (
        <SafeAreaView style={ styles.container }> 
            <View style={{ alignItems: 'center' }} >
                <Image source={imagemOps} style={styles.image} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>
                    Você não pode realizar esta ação sem {"\n"} possuir um cadastro.
                </Text>
                <Button title='FAZER CADASTRO' onPress={() => navigation.navigate('Cadastro Pessoal')} style={styles.botao} color="#88c9bf"/>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>
                    Já possui cadastro ?
                </Text>
                <Button title='FAZER LOGIN' onPress={() => navigation.navigate('SignIn')} style={styles.botao} color="#88c9bf" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: '#88c9bf',
        padding: 10,
        margin: 10,
        width: 400,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});