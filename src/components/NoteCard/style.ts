import styled from 'styled-components/native'


export type SelectedNote = {
    selected: boolean;
}

export const NoteTitle = styled.Text`
    color:${ ({ theme }) => theme.COLORS.TEXT_PRIMARY };
    font-size:30px;
    font-weight: 700;
    text-align: center;
    margin: auto;
`

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })<SelectedNote>`
    width: 33%;
    height: 84px;
    margin: 0.2%;
    background: ${ ({ theme, selected}) => selected ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND };
    border: 3px solid; 
    border-radius:8px;
    border-color: ${ ({ theme }) => theme.COLORS.PRIMARY };
    `
