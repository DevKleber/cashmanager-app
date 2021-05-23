import React from 'react';
import {IconText} from '../Icon';

import {Container, Input, BoxIcon, TextPreFixer} from './style';

export function InputText(props: any) {
	return (
		<Container
			style={{
				backgroundColor: props.backgroundColor ?? '#e8e9ef',
				borderWidth: props.outline ? 1 : 0,
				borderColor: props.outline ? '#dadada' : 'none',
			}}>
			<BoxIcon>
				{props.icon ? (
					<IconText name={props.icon} />
				) : (
					<TextPreFixer>{props?.preFixer}</TextPreFixer>
				)}
			</BoxIcon>
			<Input {...props} onChangeText={text => props.onChangeText(text)} />
		</Container>
	);
}
