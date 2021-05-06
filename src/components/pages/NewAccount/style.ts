import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    padding-top: 14px;
    background-color: #F5F6FC;
`;

export const Title = styled.Text`
    margin-top: 30px;
    font-size: 20px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 40px;
`;

export const BtnLogar = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #00EB84;
    color: #2A004F;
    border-radius: 10px;
    margin-top: 10px;
    padding: 15px;
    font-size: 15px;
`;

export const TextBtnLogar = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const TextBtnNewAcount = styled.Text`
    color: #00EB84;
    margin-left: 7px;
`;

export const BtnBackToLogin = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #2A004F;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;