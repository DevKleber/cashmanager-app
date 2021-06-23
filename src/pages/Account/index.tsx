import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Alert, Image, RefreshControl, StatusBar} from 'react-native';
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
	ValueTotal,
} from './style';

export function AccountList() {
	const navigate = useNavigation();
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [accounts, setAccounts] = useState<AccountProps[]>([]);
	const [total, setTotal] = useState<number>(0);

	async function listAccounts() {
		const accountsItems = await getAccounts();
		setAccounts(accountsItems);
		calcTotal(accountsItems);
	}

	async function removeAccount(item: AccountProps) {
		Alert.alert(`Deseja remover?`, `${item.description}`, [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Sim, remover',
				onPress: async () => {
					await deleteAccount(item.id);
					accounts.splice(accounts.indexOf(item), 1);
					const copyAcconts = [...accounts];

					setAccounts(copyAcconts);
				},
			},
		]);
	}

	async function calcTotal(array: AccountProps[]) {
		if (array.length) {
			let total = 0;
			for (let item of array) {
				total += Number(item.current_balance);
			}
			setTotal(total);
		}
	}

	const wait = (timeout: number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	function loadData() {
		StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#F7C325');
		listAccounts();
	}

	useEffect(() => {
		loadData();
		return navigate.addListener('focus', () => loadData());
	}, [refreshing]);

	return (
		<Container>
			<ContentTotal>
				<TitleTotal>Saldo em conta</TitleTotal>
				<ValueTotal>R$ {total}</ValueTotal>
			</ContentTotal>
			<ContentScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}>
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
									color="#666360"
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
