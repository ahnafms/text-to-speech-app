<template>
  <div class="bg gray-50 flex min-h-screen flex-col items-center justify-center px-16">
    <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
    </div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
    </div>
  </div>
    <div class="w-fit mx-auto">
      <div class="text-7xl">TEXT TO SPEECH KELOMPOK 2</div>
      <div class="mt-10">
      <textarea class="border-double border-4 border-black-500 w-full" v-model="text" type="text" name="" placeholder=" Send Text " id="" />
      </div>
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
      <div class="mt-5 flex justify-evenly mx-auto">
      <button class="bg-gray-300 hover:bg-gray-400 rounded-lg py-2 px-5" @click="statePause">{{ this.isPause ? 'Resume' : 'Pause' }}</button>
      <button class="bg-gray-300 hover:bg-gray-400 rounded-lg py-2 px-5" @click="stateCancel">Cancel</button>
      <button class="bg-gray-300 hover:bg-gray-400 rounded-lg py-2 px-5" @click="speechToText" type="submit">Play</button>
      </div>
      <div class="mt-8 flex justify-center">
      <a id="downloadLink"> Download </a>
      </div>
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
