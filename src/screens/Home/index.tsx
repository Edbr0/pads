import { ViewMain, Container, Row } from "./styles";
import { useState } from "react";
import { Note, NoteProps } from "../../components/NoteCard";
import { AudioPlayer, fileLoad } from "../../services/AudioPlayer";

export default function Home() {
  const [noteC, setNoteC] = useState({ title: "C", selected: false });
  const [noteD, setNoteD] = useState({ title: "D", selected: false });
  const [noteE, setNoteE] = useState({ title: "E", selected: false });
  const [noteF, setNoteF] = useState({ title: "F", selected: false });
  const [noteG, setNoteG] = useState({ title: "G", selected: false });
  const [noteA, setNoteA] = useState({ title: "A", selected: false });
  const [noteB, setNoteB] = useState({ title: "B", selected: false });
  const [noteCsus, setNoteCsus] = useState({ title: "C#/Db", selected: false });
  const [noteDsus, setNoteDsus] = useState({ title: "D#/Eb", selected: false });
  const [noteFsus, setNoteFsus] = useState({ title: "F#/Gb", selected: false });
  const [noteGsus, setNoteGsus] = useState({ title: "G#/Ab", selected: false });
  const [noteAsus, setNoteAsus] = useState({ title: "A#/Bb", selected: false });
  const [dataNote, setDataNote] = useState(new AudioPlayer());

  const activeButton = (buttom: NoteProps) => {
    const { title } = buttom;
    switch (title) {
      case "C":
        setNoteC({ ...noteC, selected: noteC.selected ? false : true });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "D":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: noteD.selected ? false : true });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "E":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: noteE.selected ? false : true });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "F":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: noteF.selected ? false : true });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "G":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: noteG.selected ? false : true });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "A":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: noteA.selected ? false : true });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "B":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: noteB.selected ? false : true });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "C#/Db":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({
          ...noteCsus,
          selected: noteCsus.selected ? false : true,
        });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "D#/Eb":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({
          ...noteDsus,
          selected: noteDsus.selected ? false : true,
        });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "F#/Gb":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({
          ...noteFsus,
          selected: noteFsus.selected ? false : true,
        });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "G#/Ab":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({
          ...noteGsus,
          selected: noteGsus.selected ? false : true,
        });
        setNoteAsus({ ...noteAsus, selected: false });
        break;
      case "A#/Bb":
        setNoteC({ ...noteC, selected: false });
        setNoteD({ ...noteD, selected: false });
        setNoteE({ ...noteE, selected: false });
        setNoteF({ ...noteF, selected: false });
        setNoteG({ ...noteG, selected: false });
        setNoteA({ ...noteA, selected: false });
        setNoteB({ ...noteB, selected: false });
        setNoteCsus({ ...noteCsus, selected: false });
        setNoteDsus({ ...noteDsus, selected: false });
        setNoteFsus({ ...noteFsus, selected: false });
        setNoteGsus({ ...noteGsus, selected: false });
        setNoteAsus({
          ...noteAsus,
          selected: noteAsus.selected ? false : true,
        });
        break;

      default:
        break;
    }
  };

  const onSelected = async (note: fileLoad) => {
    dataNote.stopSound();
    const playing = dataNote.isPlaying();
    if (!playing) {
      activeButton(note);
      await dataNote.loadNote(note);
      await dataNote.playSound();
      return;
    }

    if (playing && note.selected) {
      activeButton(note);
      dataNote.stopSound();
      return;
    }

    if (playing && !note.selected) {
      activeButton(note);
      dataNote.stopSound();
      await dataNote.loadNote(note);
      await dataNote.playSound();
      return;
    }
  };

  return (
    <ViewMain>
      <Container>
        <Row>
          <Note
            onPress={() =>
              onSelected({
                title: "C",
                file: require(`../../../assets/audio/tracks/c_am.mp3`),
                selected: noteC.selected,
              })
            }
            data={noteC}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "D",
                file: require(`../../../assets/audio/tracks/d_bm.mp3`),
                selected: noteD.selected,
              })
            }
            data={noteD}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "E",
                file: require(`../../../assets/audio/tracks/e_cm.mp3`),
                selected: noteE.selected,
              })
            }
            data={noteE}
          />
        </Row>
        <Row>
          <Note
            onPress={() =>
              onSelected({
                title: "F",
                file: require(`../../../assets/audio/tracks/f_dm.mp3`),
                selected: noteF.selected,
              })
            }
            data={noteF}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "G",
                file: require(`../../../assets/audio/tracks/g_em.mp3`),
                selected: noteG.selected,
              })
            }
            data={noteG}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "A",
                file: require(`../../../assets/audio/tracks/a_fm.mp3`),
                selected: noteA.selected,
              })
            }
            data={noteA}
          />
        </Row>
        <Row>
          <Note
            onPress={() =>
              onSelected({
                title: "B",
                file: require(`../../../assets/audio/tracks/b_gm.mp3`),
                selected: noteB.selected,
              })
            }
            data={noteB}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "C#/Db",
                file: require(`../../../assets/audio/tracks/c_sus.mp3`),
                selected: noteCsus.selected,
              })
            }
            data={noteCsus}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "D#/Eb",
                file: require(`../../../assets/audio/tracks/d_sus.mp3`),
                selected: noteDsus.selected,
              })
            }
            data={noteDsus}
          />
        </Row>
        <Row>
          <Note
            onPress={() =>
              onSelected({
                title: "F#/Gb",
                file: require(`../../../assets/audio/tracks/f_sus.mp3`),
                selected: noteFsus.selected,
              })
            }
            data={noteFsus}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "G#/Ab",
                file: require(`../../../assets/audio/tracks/g_sus.mp3`),
                selected: noteGsus.selected,
              })
            }
            data={noteGsus}
          />
          <Note
            onPress={() =>
              onSelected({
                title: "A#/Bb",
                file: require(`../../../assets/audio/tracks/a_sus.mp3`),
                selected: noteAsus.selected,
              })
            }
            data={noteAsus}
          />
        </Row>
      </Container>
    </ViewMain>
  );
}
