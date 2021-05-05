import React, { useState } from 'react';
import { Image } from 'react-native';
import { Icon } from '../../elements/Icon';
import { InputText } from '../../elements/Input';
import { LoginIn } from './services';
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
    const [login, setLogin] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function loginIn() {
        LoginIn({login, senha})
    }

    return (
        <Container>
            <Image source={require('./../../../assets/img/logotype.png')} />
            <Title> Faça seu login</Title>
            <Content>
                <InputText icon={'person'} placeholder={'Email'} value={login} setState={setLogin}/>
                <InputText icon={'lock'} placeholder={'Senha'} value={senha} setState={setSenha}/>
                <BtnLogar>
                    <TextBtnLogar>Entrar</TextBtnLogar>
                </BtnLogar>
                <ForgotPass> 
                    <TextForgotPass>Esqueci minha senha</TextForgotPass>
                </ForgotPass>
            </Content>
            <BtnNewAcount>
                <Icon name={"exit-to-app"} color={"#00EB84"} size={18}/>
                <TextBtnNewAcount onPress={loginIn}>Esqueci minha senha</TextBtnNewAcount>
            </BtnNewAcount>
            
        </Container>
    )
};