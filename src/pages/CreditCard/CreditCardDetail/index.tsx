import React, { useEffect, useState } from 'react';
import { Icon } from '../../../components/elements/Icon';
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
import { getCreditCardById, CreditCard } from '../services';

export function CreditCardDetail() {
    const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard);

    async function getCreditCard() {
        const dados = await getCreditCardById(1);
        setCreditCard(dados)
    }

    function formatDate(date: any) {
        return format(new Date(date), 'dd/MM')
    }

    useEffect(() => {
        getCreditCard();
    }, []);
    return (
        <Container>
             <HeaderDate>
                <Icon name="arrow-left" size={18} color='#666666'/>
                <TextHeaderDate>Abril</TextHeaderDate>
                <Icon name="arrow-right" size={18} color="#666666"/>
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
                            <View key={item.id}>
                                <ItemList >
                                    <ItemIcon>
                                    <Icon name={item.icon}/>
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