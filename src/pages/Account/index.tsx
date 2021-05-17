import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image} from 'react-native';
import {IconText} from '../../components/elements/Icon';
import {getAccounts, deleteAccount, AccountProps} from './services';
import {
	Content,
	Title,
	Header,
	Text,
	TextValue,
	TextLighter,
	Card,
	Container,
	ContentScrollView,
	BtnNewCard,
	TextAdd,
	Actions,
} from './style';

export function AccountList() {
	const navigate = useNavigation();

	const [accounts, setAccounts] = useState<AccountProps[]>([]);

	async function listAccounts() {
		const accountsItems = await getAccounts();
		setAccounts(accountsItems);
	}

	async function removeAccount(item: AccountProps) {
		await deleteAccount(item.id);
		accounts.splice(accounts.indexOf(item), 1);
		const copyAcconts = [...accounts];

		setAccounts(copyAcconts);
	}

	useEffect(() => {
		listAccounts();
	}, []);

	return (
		<Container>
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

		elevation: 2,
	},
};
