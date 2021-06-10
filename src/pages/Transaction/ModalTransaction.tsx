import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-native';
import NumberFormat from 'react-number-format';

import { IconText } from '../../components/elements/Icon';
import { getTransaction, deleteTransaction } from './services';
import { TransactionProps, transactionModalProps, transactionModalItensProps } from './types';

import {
	Container,
	ContentScrollView,
	ModalContainer,
	BodyModal,
	ContainerModal,
	ItemIcon,
	ItemTextTitle,
	ItemTextDescription,
	ItemContent,
	TextItemPrice,
	DatePrice,
	ItemPrice,
	ItemList,
	ItemListDetail,
	ButtonDelete,
	ContainerTotalParcelas,
	TotalParcelasLabel,
} from './stylesModal';

interface ModalTransactionProps {
	modalVisible: boolean;
	setModalVisible: (modalVisible: boolean) => void;
	transactionChossen: TransactionProps;
}

export function ModalTransaction({
	modalVisible,
	setModalVisible,
	transactionChossen,
}: ModalTransactionProps): JSX.Element {
	const [transaction, setTransaction] = useState<transactionModalProps>({} as transactionModalProps);

	function formatDate(data: string): string {
		const dateSplit = data.split('-');
		return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
	}

	async function hableDeleteTransaction() {
		Alert.alert(`Deseja remover?`, `${transaction.name}\n\nSerá removido todas as parcelas referente a despesa!`, [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Sim, remover',
				onPress: async () => {
					try {
						await deleteTransaction(transaction.id);
						setModalVisible(false);
					} catch (error) {
						Alert.alert(error);
					}
				},
			},
		]);
	}

	useEffect(() => {
		async function getTransactionEffect() {
			if (transactionChossen?.id_transaction) {
				const data = await getTransaction(transactionChossen.id_transaction);
	
				setTransaction(data);
			}
		}
		getTransactionEffect();
	}, [transactionChossen.id_transaction]);

	return (
		<Modal
			animationType="slide"
			transparent
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!true);
			}}>
			<Container>
				<ContentScrollView>
					<ItemList>
						<ItemIcon>
							<IconText name={transaction.icon} />
						</ItemIcon>
						<ItemContent>
							<ItemTextTitle>
								{transaction.name_parent}
								{' -> '}
								{transaction.name_category}
							</ItemTextTitle>
							<ItemTextDescription>{transaction.name}</ItemTextDescription>

							<NumberFormat
								value={Number(transaction.value)}
								prefix="R$ "
								displayType="text"
								thousandSeparator="."
								decimalSeparator=","
								renderText={value => (
									<ItemPrice>
										<TextItemPrice>
											{transaction.is_income ? '+' : '-'} {value}
										</TextItemPrice>
									</ItemPrice>
								)}
							/>
						</ItemContent>
						<ButtonDelete style={style.boxShadow} onPress={hableDeleteTransaction}>
							<IconText name="delete" />
						</ButtonDelete>
					</ItemList>

					<ModalContainer>
						<BodyModal>
							<ContainerModal>
								{transaction?.itens?.map((item: transactionModalItensProps) => (
									<React.Fragment key={item.id}>
										<ItemListDetail style={{ paddingLeft: 20, paddingRight: 20 }}>
											<ContainerTotalParcelas>
												<TotalParcelasLabel>
													{item.currenct_installment} de {item.installment}
												</TotalParcelasLabel>
											</ContainerTotalParcelas>
											<ItemContent>
												<ItemTextDescription>{transaction.name}</ItemTextDescription>
												<DatePrice>{formatDate(item.due_date)}</DatePrice>
											</ItemContent>
											<NumberFormat
												value={Number(item.value)}
												prefix="R$ "
												displayType="text"
												thousandSeparator="."
												decimalSeparator=","
												renderText={valueItem => (
													<ItemPrice>
														<TextItemPrice>
															{transaction.is_income ? '+' : '-'} {valueItem}
														</TextItemPrice>
													</ItemPrice>
												)}
											/>
										</ItemListDetail>
									</React.Fragment>
								))}
							</ContainerModal>
						</BodyModal>
					</ModalContainer>
				</ContentScrollView>
			</Container>
		</Modal>
	);
}
const style = {
	boxShadow: {
		shadowColor: '#5f6063',
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 4,
	},
};
