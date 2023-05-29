import { Feather } from '@expo/vector-icons';
import { Text, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, RadioButton, IconButton, Checkbox, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function CadastroPessoal({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.info} > As informacoes preenchidas serao  divulgas apenas para a pessoal com a qual voce realizar o processo de adoção e/ou apadrinhamento,
                após a formalização do processo.</Text>
            <Formik
                initialValues={{ nome: '', idade: '', email: '', estado: '', cidade: '', endereco: '', telefone: '', nomeUsuario: '', senha: '', confirmacaoSenha: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Text style={styles.text} > INFORMAÇÕES PESSOAIS </Text>
                        <TextInput
                            placeholder="Nome completo"
                            onChangeText={handleChange('nome')}
                            onBlur={handleBlur('nome')}
                            value={values.nome}
                        />
                        <TextInput
                            placeholder="Idade"
                            onChangeText={handleChange('idade')}
                            onBlur={handleBlur('idade')}
                            value={values.idade}
                        />
                        <TextInput
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <TextInput
                            placeholder="Estado"
                            onChangeText={handleChange('estado')}
                            onBlur={handleBlur('estado')}
                            value={values.estado}
                        />
                        <TextInput
                            placeholder="Cidade"
                            onChangeText={handleChange('cidade')}
                            onBlur={handleBlur('cidade')}
                            value={values.cidade}
                        />
                        <TextInput
                            placeholder="Endereço"
                            onChangeText={handleChange('endereco')}
                            onBlur={handleBlur('endereco')}
                            value={values.endereco}
                        />
                        <TextInput  
                            placeholder="Telefone"
                            onChangeText={handleChange('telefone')}
                            onBlur={handleBlur('telefone')}
                            value={values.telefone}
                        />
                        <Text style={styles.text}> INFORMAÇÕES DE PERFIL </Text>
                        <TextInput
                            placeholder="Nome de usuário"
                            onChangeText={handleChange('nomeUsuario')}
                            onBlur={handleBlur('nomeUsuario')}
                            value={values.nomeUsuario}
                        />
                        <TextInput
                            placeholder="Senha"
                            onChangeText={handleChange('senha')}
                            onBlur={handleBlur('senha')}
                            value={values.senha}
                        />
                        <TextInput
                            placeholder="Confirmação de senha"
                            onChangeText={handleChange('confirmacaoSenha')}
                            onBlur={handleBlur('confirmacaoSenha')}
                            value={values.confirmacaoSenha}
                        />

                        <Text style={styles.text}> FOTO DE PERFIL </Text>
                        <TouchableOpacity style={styles.imagePicker}>
                            <Feather name="plus-circle" size={24} color="#9D9D9E" />
                            <Text style={{ color: '#9D9D9E' }}>Adicionar Foto</Text>
                        </TouchableOpacity>

                        <Button onPress={handleSubmit}>FAZER CADASTRO</Button>
                    </View>
            )}
            </Formik>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        flexDirection: 'column',
        justifyContent: 'center',
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
    contentContainer: {
        paddingVertical: 20
    },
    text: {
        color: '#589B9B',
        fontSize: 16,
        marginBottom: 12,
    },
    info: {
        backgroundColor: '#CFE9E5',
        padding: 16,
        marginBottom: 16,
        textAlign: 'center',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
        marginBottom: 20,
    },
    input: {
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
        fontSize: 16,
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
});