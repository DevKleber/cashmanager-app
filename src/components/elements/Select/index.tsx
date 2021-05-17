import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {IconText} from '../Icon';

import {Container, BoxIcon, TextPreFixer} from './style';

export function Select( props: any) {

	return (
		<Container>
			<BoxIcon>
				{props.icon ? <IconText name={props.icon} /> : <TextPreFixer>{props?.preFixer}</TextPreFixer>}
			</BoxIcon>
			<Picker
				style={{flex: 1}}
				selectedValue={props.state}
				onValueChange={(item) => (props.onChange(item))}
			>
				<Picker.Item label={props.placeholder} value='' />

				{props?.options?.map((item:any, index: number) => (
					<Picker.Item key={index} label={item[props.fields.label]} value={item[props.fields.value]} />
				))}
			</Picker>
		</Container>
	);
}
