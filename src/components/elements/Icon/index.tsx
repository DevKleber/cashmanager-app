import React from 'react';
import { Icon as IconText } from 'react-native-elements/dist/icons/Icon';

export function Icon(props: any) {

    return (
        <IconText {...props} color = {props.color ?? "#666360"}/>
    );


}