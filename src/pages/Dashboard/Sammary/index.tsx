import React from 'react';
import {IconText} from '../../../components/elements/Icon';
import {Summary, Header, Content, Card, Name, Value} from './style';

export function Sammary() {
	return (
		<Summary>
			<Card style={style.boxShadow} background="#00EB84">
				<Header>
					<Name>Entrada</Name>
					<IconText name="arrow-circle-up" color="#fff" size={27} />
				</Header>
				<Content>
					<Value>R$ 175.325,50</Value>
				</Content>
			</Card>
			<Card style={style.boxShadow} background="#E62E4D">
				<Header>
					<Name>Entrada</Name>
					<IconText name="arrow-circle-down" color="#fff" size={27} />
				</Header>
				<Content>
					<Value>R$ 175.325,50</Value>
				</Content>
			</Card>
			<Card style={style.boxShadow} background="#2A004F">
				<Header>
					<Name>Entrada</Name>
					<IconText name="outlined-flag" color="#fff" size={27} />
				</Header>
				<Content>
					<Value>R$ 175.325,50</Value>
				</Content>
			</Card>
		</Summary>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 4},
		shadowRadius: 4,
		shadowOpacity: 0.25,
		elevation: 10,
	},
};