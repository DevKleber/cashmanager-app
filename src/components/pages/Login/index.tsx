import React from 'react';
import { Text } from 'react-native';
import { InputText } from '../../elements/Input';
import Logo from './../../../assets/img/logoGreenCash.svg';
import { BtnLogar, Container, Content, Title, ViewTest} from './style';

function onPressLearnMore() {

}

export function Login() {

    return (
        <Container>
            <Logo />
            <Title> Faça seu login</Title>
            <Content>
                <InputText icon={'icon1'} placeholder={'Email'}/>
                <InputText icon={'icon2'} placeholder={'Senha'}/>
                <BtnLogar>
                    <Text>Entrar</Text>
                </BtnLogar>
            </Content>
            
        </Container>
    )
};