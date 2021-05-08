import React from 'react';
import {Icon} from '../Icon';

import {Container, Input, BoxIcon} from './style';

export function InputText( props: any) {

	return (
		<Container>
			<BoxIcon>
				<Icon name={props.icon} />
			</BoxIcon>
			<Input
				{...props}
				onChangeText={text => props.onChangeText(text)}
			/>
		</Container>
	);
}
