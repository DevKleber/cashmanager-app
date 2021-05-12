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

export function PlannedExpenses() {
    const navigate = useNavigation();

    const [categories, setCategories] = useState<any[]>([]);

    async function savePlannedExpenses(item: any) {
        console.log(item);
        // const dados = await save({value_percent: percent, id_category: category});
        // navigate.navigate('CreditCardList')
    }
    async function listCategories() {
        const dados = await getPlannedExpenses();
        setCategories(dados);
        calcPorcent();
    }

    function calcPorcent() {
        console.log(categories);
    }

    useEffect(() => {
        listCategories();
        setCategories([1])
    }, []);
    // preFixer="%"
    // value={percent[index]}
    // onChangeText={setPercent}
    // autoCorrect={false}
    // maxLength = {3}
    // keyboardType="numeric"
    // onSubmitEditing={() => {
    //     savePlannedExpenses();
    // }}
    return (
        <Container>
            <ContentScrollView>
            {categories?.map((item: any, index: number) =>(
                <>
                    <Content key={item.id}>
                        <ContentTitle>
                            <IconText name={item.icon}/>
                            <Text>{item.name}</Text>
                        </ContentTitle>
                        <ContentPercent>
                            <TextPercent>%</TextPercent>
                            <Input
                                value={item.value_percent ?? 0}
                                keyboardType="numeric"
                                maxLength = {3}
                                onChangeText={() => savePlannedExpenses(item)}
                            />
                        </ContentPercent>
                    </Content>
                    <RowHr/>
                </>
            ))}
            <ContentTotal>
                <BarPorcent>
                    <Porcent></Porcent>
                </BarPorcent>
                <ViewPorcent>
                    <TextTotal>80%</TextTotal>
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