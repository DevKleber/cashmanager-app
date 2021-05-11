import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save } from '../CreditCard/services';
import { Icon } from '../../components/elements/Icon';
import { InputText } from '../../components/elements/Input';
import { 
    Container,
    ContentScrollView,
    Content,
    Text,
    TextTotal,
    ContentTitle,
    ContentPercent,
    ContentTotal,
    RowHr
} from './style';
import { getCategories } from './services';

export function PlannedExpenses() {
    const navigate = useNavigation();

    const [percent, setPercent] = useState<string>('');
    const [category, setCategory] = useState<number>(0);
    const [categories, setCategories] = useState<any[]>([]);

    async function savePlannedExpenses() {
        const dados = await save({value_percent: percent, id_category: category});
        navigate.navigate('CreditCardList')
    }
    async function listCategories() {
        const dados = await getCategories();
        setCategories(dados);
    }

    useEffect(() => {
        listCategories();
        setCategories([1])
    }, []);

    return (
        <Container>
            <ContentScrollView>
            {categories?.map((item: any, index: number) =>(
                <>
                    <Content key={item.id}>
                        <ContentTitle>
                            <Icon name={item.icon}/>
                            <Text>{item.name}</Text>
                        </ContentTitle>
                        <ContentPercent>
                            <InputText
                                preFixer="%"
                                value={percent}
                                onChangeText={setPercent}
                                autoCorrect={false}
                                maxLength = {3}
                                keyboardType="numeric"
                                onSubmitEditing={() => {
                                    savePlannedExpenses();
                                }}
                            />
                        </ContentPercent>
                    </Content>
                    <RowHr/>
                </>
            ))}
            <ContentTotal>
                <TextTotal>80%</TextTotal>
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