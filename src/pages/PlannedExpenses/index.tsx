import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { update } from './services';
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
    TextPercent,
    ViewContent,
    CategoriesView
} from './style';
import { getPlannedExpenses } from './services';
import { Alert, StatusBar, View } from 'react-native';

export function PlannedExpenses() {
    const navigate = useNavigation();
    const [total, setTotal] = useState<number>(0);
    let [categories, setCategories] = useState<any[]>([]);

    async function savePlannedExpenses(value: any, item: any) {
        categories[categories.indexOf(item)].value_percent = value;
        const copyCategories = [...categories];

        const isValid = await calcPorcent(copyCategories);

        if (!isValid) {
            Alert.alert("Valor total passou de 100%");
        }

        setCategories(copyCategories)
        

        const dados = await update(item);


    }
    async function listCategories() {
        const dados = await getPlannedExpenses();
        setCategories(dados);
        calcPorcent(dados);
    }

    async function calcPorcent(dados: any[] = []) {
        let total = 0;

        for(let item of dados) {
            if (item.value_percent !== null && item.value_percent !== '') {
                total += parseInt(item.value_percent);
            }
        }

        
        setTotal(isNaN(total) ? 0 : total);
        
        if (total > 100) {
            return false;
        }
       return true;
    }

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#2C88D9');
        listCategories();
    }, []);
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#2C88D9" /> 
            <ViewContent>
                <ContentScrollView>
                    <View>
                        {categories?.map((item: any, index: number) =>(
                            <CategoriesView key={index}>
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
                            </CategoriesView>
                        ))}
                    </View>
                </ContentScrollView>
                <ContentTotal>
                    <BarPorcent>
                        <Porcent style={{width: `${total > 100 ? 100 : total}%`}}></Porcent>
                    </BarPorcent>
                    <ViewPorcent style={{left: total >= 80 ? '80%' : `${total}%`, transform: [{translateX: -10}]}}>
                        <TextTotal>{total}%</TextTotal>
                    </ViewPorcent>
                </ContentTotal>
            </ViewContent>
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