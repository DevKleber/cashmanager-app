import React from 'react';
import { Text } from 'react-native';
import Logo from './../../../assets/img/logoGreenCash.svg';

import { Container, Input, BoxIcon } from './style';

interface InputProps {
    placeholder?: string,
    value?: string,
    icon: string,   
}

export function InputText({placeholder, value, icon}: InputProps) {

    return (
        <Container>
            <BoxIcon>
                <Text>{icon}</Text>
            </BoxIcon>
            <Input placeholder={placeholder}/>
        </Container>
    );


}