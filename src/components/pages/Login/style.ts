import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    padding-top: 60px;
    background-color: #F5F6FC;
`;

export const Title = styled.Text`
    margin-top: 30px;
    font-size: 20px;
`;

export const Content = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 40px;
    /* border: 1px solid black; */
    /* flex: 1; */
    /* border: 1px solid black; */
`;

export const ViewTest = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
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