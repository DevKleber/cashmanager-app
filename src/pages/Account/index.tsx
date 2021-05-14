import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image } from 'react-native';
import { IconText } from '../../components/elements/Icon';
import { getAccounts, deleteAccount, AccountProps } from './services';
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
    Actions
} from './style';

export function AccountList() {
    const navigate = useNavigation();

    const [accounts, setAccounts] = useState<AccountProps[]>([]);

    async function getAcconts() {
        const accontsItems = await getAccounts();
        setAccounts(accontsItems)
    }

    async function removeAccont(item: AccountProps) {
        await deleteAccount(item.id);
        accounts.splice(accounts.indexOf(item), 1);
        const copyAcconts = [...accounts];

        setAccounts(copyAcconts)
    }

    useEffect(() => {
        getAcconts();
    }, []);

    return (
        <Container>
            <ContentScrollView>
                {accounts.map((item: any, index: number) => (
                    <Card style={style.boxShadow} key={index}  onPress={() => navigate.navigate('AccountDetail', item)}>
                        <Header>
                            <Image
                                source={require('./../../assets/img/card.png')}
                            />
                            <Title>{item.name}</Title>
                            <Actions>
                                <IconText name="delete" onPress={() => removeAccont(item)} />
                                <IconText name="edit" onPress={() => navigate.navigate('AccountUpdate', item)} />
                            </Actions>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ {item.total}</TextValue></Text>
                            <Text>Fecha: <TextLighter>{item.closing_day}</TextLighter></Text>
                            <Text>Vencimento: <TextLighter>{item.due_day}</TextLighter></Text>
                        </Content>
                    </Card>
                ))}
                <BtnNewCard style={style.boxShadow} onPress={() => navigate.navigate('AccountInsert')}>
                    <IconText name="add-circle"/>
                    <TextAdd>Adicionar nova conta</TextAdd>
                </BtnNewCard>
            </ContentScrollView>
        </Container>
    )
};

const style = {
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 2,
    }
}