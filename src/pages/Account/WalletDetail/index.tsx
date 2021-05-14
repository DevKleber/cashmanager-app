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
import { getCreditCardById, CreditCard, Month, getMonths } from '../services';
import { useRoute } from '@react-navigation/core';

export function CreditCardDetail() {
    const [months, setMonths] = useState<Month[]>(getMonths());
    const [month, setMonth] = useState<number>(0);
    const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard);
    const router = useRoute();

    async function getCreditCard() {
        const { id }: any = router.params;
        const dados = await getCreditCardById(id, month);
        setCreditCard(dados)
    }

    function formatDate(date: any) {
        return format(new Date(date), 'dd/MM')
    }

    async function setMonthCurrent() {
        const d = new Date();

        setMonth(d.getMonth());
    }

    async function alterMonth(month: number) {
        return setMonth(month);
    }
    

    useEffect(() => {
        setMonthCurrent();
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
                        <Image
							source={require('./../../../assets/img/card.png')}
						/>
                            <Title>{creditCard.name}</Title>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ {creditCard.total}</TextValue></Text>
                            <Text>Fecha: <TextLighter>{creditCard.closing_day}</TextLighter></Text>
                            <Text>Vencimento: <TextLighter>{creditCard.due_day}</TextLighter></Text>
                        </Content>
                    </Card>
                    <CardInvoice style={style.boxShadowInvoice}>
                        {creditCard.items?.map((item: any, index: number) =>(
                            <View key={index} style={{paddingLeft: 20, paddingRight: 20}}>
                                <ItemList >
                                    <ItemIcon>
                                    <IconText name={item.icon}/>
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
                                {creditCard.items.length > index + 1 ? <RowHr/> : null}
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