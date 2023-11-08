import { useState } from "react";
import { Container, NoteTitle } from "./style";

export type NoteProps = {
  selected: boolean;
  title: string;
};

type Props = {
  data: NoteProps;
  onPress: any;
};

export function Note({ data, onPress }: Props) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { title, selected } = data;

  const play = () => {
    onPress();
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
    return;
  };

  return (
    <Container onPress={play} selected={selected} disabled={buttonDisabled}>
      <NoteTitle>{title}</NoteTitle>
    </Container>
  );
}
