import React, { useEffect, useState } from 'react';
import { IconText } from '../../components/elements/Icon';
import { format } from 'date-fns'
import { 
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
    RowHr,
    BoxSammary,
    BtnNewCategory
} from './style';
import { Image, View } from 'react-native';
import { TransactionProps, Month, getTransactions, getMonths, getCategories } from './services';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Sammary } from '../Dashboard/Sammary';
import { BtnNewCard, TextAdd } from '../CreditCard/style';

export function CategoryList() {
    const navigate = useNavigation();
    const [categories, setCategories] = useState<any[]>([]);
    const router = useRoute();

    async function listCategories() {
        const dados = await getCategories();
        setCategories(dados);
    }

    useEffect(() => {
        listCategories();
    }, []);
    return (
        <Container>
            <ContentScrollView>
                    <CardInvoice style={style.boxShadowInvoice}>
                        {categories?.map((item: any, index: number) =>(
                            <>
                                <View key={item.id} style={{paddingLeft: 20, paddingRight: 20}}>
                                    <ItemList >
                                        <ItemIcon>
                                            <IconText name={item.icon}/>
                                        </ItemIcon>
                                        <ItemContent>
                                            <ItemTextDescription>{item.name}</ItemTextDescription>
                                        </ItemContent>
                                        <BtnNewCategory onPress={() => navigate.navigate('category', item.id)}>
                                            <IconText name="add-circle" />
                                        </BtnNewCategory>
                                    </ItemList>
                                    <RowHr/>
                                </View>
                                {item.children?.map((subItem: any, subIndex: number) => (
                                    <View key={subItem.id} style={{paddingLeft: 60, paddingRight: 20}}>
                                        <ItemList >
                                            <ItemIcon>
                                                <IconText name={subItem.icon}/>
                                            </ItemIcon>
                                            <ItemContent>
                                                <ItemTextTitle>{subItem.name}</ItemTextTitle>
                                            </ItemContent>
                                        </ItemList>
                                    {(item.children.length == subIndex + 1) && (categories.length ==  index + 1) ? null : <RowHr/> }
                                </View>
                                ))}
                            </>
                        ))}
                    </CardInvoice>
                    <BtnNewCard
                        style={style.boxShadow}
                        onPress={() => navigate.navigate('category')}>
                        <IconText name="add-circle" />
                        <TextAdd>Adicionar nova categoria</TextAdd>
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