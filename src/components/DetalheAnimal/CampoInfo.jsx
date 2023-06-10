import { Text } from 'react-native-paper';
import { View } from 'react-native';

export default function CampoInfo(props) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text>{props.label.toUpperCase()}</Text>
            <Text>{props.value}</Text>
        </View>
    );
}