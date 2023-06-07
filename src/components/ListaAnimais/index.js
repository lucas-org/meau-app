import { useState, useEffect } from 'react';
import { View } from 'react-native';
import animalService from '../../services/animalService';
import { Modal, Portal, Button, Card, Text, PaperProvider } from 'react-native-paper';


export default function ListaAnimais() {

    const [animais, setAnimais] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        animalService.getAnimals().then((res) => setAnimais(res));
        console.log(animais);
    }, []);
    const [animalModal, setAnimalModal] = useState(null);
    const showModal = (animal) => {
        setAnimalModal(animal);
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <View>
            <PaperProvider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>{animalModal?.nome}</Text>
                    </Modal>
                </Portal>
            </PaperProvider>
            <View>
                {animais?.map((animal, index) => (
                    <Card key={index} style={{ margin: 16 }}>
                        <Card.Title title={<Text>{animal.nome}</Text>} subtitle={<Text>{animal.especie}</Text>} />
                        <Card.Content>
                            <Text>{animal.historia}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: animal.foto }} />
                        <Card.Actions>
                            <Button onPress={showModal}>Ver mais</Button>
                        </Card.Actions>
                    </Card>
                ))}
            </View>
        </View>
    );
}
