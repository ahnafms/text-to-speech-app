<template>
  <!-- Navbar -->
  <nav class="relative container mx-auto p-6 font-rubik">
    <!-- Flex Container For All Items -->
    <div class="flex items-center justify-between">
      <!-- Flex Container For Logo/Menu -->
      <div class="flex items-center space-x-20">
        <!-- Logo -->
        <img
          src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/11/logo-DTI-border1.png"
          class="w-28 h-28"
          alt=""
        />
        <!-- Navigation Menu -->
        <div class="hidden space-x-12 font-bold lg:flex">
          <a href="#tts" class="text-grayishViolet hover:text-gray-500 cursor-pointer">TTS</a>
          <a href="#tts" class="text-grayishViolet hover:text-gray-500">Tech Stack</a>
          <a href="#about" class="text-grayishViolet hover:text-gray-500">About Us</a>
        </div>
      </div>
      <!-- Right Buttons Menu -->
      <div class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
        <button
          class="px-8 py-3 font-bold text-white bg-blue-700 rounded-full hover:opacity-70 border-4 border-b-[10px] border-black"
        >
          Welcome
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="hero">
    <!-- Hero Container -->
    <div class="container flex flex-col-reverse mx-auto p- pb-0 lg:flex-row font-rubik">
      <!-- Content Container -->
      <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
        <div class="text-6xl font-bold text-center lg:text-8xl lg:text-left">
          More than just a Text-to-Speech
        </div>
        <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="mx-auto lg:mx-0">
          <a
            href="#tts"
            class="py-5 px-10 text-2xl font-bold text-white bg-blue-700 rounded-full lg:py-4 hover:opacity-70 border-4 border-b-[10px] border-black"
            >Get Started</a
          >
        </div>
      </div>

      <!-- Animation Image -->
      <div class="mb-0 mx-auto pl-28 md:w-180 lg:mb-0 lg:w-1/2">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_daqsbzrp.json"
          background="transparent"
          speed="1"
          style="width: 700px; height: 700px"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>

    <!-- Wave Section -->
    <div class="#ffff">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,128C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div class="bg-[#f3f4f5] w-full h-64"></div>
      <div class="bg-[#F9F5EB]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L60,69.3C120,107,240,181,360,224C480,267,600,277,720,240C840,203,960,117,1080,85.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- Text-to-Speech Section -->
  <section id="tts" class="bg-[#F9F5EB] overflow-hidden">
    <div class="flex h-screen flex-col justify-center">
      <div class="w-fit mx-auto bg-white">
        <div class="relative">
          <div class="-rotate-[23deg] absolute -left-1/4">
            <lottie-player
              src="https://assets5.lottiefiles.com/private_files/lf30_dfxejf4d.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <!-- Star Animation -->
        <!-- Star Animation -->
        <div class="relative">
          <div class="-rotate-[23deg] absolute -left-96 -bottom-40">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_SWAcBE.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div class="border-4 border-b-8 border-black rounded-xl p-10">
          <div class="text-7xl flex items-center mt-10 space-x-6 justify-center text-center">
            Text-to-Speech
          </div>

          <div class="flex items-center mt-10 space-x-6 justify-center">
            <textarea
              class="border-solid rounded-lg border-slate-200"
              v-model="app.text"
              type="text"
              name=""
              placeholder="Type your message here"
              id=""
            />

            <!-- Dropdown menu -->
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <select
                  data-te-select-init
                  v-model="voiceSelect"
                  name=""
                  id="voiceSelect"
                  ref="voiceSelect"
                  @change="onVoiceSelect"
                  class="border-solid rounded-lg"
                >
                  <option
                    v-for="voice in voiceList"
                    :data-name="voice.name"
                    :data-lang="voice.lang"
                    :key="voice"
                    :value="voice"
                    :selected="voice.name == 'Microsoft David - English (United States)'"
                  >
                    {{ voice.name }} - {{ voice.lang }}
                  </option>
                </select>
              </div>
            </div>
            <input type="file" name="readFile" @change="readFile()" ref="doc" />
          </div>

          <div class="flex items-center justify-center space-x-4 mt-10">
            <label for="pitch">Pitch</label>
            <input id="pitch" type="range" v-model="pitch" min="0" max="2" step="0.2" />
            <label for="rate">Rate</label>
            <input id="rate" type="range" v-model="rate" min="0" max="10" step="0.5" />
          </div>

          <!-- Buttons -->
          <div class="flex items-center justify-center space-x-6 mt-8">
            <button
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 border-[3px] border-b-[7px] border-black"
              @click="speechToText(voiceSelect.lang, voiceSelect.name)"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-3 text-center mr-2 mb-2 border-[3px] border-b-[7px] border-black"
              @click="statePause"
            >
              {{ this.isPause ? 'Resume' : 'Pause' }}
            </button>

            <button
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 border-[3px] border-b-[7px] border-black"
              @click="stateCancel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>{{ this.translatedText }}</div>
          <div
            class="flex items-center justify-center space-x-6 mt-8 border-solid border-black rounded-sl"
          >
            <a id="downloadLink"></a>
          </div>
        </div>

        <!-- Star Animation -->
        <div class="relative">
          <div class="-rotate-[23deg] absolute -right-96 -top-80">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_SWAcBE.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <!-- Human Animation -->
        <div class="relative">
          <div class="-rotate-[23deg] absolute -right-96 -top-48">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_ngCmDSkEvD.json"
              background="transparent"
              speed="1"
              style="width: 400px; height: 400px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <!-- End of TTS Feature -->
      </div>
    </div>
  </section>
  <!-- End of TTS Section -->

  <!-- Footer -->
</template>

<script>
import { useApp } from './stores'
import axios from 'axios'

export default {
  data() {
    return {
      utterance: '',
      isPause: false,
      text: '',
      pitch: 1,
      rate: 1,
      voiceSelect: '',
      voiceList: [
        {
          name: 'Microsoft David - English (United States)',
          lang: 'en-US',
          translate: 'en'
        },
        {
          name: 'Microsoft Zira - English (United States)',
          lang: 'en-US',
          translate: 'en'
        },
        {
          name: 'Google español',
          lang: 'es-ES',
          translate: 'es'
        },
        {
          name: 'Google Bahasa Indonesia',
          lang: 'id-ID',
          translate: 'id'
        },
        {
          name: 'Google italiano',
          lang: 'it-IT',
          translate: 'it'
        },
        {
          name: 'Google 日本語',
          lang: 'ja-JP',
          translate: 'ja'
        },
        {
          name: 'Google 한국의',
          lang: 'ko-KR',
          translate: 'ko'
        }
      ],
      file: null,
      translatedText: ''
    }
  },
  setup() {
    const app = useApp()
    return {
      app
    }
  },
  methods: {
    onVoiceSelect() {
      this.app.to = this.voiceSelect.translate
    },
    speechToText(lang, name) {
      const populateVoiceList = window.speechSynthesis.getVoices()
      this.utterance = new SpeechSynthesisUtterance(this.app.text)
      for (let i = 0; i < populateVoiceList.length; i++) {
        if (populateVoiceList[i].name === name && populateVoiceList[i].lang === lang) {
          this.utterance.voice = populateVoiceList[i]
          this.utterance.lang = lang
          this.utterance.pitch = this.pitch
          this.utterance.rate = this.rate
          this.utterance.volume = 100.0
          window.speechSynthesis.speak(this.utterance)
        }
      }
      this.generateAudioDownload(lang, name)
      this.translateToEng()
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
    generateAudioDownload(lang, voice) {
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
    },
    readFile() {
      this.file = this.$refs.doc.files[0]
      const reader = new FileReader()
      if (this.file.name.includes('.txt')) {
        reader.onload = (res) => {
          this.app.text = res.target.result
        }
        reader.onerror = (err) => console.log(err)
        reader.readAsText(this.file)
      } else {
        this.app.text = 'check the console for file output'
        reader.onload = (res) => {
          console.log(res.target.result)
        }
        reader.onerror = (err) => console.log(err)
        reader.readAsText(this.file)
      }
    },
    async translateToEng() {
      const encodedParams = new URLSearchParams()
      encodedParams.append('source_language', 'en')
      encodedParams.append('target_language', 'id')
      encodedParams.append('text', this.app.text)
      const res = await axios
        .post('https://text-translator2.p.rapidapi.com/translate', encodedParams, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd579e65668mshcca9d431a96f1fcp1a3811jsnc0007bde774d',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
          }
        })
        .catch((err) => console.log(err))
      this.translatedText = res.data.data.translatedText
    }
  }
}
</script>
