import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {save} from '../services';
import {InputText} from '../../../components/elements/Input';
import Icons from '../../../assets/MaterialIcons.json';
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
} from './style';
import {IconText} from '../../../components/elements/Icon';
import {Alert, Modal, StatusBar, Text, View} from 'react-native';

export function CategoryInsert() {
	const router = useRoute();
	const navigate = useNavigation();

	const {id, isIncome}: any = router.params;

	const [name, setName] = useState<string>('');
	const [searchIcon, setSearchIcon] = useState<string>('');
	const [modalVisible, setModalVisible] = useState(false);
	const [icons, setIcons] = useState<any>([]);
	const [iconsFilter, setIconsfilter] = useState<any>([]);

	async function saveAccount() {
		return;
		await save({}).then(() => {
			navigate.navigate('transacoes');
		});
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

		let ajudasFiltro = icons.filter((item: any) => {
			if (item.name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
				return item;
			}
		});
		console.log(ajudasFiltro);

		setIconsfilter(ajudasFiltro);
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
					<ChosenIcon>Icone</ChosenIcon>
				</ButtonIcon>

				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
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
								onChangeText={(value: any) =>
									handlFilterIcon(value)
								}
								autoCorrect={false}
								backgroundColor="#E8E9EF"
							/>
							<ContainerModalCategory>
								{iconsFilter.map((item: any, index: number) => (
									<CardCategory>
										<IconText
											size={24}
											name={item.name}
											color="#fff"
										/>
									</CardCategory>
								))}
							</ContainerModalCategory>
						</BodyModal>
						<ButtonIcon>
							<ChosenIcon
								onPress={() => setModalVisible(!modalVisible)}>
								Icone
							</ChosenIcon>
						</ButtonIcon>
					</ModalIconContainer>
				</Modal>
				<ContainerButton>
					<Btn selected={isIncome} onPress={saveAccount}>
						<IconText
							size={30}
							name="add-circle"
							color={isIncome ? '#1D6C5E' : '#dc3b31'}
						/>
						<TextBtn>Cadastrar</TextBtn>
					</Btn>
				</ContainerButton>
			</ContentScrollView>
		</Container>
	);
}
