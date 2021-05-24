import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';
import {IconText} from '../../../components/elements/Icon';
import {Summary, Header, Content, Card, Name, Value, De} from './style';

interface SammaryProps {
	isTransaction?: boolean;
	fisrtCard: any;
	middleCard: any;
	lastCard: any;
}
export function Sammary({
	isTransaction,
	fisrtCard,
	middleCard,
	lastCard,
}: SammaryProps) {
	function formatValueBR(value: any) {
		return value;
	}

	return (
		<Summary>
			<Card style={style.boxShadow} background="#00EB84">
				<Header>
					<Name>{fisrtCard.title}</Name>
					<IconText name="arrow-circle-up" color="#fff" size={27} />
				</Header>
				<Content>
					<NumberFormat
						value={fisrtCard.value}
						prefix={'R$ '}
						displayType={'text'}
						thousandSeparator="."
						decimalSeparator=","
						renderText={value => <Value>{value}</Value>}
					/>
				</Content>
			</Card>
			<Card style={style.boxShadow} background="#E62E4D">
				<Header>
					<Name>{middleCard.title}</Name>
					<IconText name="arrow-circle-down" color="#fff" size={27} />
				</Header>
				<Content>
					<NumberFormat
						value={middleCard.value}
						prefix={'R$ '}
						displayType={'text'}
						thousandSeparator="."
						decimalSeparator=","
						renderText={value => <Value>{value}</Value>}
					/>
				</Content>
			</Card>
			<Card
				style={style.boxShadow}
				background={isTransaction ? '#fff' : '#2C88D9'}
				isTransaction={isTransaction}>
				<Header>
					<Name style={{color: isTransaction ? '#E62E4D' : '#fff'}}>
						{lastCard.title}
					</Name>
					<IconText
						name="outlined-flag"
						color={isTransaction ? '#E62E4D' : '#fff'}
						size={27}
					/>
				</Header>
				<Content>
					<Value style={{color: isTransaction ? '#E62E4D' : '#fff'}}>
						{lastCard?.value?.total.toFixed(1)}%<De> de </De>
						{lastCard?.value?.totalPlanejado}%
					</Value>
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
