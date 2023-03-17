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
          <a href="#tech-stack" class="text-grayishViolet hover:text-gray-500">Tech Stack</a>
          <a href="#about" class="text-grayishViolet hover:text-gray-500">About Us</a>
        </div>
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
            @click="$router.push('/dashboard')"
            class="py-5 px-10 text-2xl font-bold text-white bg-blue-700 rounded-full lg:py-4 hover:opacity-70"
            >Get Started</a
          >
        </div>
      </div>

      <!-- Image -->
      <div class="mb-0 mx-auto pl-28 md:w-180 lg:mb-0 lg:w-1/2">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_fpq9wG8yV3.json"
          background="transparent"
          speed="1"
          style="width: 600px; height: 600px"
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,32L60,69.3C120,107,240,181,360,224C480,267,600,277,720,240C840,203,960,117,1080,85.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f3f4f5"
        fill-opacity="1"
        d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,128C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f3f4f5"
        fill-opacity="1"
        d="M0,192L30,208C60,224,120,256,180,261.3C240,267,300,245,360,240C420,235,480,245,540,234.7C600,224,660,192,720,186.7C780,181,840,203,900,186.7C960,171,1020,117,1080,112C1140,107,1200,149,1260,154.7C1320,160,1380,128,1410,112L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg> -->
  </section>

  <div class="flex h-screen flex-col justify-center" id="tts">
    <div class="w-fit mx-auto">
      <div class="text-7xl border-">Text-to-Speech</div>
      <textarea
        class="border-solid"
        v-model="text"
        type="text"
        name=""
        placeholder="send text"
        id=""
      />
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
      <a id="downloadLink"></a>
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
