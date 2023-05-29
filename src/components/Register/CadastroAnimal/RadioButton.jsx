import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButton = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleOptionSelect(option.value)}
                    style={{
                        backgroundColor: selectedOption === option.value ? '#ffd358' : '#9D9D9E',
                        width: 100,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        marginRight: 10,
                    }}
                >
                    <Text style={{
                        color: selectedOption === option.value ? '#434343' : '#434343',
                        fontSize: 20 }}>
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default RadioButton;