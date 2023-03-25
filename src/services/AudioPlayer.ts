import { AVPlaybackSource } from "expo-av";

type Note = {
    selected: boolean;
    title: string;
    audio?: AVPlaybackSource | null
}


type fileLoad = {
    title: string;
    file: string;
}

export class AudioPlayer {
    public note: string  = ''

    loadNote( note: fileLoad):Note{
        const { file, title} = note
        return  {
            selected: false,
            title: title,
            audio:  require(`../../../assets/audio/tracks/${file}`)
        }
    }
    
}