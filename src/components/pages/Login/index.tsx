import React from 'react';
import { Image } from 'react-native';
import { Icon } from '../../elements/Icon';
import { InputText } from '../../elements/Input';
import { 
    BtnLogar, 
    Container, 
    Content, 
    Title, 
    TextBtnLogar, 
    TextForgotPass, 
    ForgotPass, 
    BtnNewAcount, 
    TextBtnNewAcount
} from './style';

export function Login() {

    return (
        <Container>
            <Image source={require('./../../../assets/img/logotype.png')} />
            <Title> Faça seu login</Title>
            <Content>
                <InputText icon={'person'} placeholder={'Email'}/>
                <InputText icon={'lock'} placeholder={'Senha'}/>
                <BtnLogar>
                    <TextBtnLogar>Entrar</TextBtnLogar>
                </BtnLogar>
                <ForgotPass> 
                    <TextForgotPass>Esqueci minha senha</TextForgotPass>
                </ForgotPass>
            </Content>
            <BtnNewAcount>
                <Icon name={"exit-to-app"} color={"#00EB84"} size={18}/>
                <TextBtnNewAcount>Esqueci minha senha</TextBtnNewAcount>
            </BtnNewAcount>
            
        </Container>
    )
};