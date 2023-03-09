<template>
  <div class="flex h-screen flex-col justify-center">
    <div class="w-fit mx-auto">
      <div class="text-7xl">hgallo</div>
      <textarea class="" v-model="text" type="text" name="" placeholder="send text" id="" />
      <select v-model="voiceSelect" name="" id="voiceSelect"></select>
      <button @click="speechToText" type="submit">Submit</button>
      <button @click="voiceList">tes</button>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      text: '',
      voiceSelect: '',
      voiceList: []
    }
  },
  mounted() {
    const synth = window.speechSynthesis
    this.voiceList = synth.getVoices()
    for (let i = 0; i < this.voiceList.length; i++) {
      const option = document.createElement('option')
      option.textContent = `${this.voiceList[i].name} - (${this.voiceList[i].lang})`
      if (this.voiceList[i].default) {
        option.textContent += ' - DEFAULT'
      }
      option.setAttribute('data-lang', this.voiceList[i].lang)
      option.setAttribute('data-name', this.voiceList[i].name)
      document.getElementById('voiceSelect').appendChild(option)
    }
  },
  methods: {
    speechToText() {
      let speech = new SpeechSynthesisUtterance(this.text)
      for (let i = 0; i < this.voiceList.length; i++) {
        if (this.voiceList[i].name === this.voiceSelect.split(' ')[0]) {
          speech.voice = this.voiceList[i]
        }
      }
      speechSynthesis.speak(speech)
    }
  }
}
</script>
