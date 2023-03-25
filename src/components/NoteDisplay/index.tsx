
import { Container, TextContent } from './style'


export type DisplayProps = {
   text: string
}

export function Display( { text }: DisplayProps){
    return (
       <Container>
        <TextContent>
            { text }
        </TextContent>
       </Container> 
    )
}