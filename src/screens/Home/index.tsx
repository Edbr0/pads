import { ViewMain, Container, Row } from './styles';
import { Display } from '../../components/NoteDisplay';
import { useEffect, useState } from 'react';
import { Note, NoteProps } from '../../components/NoteCard';
import { AVPlaybackSource, Audio } from 'expo-av'



export default function Home() {
  
  const C: NoteProps = {
      title:'C',
      selected: false,
      path: './assets/audio/tracks/pad_c.mp3',
      audio: require('../../../assets/audio/tracks/pad_c.mp3')
    }

  const D: NoteProps = {
      title:'D',
      selected: false,
      path: './assets/audio/tracks/pad_d;mp3',
      audio: require('../../../assets/audio/tracks/pad_d.mp3')
    }

  const E: NoteProps = {
      title:'E',
      selected: false,
      path: '/'
    }
  const F: NoteProps = {
      title:'F',
      selected: false,
      path: '/'
    }
  const G: NoteProps =  {
      title:'G',
      selected: false,
      path: '/'
    }
  const A: NoteProps = {
      title:'A',
      selected: false,
      path: '/'
    }
  
  const B: NoteProps = {
      title:'B',
      selected: false,
      path: '/'
    }
  const C_S: NoteProps = {
      title:'C#/Db',
      selected: false,
      path: '/'
    }
  const D_S: NoteProps = {
      title:'D#/Eb',
      selected: false,
      path: '/'
    }
  const F_S: NoteProps = {
      title:'F#/Gb',
      selected: false,
      path: '/'
    }
  const G_S: NoteProps = {
      title:'G#/Ab',
      selected: false,
      path: '/'
    }

  const A_S: NoteProps = {
      title:'A#/Bb',
      selected: false,
      path: '/'
    }
  
  const [ noteC, setNoteC ] = useState(C)
  const [ noteD, setNoteD ] = useState(D)
  const [ noteE, setNoteE ] = useState(E)
  const [ noteF, setNoteF ] = useState(F)
  const [ noteG, setNoteG ] = useState(G)
  const [ noteA, setNoteA ] = useState(A)
  const [ noteB, setNoteB ] = useState(B)
  const [ noteCsus, setNoteCsus ] = useState(C_S)
  const [ noteDsus, setNoteDsus ] = useState(D_S)
  const [ noteFsus, setNoteFsus ] = useState(F_S)
  const [ noteGsus, setNoteGsus ] = useState(G_S)
  const [ noteAsus, setNoteAsus ] = useState(A_S)
  const [sound, setSound] = useState();

  
  async function playSound(audio: AVPlaybackSource) {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync();
  }

  async function stopSound() {
    return sound ? sound.stopAsync() : null;
  }



  const activeButton = (buttom: NoteProps) => {
    const { title } = buttom
    stopSound()
    switch (title) {
      case 'C':
        setNoteC({ ...noteC, selected: noteC.selected ? false : true })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'D':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: noteD.selected ? false : true })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'E':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: noteE.selected ? false : true })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'F':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: noteF.selected ? false : true })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'G':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: noteG.selected ? false : true })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'A':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: noteA.selected ? false : true })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'B':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: noteB.selected ? false : true })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'C#/Db':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: noteCsus.selected ? false : true })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'D#/Eb':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: noteDsus.selected ? false : true })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'F#/Gb':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: noteFsus.selected ? false : true })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'G#/Ab':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: noteGsus.selected ? false : true })
        setNoteAsus({ ...noteAsus, selected: false })
        break;
      case 'A#/Bb':
        setNoteC({ ...noteC, selected: false })
        setNoteD({ ...noteD, selected: false })
        setNoteE({ ...noteE, selected: false })
        setNoteF({ ...noteF, selected: false })
        setNoteG({ ...noteG, selected: false })
        setNoteA({ ...noteA, selected: false })
        setNoteB({ ...noteB, selected: false })
        setNoteCsus({ ...noteCsus, selected: false })
        setNoteDsus({ ...noteDsus, selected: false })
        setNoteFsus({ ...noteFsus, selected: false })
        setNoteGsus({ ...noteGsus, selected: false })
        setNoteAsus({ ...noteAsus, selected: noteAsus.selected ? false : true })
        break;
      
    
      default:
        break;
    }
  }

 


  const onSelected =  async (note: NoteProps, sound: Audio.Sound | any = null) => {
    activeButton(note)
    !note.selected ? await playSound(note.audio) : await stopSound()
  }

  return (
    <ViewMain>
      <Container>
        <Row>
          <Note onPress={ () => onSelected(noteC, sound) } data={noteC} />
          <Note onPress={ () => onSelected(noteD, sound) } data={noteD} />
          <Note onPress={ () => onSelected(noteE) } data={noteE} />
        </Row>
        <Row>
          <Note onPress={ () => onSelected(noteF) } data={noteF} />
          <Note onPress={ () => onSelected(noteG) } data={noteG} />
          <Note onPress={ () => onSelected(noteA) } data={noteA} />
        </Row>
        <Row>
          <Note onPress={ () => onSelected(noteB) } data={noteB} />
          <Note onPress={ () => onSelected(noteCsus) } data={noteCsus} />
          <Note onPress={ () => onSelected(noteDsus) } data={noteDsus} />
        </Row>
        <Row>
          <Note onPress={ () => onSelected(noteFsus) } data={noteFsus} />
          <Note onPress={ () => onSelected(noteGsus) } data={noteGsus} />
          <Note onPress={ () => onSelected(noteAsus) } data={noteAsus} />
        </Row>
      </Container>
    </ViewMain>
  );
}

