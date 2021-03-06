import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { IconText } from '../../components/elements/Icon';
import { getCategories } from './services';

import {
	Container,
	ContentScrollView,
	CardInvoice,
	ItemList,
	ItemIcon,
	ItemContent,
	ItemTextDescription,
	RowHr,
	BtnNewCategory,
	IconTextIncome,
	BtnOptionIncome,
	TextBoldExpense,
	BtnOptionExpense,
	BoxOptions,
	BtnNewCard,
	TextAdd,
	ContainerBtnNewItem,
} from './style';

export function CategoryList() {
	const navigate = useNavigation();
	const [isIncome, setIsIncome] = useState<boolean>(true);
	const [categoriesIncome, setCategoriesIncome] = useState<any[]>([]);
	const [categoriesOutcome, setCategoriesOutcome] = useState<any[]>([]);
	const [categoriesActive, setCategoriesActive] = useState<any[]>([]);

	async function listCategories() {
		const dados = await getCategories();
		let dadosActive = dados.income;
		dadosActive = isIncome ? dados.income : dados.outcome;

		setCategoriesIncome(dados.income);
		setCategoriesOutcome(dados.outcome);
		setCategoriesActive(dadosActive);
	}

	async function handleSetIincome(status: boolean) {
		setIsIncome(status);

		if (status) {
			setCategoriesActive(categoriesIncome);
		} else {
			setCategoriesActive(categoriesOutcome);
		}
		alterBackgroundColor(status);
	}

	useEffect(() => {
		function loadData(isIncome: any) {
			setIsIncome(isIncome);
			alterBackgroundColor(isIncome);
			listCategories();
		}
		return navigate.addListener('focus', () => loadData(true));
	}, []);

	function alterBackgroundColor(bgIsIncome: boolean) {
		const color: string = bgIsIncome ? '#207868' : '#F44236';

		navigate.setOptions({
			headerShown: true,
			headerStyle: {
				backgroundColor: color,
				borderColor: color,
				shadowColor: 'transparent',
			},
			headerTitleStyle: {
				color: '#fff',
				fontFamily: 'Poppins-Medium',
				fontSize: 16,
			},
			headerTintColor: '#fff',
		});
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor(color);
	}

	return (
		<Container selected={isIncome}>
			<BoxOptions>
				<BtnOptionIncome onPress={() => handleSetIincome(true)} selected={isIncome}>
					<IconTextIncome selected={isIncome}>Entrada</IconTextIncome>
					<IconText name="arrow-circle-up" color={isIncome ? '#fff' : '#CAD8DA'} size={26} />
				</BtnOptionIncome>
				<BtnOptionExpense onPress={() => handleSetIincome(false)} selected={isIncome}>
					<TextBoldExpense selected={isIncome}>Sa??da</TextBoldExpense>
					<IconText name="arrow-circle-down" color={isIncome !== false ? '#E8CDD6' : '#fff'} size={26} />
				</BtnOptionExpense>
			</BoxOptions>

			<ContentScrollView>
				<CardInvoice>
					{categoriesActive?.map((item: any, index: number) => (
						<React.Fragment key={item.id}>
							<View>
								<ItemList>
									<ItemIcon>
										<IconText name={item.icon} color="#989898" />
									</ItemIcon>
									<ItemContent>
										<ItemTextDescription>{item.name}</ItemTextDescription>
									</ItemContent>
									<BtnNewCategory
										selected={isIncome}
										onPress={() => navigate.navigate('CategoryInsert', { id: item.id, isIncome })}>
										<IconText name="add" color="#fff" />
									</BtnNewCategory>
								</ItemList>
								<RowHr />
							</View>
							{item.children?.map((subItem: any, subIndex: number) => (
								<View
									key={subItem.id}
									style={{
										paddingLeft: 40,
										paddingRight: 40,
									}}>
									<ItemList>
										<ItemIcon>
											<IconText name={subItem.icon} color="#989898" />
										</ItemIcon>
										<ItemContent>
											<ItemTextDescription>{subItem.name}</ItemTextDescription>
										</ItemContent>
									</ItemList>
									{item.children.length === subIndex + 1 &&
									categoriesActive.length === index + 1 ? null : (
										<RowHr />
									)}
								</View>
							))}
						</React.Fragment>
					))}
					<ContainerBtnNewItem>
						<BtnNewCard
							selected={isIncome}
							style={style.boxShadow}
							onPress={() =>
								navigate.navigate('CategoryInsert', {
									id: null,
									isIncome,
								})
							}>
							<IconText name="add-circle" color={isIncome ? '#1D6C5E' : '#dc3b31'} />
							<TextAdd>Adicionar nova categoria</TextAdd>
						</BtnNewCard>
					</ContainerBtnNewItem>
				</CardInvoice>
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

		elevation: 2,
	},
	boxShadowInvoice: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},

		elevation: 1,
	},
};
