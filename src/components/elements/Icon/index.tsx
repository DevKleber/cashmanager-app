import React from 'react';
import Icon   from 'react-native-vector-icons/MaterialIcons';

export function IconText(props: any) {

    return (
        <Icon {...props} color = {props.color ?? "#666360"} size={props.size ?? 24}/>
    );
}