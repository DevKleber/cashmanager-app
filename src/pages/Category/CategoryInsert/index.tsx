import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Modal, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';

import Icons from '../../../assets/MaterialIcons.json';
import { IconText } from '../../../components/elements/Icon';
import { InputText } from '../../../components/elements/Input';
import { save } from '../services';

import {
	Container,
	ContentScrollView,
	TextBtn,
	Btn,
	ContainerButton,
	ButtonIcon,
	ChosenIcon,
	ModalIconContainer,
	BodyModal,
	ContainerModalCategory,
	CardCategory,
	TextIconTitle,
} from './style';

export function CategoryInsert() {
	const router = useRoute();
	const navigate = useNavigation();

	const { id, isIncome }: any = router?.params;

	const [name, setName] = useState<string>('');
	const [iconSelected, setIconSelected] = useState<string>('');
	const [searchIcon, setSearchIcon] = useState<string>('');
	const [modalVisible, setModalVisible] = useState(false);
	const [icons, setIcons] = useState<any>([]);
	const [iconsFilter, setIconsfilter] = useState<any>([]);
	const [loader, setLoader] = useState<boolean>(false);

	async function saveAccount() {
		setLoader(true);
		const dados = await save({
			name,
			icon: iconSelected,
			id_category_parent: id,
			is_income: isIncome,
		});
		if (!dados) {
			setLoader(false);
			return;
		}
		navigate.navigate('CategoryList');
	}
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
		StatusBar.setBackgroundColor(color);
	}

	function handlFilterIcon(value: any) {
		setSearchIcon(value);

		if (value.length < 3) {
			return;
		}

		const ajudasFiltro = icons.filter((item: any) => {
			if (item.name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
				return item;
			}
		});

		setIconsfilter(ajudasFiltro);
	}

	function handleSelectIcon(iconName: any) {
		setIconSelected(iconName.name);
		setModalVisible(!modalVisible);
	}

	useEffect(() => {
		setIcons(Icons);
		alterBackgroundColor(isIncome);
	}, []);

	return (
		<Container selected={isIncome}>
			<ContentScrollView>
				<InputText
					icon="account-balance-wallet"
					placeholder="Nome"
					value={name}
					onChangeText={setName}
					autoCorrect={false}
					backgroundColor="#E8E9EF"
				/>
				<ButtonIcon onPress={() => setModalVisible(true)}>
					<ChosenIcon>{iconSelected.length ? <IconText size={24} name={iconSelected} /> : null}</ChosenIcon>
					<TextIconTitle>Icone</TextIconTitle>
				</ButtonIcon>

				<Modal
					animationType="slide"
					transparent
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!true);
					}}>
					<ModalIconContainer>
						<BodyModal>
							<InputText
								style={{
									marginTop: 0,
									borderTopLeftRadius: 45,
									borderTopRightRadius: 45,
									borderBottomLeftRadius: 0,
									borderBottomRightRadius: 0,
								}}
								icon="search"
								placeholder="Nome"
								value={searchIcon}
								onChangeText={(value: any) => handlFilterIcon(value)}
								autoCorrect={false}
								backgroundColor="#E8E9EF"
							/>
							<ContainerModalCategory>
								{iconsFilter.map((item: any, index: number) => (
									<CardCategory
										key={index}
										style={{
											backgroundColor: isIncome ? '#207868' : '#F44236',
										}}
										onPress={() => handleSelectIcon(item)}>
										<IconText size={24} name={item.name} color="#fff" />
									</CardCategory>
								))}
							</ContainerModalCategory>
						</BodyModal>
					</ModalIconContainer>
				</Modal>
				<ContainerButton>
					<Btn selected={isIncome} onPress={saveAccount}>
						<IconText size={30} name="add-circle" color={isIncome ? '#1D6C5E' : '#dc3b31'} />
						<TextBtn>Cadastrar</TextBtn>
						{loader && <ActivityIndicator size="small" color="#fff" />}
					</Btn>
				</ContainerButton>
			</ContentScrollView>
		</Container>
	);
}
