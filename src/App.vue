<template>
  <div class="flex h-screen flex-col justify-center">
    <div class="w-fit mx-auto">
      <div class="text-7xl">hgallo</div>
      <textarea class="" v-model="text" type="text" name="" placeholder="send text" id="" />
      <select v-model="voiceSelect" name="" id="voiceSelect" ref="voiceSelect">
        <option data-name="Daniel" data-lang="en-GB" selected>Daniel - (en-GB) - DEFAULT</option>
        <option
          v-for="voice in voiceList"
          :data-name="voice.name"
          :data-lang="voice.lang"
          :key="voice"
        >
          {{ voice.name }} - {{ voice.lang }}
        </option>
      </select>
      <input id="pitch" type="range" v-model="pitch" min="0" max="2" step="0.2" />
      <input id="rate" type="range" v-model="rate" min="0" max="10" step="0.5" />
      <button @click="statePause">{{ this.isPause ? 'Resume' : 'Pause' }}</button>
      <button @click="stateCancel">Cancel</button>
      <button @click="speechToText" type="submit">Play</button>
      <a id="downloadLink" download="" @click="" href=""></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utterance: '',
      isPause: false,
      text: '',
      pitch: 1,
      rate: 0,
      voiceSelect: '',
      voiceList: [
        {
          name: 'Samantha',
          lang: 'en-US'
        },
        {
          name: 'Damayanti',
          lang: 'id-ID'
        }
      ]
    }
  },
  methods: {
    speechToText() {
      this.utterance = new SpeechSynthesisUtterance(this.text)
      const populateVoiceList = window.speechSynthesis.getVoices()
      for (let i = 0; i < populateVoiceList.length; i++) {
        if (
          populateVoiceList[i].name === this.voiceSelect.split(' - ')[0] &&
          populateVoiceList[i].lang === this.voiceSelect.split(' - ')[1]
        ) {
          this.utterance.voice = populateVoiceList[i]
          this.utterance.lang = populateVoiceList[i].lang
          this.utterance.pitch = this.pitch
          this.utterance.rate = this.rate
          this.utterance.volume = 100.0
        }
      }
      this.generateAudioDownload()
    },
    statePause() {
      if (this.isPause == true) {
        this.isPause = false
        speechSynthesis.resume(this.utterance)
      } else {
        speechSynthesis.pause(this.utterance)
        this.isPause = true
      }
    },
    stateCancel() {
      speechSynthesis.cancel(this.utterance)
    },

    generateAudioDownload() {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream)
          const audioData = []
          mediaRecorder.addEventListener('dataavailable', (event) => {
            audioData.push(event.data)
          })
          mediaRecorder.addEventListener('stop', () => {
            const blob = new Blob(audioData, { type: 'audio/wav' })
            const url = URL.createObjectURL(blob)
            const link = document.getElementById('downloadLink')
            link.href = url
            link.download = 'synthesized-audio.wav'
            document.getElementById('downloadLink').textContent = link.download
          })
          mediaRecorder.start()
          speechSynthesis.speak(this.utterance)
          this.utterance.addEventListener('end', () => {
            mediaRecorder.stop()
          })
        })
        .catch((error) => {
          console.error('Failed to get user media', error)
        })
    }
  }
}
</script>
