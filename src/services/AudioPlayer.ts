import { AVPlaybackSource, Audio } from "expo-av";

export type NoteSound = {
  title: string;
  audio: Audio.Sound;
  selected: boolean;
};

export type fileLoad = {
  title: string;
  file: AVPlaybackSource;
  selected: boolean;
};

export class AudioPlayer {
  private sound!: Audio.Sound;
  private audioRefs: Audio.Sound[] = [];

  async loadNote(params: fileLoad) {
    const { file } = params;
    const { sound } = await Audio.Sound.createAsync(file, { isLooping: true });
    this.sound = sound;
    this.addAudioRef(sound);
  }

  isPlaying() {
    return this.audioRefs.length ? true : false;
  }

  addAudioRef(sound: Audio.Sound) {
    this.audioRefs.push(this.sound);
  }

  async playSound() {
    await this.sound.playAsync();
  }

  async stopSound() {
    if (this.audioRefs.length > 0) {
      for (let sound of this.audioRefs) {
        try {
          if (sound && sound.getStatusAsync) {
            const status = await sound.getStatusAsync();
            if (status.isLoaded && status.isPlaying) {
              await sound.stopAsync();
            }
          }
        } catch (error) {
          console.error("Erro ao parar o áudio:", error);
        }
      }
      this.audioRefs = [];
    }
  }

  getSound() {
    return this.sound;
  }
}
