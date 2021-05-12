import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save } from '../CreditCard/services';
import { IconText } from '../../components/elements/Icon';
import { 
    Container,
    ContentScrollView,
    Content,
    Text,
    TextTotal,
    ContentTitle,
    ContentPercent,
    ContentTotal,
    RowHr,
    ViewPorcent,
    BarPorcent,
    Porcent,
    Input,
    TextPercent
} from './style';
import { getPlannedExpenses } from './services';
import { View } from 'react-native';

export function PlannedExpenses() {
    const navigate = useNavigation();
    const [total, setTotal] = useState<number>(0);
    let [categories, setCategories] = useState<any[]>([]);

    async function savePlannedExpenses(value: any, item: any) {
        categories[categories.indexOf(item)].value_percent = value;
        const copyCategories = [...categories];
        setCategories(copyCategories)

        // const dados = await save(copyCategories);
        // navigate.navigate('CreditCardList')
        calcPorcent(copyCategories);

    }
    async function listCategories() {
        const dados = await getPlannedExpenses();
        setCategories(dados);
        calcPorcent(dados);
    }

    function calcPorcent(dados: any[] = []) {
        const totalPercent = dados.reduce((accumulator, currentValue) => {
            return parseInt(accumulator.value_percent) + parseInt(currentValue.value_percent != null ? currentValue.value_percent : 0);
        })

       setTotal(isNaN(totalPercent) ? 0 : totalPercent);
    }

    useEffect(() => {
        listCategories();
    }, []);
    return (
        <Container>
            <ContentScrollView>
            {categories?.map((item: any, index: number) =>(
                <View key={index}>
                    <Content >
                        <ContentTitle>
                            <IconText name={item.icon}/>
                            <Text>{item.name}</Text>
                        </ContentTitle>
                        <ContentPercent>
                            <TextPercent>%</TextPercent>
                            <Input
                                value={item.value_percent ? `${item.value_percent}` : ""}
                                keyboardType="numeric"
                                maxLength = {3}
                                onChangeText={(text) => savePlannedExpenses(text, item)}
                            />
                        </ContentPercent>
                    </Content>
                    <RowHr/>
                </View>
            ))}
            <ContentTotal>
                <BarPorcent>
                    <Porcent style={{width: `${total}%`}}></Porcent>
                </BarPorcent>
                <ViewPorcent style={{width: `${(total + 10)}%`}}>
                    <TextTotal>{total}%</TextTotal>
                </ViewPorcent>
            </ContentTotal>
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