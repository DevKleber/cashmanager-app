import React, {useEffect, useState} from 'react';
import {IconText} from '../../components/elements/Icon';
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
import {StatusBar, View} from 'react-native';
import {getCategories} from './services';
import {useNavigation, useRoute} from '@react-navigation/core';

export function CategoryList() {
	const navigate = useNavigation();
	const [isIncome, setIsIncome] = useState<boolean>(true);
	const [colorBG, setColorBG] = useState<string>('#207868');

	const [categories, setCategories] = useState<any[]>([]);

	async function listCategories() {
		const dados = await getCategories();
		setCategories(dados);
	}

	useEffect(() => {
		listCategories();
	}, []);

	function alterBackgroundColor(bgIsIncome: boolean) {
		let color: string = '#F44236';
		let title: string = '#fff';
		let colorBg: string = '#F44236';

		if (bgIsIncome) {
			title = '#fff';
			color = '#207868';
			colorBg = '#207868';
		}

		setColorBG(colorBg);

		navigate.setOptions({
			headerShown: true,
			headerStyle: {
				backgroundColor: color,
				borderColor: color,
				shadowColor: 'transparent',
			},
			headerTitleStyle: {
				color: title,
				fontFamily: 'Poppins-Medium',
				fontSize: 16,
			},
			headerTintColor: title,
		});
		StatusBar.setBackgroundColor(color);
	}

	return (
		<Container selected={isIncome}>
			<BoxOptions>
				<BtnOptionIncome
					onPress={() => (
						setIsIncome(true), alterBackgroundColor(true)
					)}
					selected={isIncome}>
					<IconTextIncome selected={isIncome}>Entrada</IconTextIncome>
					<IconText
						name="arrow-circle-up"
						color={isIncome ? '#fff' : '##CAD8DA'}
						size={26}
					/>
				</BtnOptionIncome>
				<BtnOptionExpense
					onPress={() => (
						setIsIncome(false), alterBackgroundColor(false)
					)}
					selected={isIncome}>
					<TextBoldExpense selected={isIncome}>Saída</TextBoldExpense>
					<IconText
						name="arrow-circle-down"
						color={isIncome !== false ? '#E8CDD6' : '#fff'}
						size={26}
					/>
				</BtnOptionExpense>
			</BoxOptions>

			<ContentScrollView>
				<CardInvoice>
					{categories?.map((item: any, index: number) => (
						<>
							<View key={item.id}>
								<ItemList>
									<ItemIcon>
										<IconText
											name={item.icon}
											color="#989898"
										/>
									</ItemIcon>
									<ItemContent>
										<ItemTextDescription>
											{item.name}
										</ItemTextDescription>
									</ItemContent>
									<BtnNewCategory
										selected={isIncome}
										onPress={() =>
											navigate.navigate(
												'CategoryInsert',
												item.id,
											)
										}>
										<IconText name="add" color="#fff" />
									</BtnNewCategory>
								</ItemList>
								<RowHr />
							</View>
							{item.children?.map(
								(subItem: any, subIndex: number) => (
									<View
										key={subItem.id}
										style={{
											paddingLeft: 40,
											paddingRight: 40,
										}}>
										<ItemList>
											<ItemIcon>
												<IconText
													name={subItem.icon}
													color="#989898"
												/>
											</ItemIcon>
											<ItemContent>
												<ItemTextDescription>
													{subItem.name}
												</ItemTextDescription>
											</ItemContent>
										</ItemList>
										{item.children.length == subIndex + 1 &&
										categories.length ==
											index + 1 ? null : (
											<RowHr />
										)}
									</View>
								),
							)}
						</>
					))}
					<ContainerBtnNewItem>
						<BtnNewCard
							selected={isIncome}
							style={style.boxShadow}
							onPress={() => navigate.navigate('CategoryInsert')}>
							<IconText
								name="add-circle"
								color={isIncome ? '#1D6C5E' : '#dc3b31'}
							/>
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
