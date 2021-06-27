/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';

import { IconText } from '../Icon';

import { Container, Input, BoxIcon, TextPreFixer } from './style';

export function InputText({
	backgroundColor,
	outline,
	style,
	icon,
	onChangeText,
	preFixer,
	...rest
}: any): JSX.Element {
	return (
		<Container
			style={{
				backgroundColor,
				borderWidth: outline ? 1 : 0,
				borderColor: outline ? '#dadada' : '#E8E9EF',
				...style,
			}}>
			<BoxIcon>{icon ? <IconText name={icon} /> : <TextPreFixer>{preFixer}</TextPreFixer>}</BoxIcon>
			<Input onChangeText={text => onChangeText(text)} {...rest} />
		</Container>
	);
}
