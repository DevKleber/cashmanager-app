import React from 'react';
// import { Text } from 'react-native';
// import Logo from './../../../assets/img/logoGreenCash.svg';
import { Icon as IconText } from 'react-native-elements/dist/icons/Icon';

// import { Container, Input, BoxIcon } from './style';

interface IconProps {
    color?: string,
    name: string,
    size?: number  
}

export function Icon({name, size ,color = "#666360"}: IconProps) {

    return (
        <IconText name={name} color={color} size={size}/>
    );


}