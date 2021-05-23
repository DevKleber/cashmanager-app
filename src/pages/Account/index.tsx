import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, StatusBar} from 'react-native';
import {IconText} from '../../components/elements/Icon';
import {getAccounts, deleteAccount, AccountProps} from './services';
import {
	Content,
	Title,
	Header,
	Text,
	ContentTotal,
	TextLighter,
	Card,
	Container,
	ContentScrollView,
	BtnNewCard,
	TextAdd,
	Actions,
	TitleTotal,
	ValueTotal
} from './style';

export function AccountList() {
	const navigate = useNavigation();

	const [accounts, setAccounts] = useState<AccountProps[]>([]);
	const [total, setTotal] = useState<number>(0);

	async function listAccounts() {
		const accountsItems = await getAccounts();
		setAccounts(accountsItems);
		calcTotal(accountsItems);
	}

	async function removeAccount(item: AccountProps) {
		await deleteAccount(item.id);
		accounts.splice(accounts.indexOf(item), 1);
		const copyAcconts = [...accounts];

		setAccounts(copyAcconts);
	}

	async function calcTotal(array:AccountProps[]) {
		const item = array.reduce((accumulator: any, currentValue: any) => (accumulator.current_balance + currentValue.current_balance));
		setTotal(item.current_balance);
	}

	useEffect(() => {
		StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#F7C325');
		listAccounts();
	}, []);

	return (
		<Container>
			<ContentTotal>
				<TitleTotal>Saldo em conta</TitleTotal>
				<ValueTotal>R$ {total}</ValueTotal>
			</ContentTotal>
			<ContentScrollView>
				{accounts.map((item: any, index: number) => (
					<Card
						style={style.boxShadow}
						key={index}
						onPress={() =>
							navigate.navigate('AccountDetail', item)
						}>
						<Header>
							<Image
								style={{width: 30, height: 30}}
								source={require('./../../assets/img/purse.png')}
							/>
							<Title>{item.description}</Title>
							<Actions>
								<IconText
									name="delete"
									onPress={() => removeAccount(item)}
								/>
								<IconText
									name="edit"
									onPress={() =>
										navigate.navigate('AccountUpdate', item)
									}
								/>
							</Actions>
						</Header>
						<Content>
							<Text>
								Saldo:{' '}
								<TextLighter>
									R$ {item.current_balance}
								</TextLighter>
							</Text>
						</Content>
					</Card>
				))}
				<BtnNewCard
					style={style.boxShadow}
					onPress={() => navigate.navigate('AccountInsert')}>
					<IconText name="add-circle" />
					<TextAdd>Adicionar nova conta</TextAdd>
				</BtnNewCard>
			</ContentScrollView>
		</Container>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 4,
	},
};
