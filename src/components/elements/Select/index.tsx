import { Picker } from '@react-native-picker/picker';
import React, { Fragment, JSXElementConstructor, ReactElement } from 'react';
import { Text } from 'react-native';
import {IconText} from '../Icon';

import {Container, BoxIcon, TextPreFixer} from './style';

function itemsTree({placeholder, options, fields}: any) {
	let element = [<Picker.Item label={placeholder} value='' color='#8b8b8b'/>];

	options?.map((item:any) => {

		element = [...element, <Picker.Item key={item.id} label={item[fields.label]} value={item[fields.value]} color='#8b8b8b'/>];

		item?.children?.map((child:any) => {
			element = [...element, <Picker.Item key={child.id} label={child[fields.label]} value={child[fields.value]}  color='#1f1f1f' style={{marginLeft: '20px'}}/>];
		})
		
	})

	return element;
}

function items({placeholder, options, fields}: any) {
	
	let element = [<Picker.Item label={placeholder} value='' color='#8b8b8b'/>];

	options?.map((item:any) => {
		element = [...element, <Picker.Item key={item.id} label={item[fields.label]} value={item[fields.value]}  color='#1f1f1f'/>];
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
