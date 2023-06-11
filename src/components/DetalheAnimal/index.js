import { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import animalService from '../../services/animalService';
import { Button, Text } from 'react-native-paper';
import CampoInfo from './CampoInfo';

export default function DetalheAnimal(animal) {

    useEffect(() => {
        animalService.getAnimalById(animal.id).then();
    }, []);
    return (
        <View>
            <Image source={{ uri: animal.foto }} />
            <Text>{animal.nome}</Text>
            <View>
                <CampoInfo label="Sexo" value={animal.sexo} />
                <CampoInfo label="Porte" value={animal.porte} />
                <CampoInfo label="Idade" value={animal.idade} />
            </View>
            <CampoInfo label="Localização" value={"Nao definida"} />
            <View>
                <CampoInfo label="Castrado" value={animal.saude.includes("castrado") ? "Sim" : "Não"} />
                <CampoInfo label="Vacinado" value={animal.saude.includes("vacinado") ? "Sim" : "Não"} />
            </View>
            <View>    
                <CampoInfo label="Vermifugado" value={animal.saude.includes("vermifugado") ? "Sim" : "Não"} />
                <CampoInfo label="Doenças" value={animal.doencas} />
            </View>
            <View>
                <CampoInfo label="Temperamento" value={animal.temperamento.join(", ")} />
            </View>
            <View>
                <CampoInfo label="Exigências" value={animal.exigencias.join(", ")} />
            </View>
            <View>
                <CampoInfo label={"Mais sobre " + animal.nome} value={animal.historia} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => alert('Click imteressados')}>IMTERESSADOS</Button>
                <Button onPress={() => alert('Click pet removido')}>REMOVER PET</Button>
            </View>
        </View>
    );
}