
import { useState } from 'react';
import { Container, NoteTitle } from './style'
import { AVPlaybackSource } from 'expo-av';


type NoteProps = {
    selected: boolean;
    title: string;
}

type Props  = {
    data: NoteProps;
    onPress: any

}


export function Note( { data, onPress }: Props){
    const { title, selected } = data

    const play = () => {
        onPress()
        return 
    }

    return (
       <Container onPress={ play } selected={  selected }>
        <NoteTitle>
            { title }
        </NoteTitle>
       </Container> 
    )
}