import React from 'react';
import {Text} from 'react-native';
import {Icon} from '../Icon';
import Logo from './../../../assets/img/logoGreenCash.svg';

import {Container, Input, BoxIcon} from './style';

interface InputProps {
	placeholder?: string;
	value?: string;
	icon: string;
	setState: (elem: string) => void;
}

export function InputText({placeholder, value, icon, setState}: InputProps) {
	function inputChange(event: any) {
		setState(event.target.value);
	}

	return (
		<Container>
			<BoxIcon>
				<Icon name={icon} />
			</BoxIcon>
			<Input
				placeholder={placeholder}
				onChange={inputChange}
				value={value}
			/>
		</Container>
	);
}
