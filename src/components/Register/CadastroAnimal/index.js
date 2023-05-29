import { TouchableOpacity, ScrollView, Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
//import RadioButton from './RadioButton';
import { TextInput, RadioButton, IconButton, Checkbox, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function CadastroAnimal({ navigation }) {

    const [refresh, setRefresh] = useState(false);

    const checkboxTemperamento = [
        { label: 'Brincalhão', value: 'Brincalhão' },
        { label: 'Calmo', value: 'Calmo' },
        { label: 'Tímido', value: 'Tímido' },
        { label: 'Guarda', value: 'Guarda' },
        { label: 'Amoroso', value: 'Amoroso' },
        { label: 'Preguiçoso', value: 'Preguiçoso' }
    ];
    const checkboxSaude = [
        { label: 'Vacinado', value: 'Vacinado' },
        { label: 'Vermifugado', value: 'Vermifugado' },
        { label: 'Castrado', value: 'Castrado' },
        { label: 'Doente', value: 'Doente' }
    ];
    const checkboxExigencias = [
        { label: 'Termo de adoção', value: 'Termo de adoção' },
        { label: 'Fotos da casa', value: 'Fotos da casa' },
        { label: 'Visita prévia ao animal', value: 'Visita prévia ao animal' },
        { label: 'Acompanhamento pós adoção', value: 'Acompanhamento pós adoção' }
    ];

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* <Text>Tenho Interesse em cadastrar um animal para:</Text>
            <RadioButton options={options} /> */}
            <Formik
                initialValues={{ nome: '', especie: '', sexo: '', porte: '', idade: '', temperamento: [], saude: [], doencas: '', exigencias: [], tempoAcompanhamentoPosAdocao: '', historia: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Text>Adoção</Text>
                        <View>
                            <Text style={styles.label}>NOME DO ANIMAL</Text>
                            <TextInput
                                value={values.nome}
                                placeholder='Nome do Animal'
                                onChangeText={handleChange('nome')}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>FOTOS DO ANIMAL</Text>
                            <TouchableOpacity style={styles.imagePicker}>
                                <IconButton icon="plus-circle-outline" size={24} color="#9D9D9E" />
                                <Text style={{ color: '#9D9D9E' }}>Adicionar Foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.label}>ESPÉCIE</Text>
                            <RadioButton.Group onValueChange={(especie) => {values.especie = especie; setRefresh(!refresh);}} value={values.especie}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton value="cachorro" />
                                    <Text>Cachorro</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton value="gato" />
                                    <Text>Gato</Text>
                                </View>
                            </RadioButton.Group>
                        </View>
                        <View>
                            <Text style={styles.label}>SEXO</Text>
                            <View style={styles.radioForm}>
                                <RadioButton.Group onValueChange={(sexo) => {values.sexo = sexo; setRefresh(!refresh);}} value={values.sexo}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="macho" />
                                        <Text>Macho</Text>
                                    </View>
                                    <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="femea" />
                                        <Text>Fêmea</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>PORTE</Text>
                            <View style={styles.radioForm}>
                                <RadioButton.Group onValueChange={(porte) => {values.porte = porte; setRefresh(!refresh);}} value={values.porte} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="pequeno" />
                                        <Text>Pequeno</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="medio" />
                                        <Text>Médio</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="grande" />
                                        <Text>Grande</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>IDADE</Text>
                            <View style={styles.radioForm}>
                                <RadioButton.Group onValueChange={(idade) => {values.idade = idade; setRefresh(!refresh);}} value={values.idade} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="filhote" />
                                        <Text>Filhote</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="adulto" />
                                        <Text>Adulto</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="idoso" />
                                        <Text>Idoso</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>TEMPERAMENTO</Text>
                            <View>
                                {checkboxTemperamento.map((item, index) => (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
                                        <Checkbox
                                            status={values.temperamento.indexOf(item.value) !== -1 ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                if (values.temperamento.indexOf(item.value) !== -1) {
                                                    values.temperamento.splice(values.temperamento.indexOf(item.value), 1);
                                                }
                                                else {
                                                    values.temperamento.push(item.value);
                                                }
                                                setRefresh(!refresh);
                                                console.log(values.temperamento);
                                            }}
                                        />
                                        <Text>{item.label}</Text>
                                    </View>
                                ))
                                }
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>SAÚDE</Text>
                            {checkboxSaude.map((item, index) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
                                    <Checkbox
                                        status={values.saude.indexOf(item.value) !== -1 ? 'checked' : 'unchecked'}
                                        onPress={() => { 
                                            if (values.saude.indexOf(item.value) !== -1) {
                                                values.saude.splice(values.saude.indexOf(item.value), 1);
                                            }
                                            else {
                                                values.saude.push(item.value);
                                            }
                                            setRefresh(!refresh);
                                            console.log(values.saude);
                                        }}
                                    />
                                    <Text>{item.label}</Text>
                                </View>
                            ))
                            }
                            <TextInput
                                value={values.doencas}
                                placeholder='Doenças do Animal'
                                onChangeText={handleChange('doencas')}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>EXIGÊNCIAS PARA ADOÇÃO</Text>
                            {checkboxExigencias.map((item, index) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
                                    <Checkbox
                                        status={values.exigencias.indexOf(item.value) !== -1 ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            if (values.exigencias.indexOf(item.value) !== -1) {
                                                values.exigencias.splice(values.exigencias.indexOf(item.value), 1);
                                            }
                                            else {
                                                values.exigencias.push(item.value);
                                            }
                                            setRefresh(!refresh);
                                            console.log(values.exigencias);
                                        }}
                                    />
                                    <Text>{item.label}</Text>
                                </View>
                            ))
                            }
                            <View style={{ marginLeft: 10 }}>
                                <RadioButton.Group onValueChange={(tempoAcompanhamentoPosAdocao) => {values.tempoAcompanhamentoPosAdocao = tempoAcompanhamentoPosAdocao; setRefresh(!refresh);}} value={values.tempoAcompanhamentoPosAdocao} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="1 mês" disabled={values.exigencias.indexOf('Acompanhamento pós adoção') !== -1 ? false : true} />
                                        <Text>1 mês</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="3 meses" disabled={values.exigencias.indexOf('Acompanhamento pós adoção') !== -1 ? false : true} />
                                        <Text>3 meses</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton value="6 meses" disabled={values.exigencias.indexOf('Acompanhamento pós adoção') !== -1 ? false : true} />
                                        <Text>6 meses</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>SOBRE O ANIMAL</Text>
                            <TextInput
                                placeholder='Compartilhe a história do animal'
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={handleChange('historia')}
                            />
                        </View>
                        <Button mode="contained" onPress={handleSubmit} style={styles.button}/>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 16,
        marginBottom: 16,
        width: 180,
        height: 180,
    },
    button: {
        backgroundColor: '#ffd358',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#434343',
        fontWeight: 'bold',
        fontSize: 18,
    },
    contentContainer: {
        paddingVertical: 20
    }
});