import { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import animalService from '../../services/animalService';
import { Button, Text, IconButton } from 'react-native-paper';
import CampoInfo from './CampoInfo';
import { StyleSheet } from 'react-native';

const Hr = () => {
    return (
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    );
}

export default function DetalheAnimal({ route, navigation }) {

    const { animal } = route.params;
    console.log(animal);
    useEffect(() => {
        //animalService.getAnimalById(animal.id).then();
    }, []);
    return (
        <View>
            <Image source={{ uri: animal.foto }} style={{ width: "100%", height: 200 }} />
            <IconButton
                icon="pencil"
                color="#434343"
                size={40}
                onPress={() => console.log('Pressed')}
                style={{ position: 'absolute', top: 167, left: '80%', backgroundColor: '#fff', borderRadius: 50, boxShadow: '0px 0px 5px #434343' }}
            />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: '25px', color: '#434343'}}>{animal.nome}</Text>
                <View style={styles.campo}>
                    <CampoInfo label="Sexo" value={animal.sexo} />
                    <CampoInfo label="Porte" value={animal.porte} />
                    <CampoInfo label="Idade" value={animal.idade} />
                </View>
                <View style={{ marginBottom: 16, marginTop: 5 }} >
                    <CampoInfo label="Localização" value={"Nao definida"} />
                </View>
                <Hr />
                <View style={styles.campo}>
                    <CampoInfo label="Castrado" value={animal.saude?.includes("castrado") ? "Sim" : "Não"} />
                    <CampoInfo label="Vacinado" value={animal.saude?.includes("vacinado") ? "Sim" : "Não"} />
                </View>
                <View style={styles.campo}>
                    <CampoInfo label="Vermifugado" value={animal.saude?.includes("vermifugado") ? "Sim" : "Não"} />
                    <CampoInfo label="Doenças" value={animal.doencas} />
                </View>
                <Hr />
                <View style={{ marginBottom: 16, marginTop: 5 }} >
                    <CampoInfo label="Temperamento" value={animal.temperamento.join(", ")} />
                </View>
                <Hr />
                <View style={{ marginBottom: 16, marginTop: 5 }} >
                    <CampoInfo label="Exigências" value={animal.exigencias.join(", ")} />
                </View>
                <Hr />
                <View style={{ marginBottom: 16, marginTop: 5 }} >
                    <CampoInfo label={"Mais sobre " + animal.nome} value={animal.historia} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                    <Button mode='contained' buttonColor='#88c9bf' textColor='#757575' onPress={() => alert('Click pet adotado')}>ADOTAR PET</Button>&nbsp;&nbsp;&nbsp;
                    <Button mode='contained' buttonColor='#88c9bf' textColor='#757575' onPress={() => alert('Click pet removido')}>REMOVER PET</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    campo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginTop: 5
    }
});