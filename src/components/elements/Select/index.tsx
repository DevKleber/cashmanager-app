import { Picker } from '@react-native-picker/picker';
import React, { Fragment, JSXElementConstructor, ReactElement } from 'react';
import { Text } from 'react-native';
import {IconText} from '../Icon';

import {Container, BoxIcon, TextPreFixer} from './style';

function itemsTree(props: any) {
	let element = [<Picker.Item label={props.placeholder} value='' color='#8b8b8b'/>];

	props?.options?.map((item:any, index: number) => {

		element = [...element, <Picker.Item key={index} label={item[props.fields.label]} value={item[props.fields.value]} color='#8b8b8b'/>];

		item?.children?.map((child:any, i: number) => {
			element = [...element, <Picker.Item key={(i + index) * 100} label={child[props.fields.label]} value={child[props.fields.value]}  color='#1f1f1f' style={{marginLeft: '20px'}}/>];
		})
		
	})

	return element;
}

function items(props: any) {
	let element = [<Picker.Item label={props.placeholder} value='' color='#8b8b8b'/>];
	props?.options?.map((item:any, index: number) => {
		element = [...element, <Picker.Item key={index} label={item[props.fields.label]} value={item[props.fields.value]}  color='#1f1f1f'/>];
	})

	return element;
}

export function Select( props: any) {

	return (
		<Container>
			<BoxIcon>
				{props.icon ? <IconText name={props.icon} /> : <TextPreFixer>{props?.preFixer}</TextPreFixer>}
			</BoxIcon>
			<Picker
				style={{flex: 1, color: '#1f1f1f'}}
				selectedValue={props.state}
				onValueChange={(item) => (props.onChange(item))}
			>
				{ props.isTree ? itemsTree(props) : items(props)}
			</Picker>
		</Container>
	);
}
