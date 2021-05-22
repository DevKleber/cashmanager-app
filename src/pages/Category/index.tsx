import React, { useEffect, useState } from 'react';
import { IconText } from '../../components/elements/Icon';
import { 
    Container,
    ContentScrollView,
    CardInvoice,
    ItemList,
    ItemIcon,
    ItemContent,
    ItemTextTitle,
    ItemTextDescription,
    RowHr,
    BtnNewCategory
} from './style';
import { View } from 'react-native';
import { getCategories } from './services';
import { useNavigation, useRoute } from '@react-navigation/core';
import { BtnNewCard, TextAdd } from '../CreditCard/style';

export function CategoryList() {
    const navigate = useNavigation();
    const [categories, setCategories] = useState<any[]>([]);

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
                                        <BtnNewCategory onPress={() => navigate.navigate('CategoryInsert', item.id)}>
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
                        onPress={() => navigate.navigate('CategoryInsert')}>
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