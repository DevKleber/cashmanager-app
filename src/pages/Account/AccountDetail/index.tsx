import React, { useEffect, useState } from 'react';
import { IconText } from '../../../components/elements/Icon';
import { format } from 'date-fns'
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
    HeaderDate,
    TextHeaderDate,
    CardInvoice,
    ItemList,
    ItemIcon,
    ItemContent,
    ItemPrice,
    ItemTextTitle,
    TextItemPrice,
    TextPrePrice,
    DatePrice,
    ItemTextDescription,
    RowHr
} from './style';
import { Image, View } from 'react-native';
import { getAccountById, AccountProps, Month, getMonths } from '../services';
import { useRoute } from '@react-navigation/core';

export function AccountDetail() {
    const [months, setMonths] = useState<Month[]>(getMonths());
    const [month, setMonth] = useState<number>(0);
    const [account, setAccount] = useState<AccountProps>({} as AccountProps);
    const router = useRoute();

    async function getCreditCard() {
        const { id }: any = router.params;
        const dados = await getAccountById(id, month);
        setAccount(dados)
    }

    function formatDate(date: any) {
        return format(new Date(date), 'dd/MM')
    }

    async function setCurrentMonth() {
        const date = new Date();

        setMonth(date.getMonth());
    }

    async function alterMonth(month: number) {
        return setMonth(month);
    }
    

    useEffect(() => {
        setCurrentMonth();
        getCreditCard();
    }, []);
    return (
        <Container>
             <HeaderDate>
                <IconText name="arrow-left" size={18} color='#666666'onPress={() => {alterMonth(month > 0 ? month - 1 : 0).then(() => getCreditCard())}} />
                <TextHeaderDate>{months[month].month}</TextHeaderDate>
                <IconText name="arrow-right" size={18} color="#666666" onPress={() => {alterMonth(month < 11 ? month + 1 : 11).then(() => getCreditCard())}}/>
            </HeaderDate>
            <ContentScrollView>
                    <Card style={style.boxShadow} >
                        <Header>
                        <Image style={{width: 30, height: 30}}
                                source={require('./../../../assets/img/wallet.png')}
                        />
                            <Title>{account.description}</Title>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ {account.current_balance}</TextValue></Text>
                        </Content>
                    </Card>
                    <CardInvoice style={style.boxShadowInvoice}>
                        {account.items?.map((item: any, index: number) =>(
                            <View key={index} style={{paddingLeft: 20, paddingRight: 20}}>
                                <ItemList >
                                    <ItemIcon>
                                    <IconText name={item.is_income ? 'arrow-downward': 'arrow-upward'} color={item.is_income ? 'green' : 'red'}/>
                                    </ItemIcon>
                                    <ItemContent>
                                        <ItemTextTitle>{item.name}</ItemTextTitle>
                                        <ItemTextDescription>{item.description}</ItemTextDescription>
                                    </ItemContent>
                                    <ItemPrice>
                                        <TextPrePrice>R$</TextPrePrice>
                                        <TextItemPrice>{item.value}</TextItemPrice>
                                        <DatePrice>{formatDate(item.created_at)}</DatePrice>
                                    </ItemPrice>
                                </ItemList>
                                {account.items.length > index + 1 ? <RowHr/> : null}
                            </View>
                        ))}
                    </CardInvoice>
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

        elevation: 2,
    },
    boxShadowInvoice: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },

        elevation: 1,
    }
}