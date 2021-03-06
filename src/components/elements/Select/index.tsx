import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {IconText} from '../Icon';

import {Container, BoxIcon, TextPreFixer} from './style';

function itemsTree({placeholder, options, fields}: any) {
	let element = [<Picker.Item key={''} label={placeholder} value='' enabled={true} color='#8b8b8b'/>];

	options?.map((item:any) => {

		element = [...element, <Picker.Item key={item[fields.value]} label={item[fields.label]} enabled={false} value={item[fields.value]} color='#8b8b8b'/>];

		item?.children?.map((child:any) => {
			element = [...element, <Picker.Item key={child[fields.value]} label={child[fields.label]} enabled={true} value={child[fields.value]}  color='#1f1f1f' style={{marginLeft: '20px'}}/>];
		})
		
	})

	return element;
}

function items({placeholder, options, fields}: any) {
	
	let element = [<Picker.Item key={placeholder} label={placeholder} value='' color='#8b8b8b'/>];

	options?.map((item:any) => {
		element = [...element, <Picker.Item key={item[fields.value]} label={item[fields.label]} value={item[fields.value]} color='#1f1f1f'/>];
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
