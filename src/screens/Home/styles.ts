import styled from 'styled-components/native'


export const ViewMain = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };
    display: flex;
    justify-content: center;
    width:100%;
    height:100%;
    padding:5px;
`;

export const Container = styled.View`
    flex-direction: column;
    width:100%;
    height:100%;
`;

export const Row = styled.View`
    flex-direction: row;
    width:100%;
`;


export const Text = styled.Text`
    color: ${ ({ theme }) => theme.COLORS.TEXT_PRIMARY };
`;


