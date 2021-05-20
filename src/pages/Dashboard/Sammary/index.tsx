import React from 'react';
import {IconText} from '../../../components/elements/Icon';
import {Summary, Header, Content, Card, Name, Value} from './style';

interface SammaryProps {
	isTransaction?: boolean;
}
export function Sammary({isTransaction} : SammaryProps) {
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
			<Card style={style.boxShadow} background={isTransaction ? "#fff" : '#2A004F'} isTransaction={isTransaction}>
				<Header>
					<Name style={{color: isTransaction ? "#E62E4D" : '#fff'}}>Entrada</Name>
					<IconText name="outlined-flag" color={isTransaction ? "#E62E4D" : '#fff'} size={27} />
				</Header>
				<Content>
					<Value style={{color: isTransaction ? "#E62E4D" : '#fff'}}>R$ 175.325,50</Value>
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
