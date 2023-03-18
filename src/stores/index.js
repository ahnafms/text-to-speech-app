import { defineStore } from "pinia";
// import axios from "axios";

export const useApp = defineStore({
    id: "app",
    state: () => ({
        text: "",
        to: "id",
    }),
    actions: {
        async translate() {
            const encodedParams = new URLSearchParams();
            encodedParams.append("text", this.text);
            encodedParams.append("from", "auto");
            encodedParams.append("to", this.to);

            const options = {
                method: 'POST',
                url: 'https://translate281.p.rapidapi.com/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '1049b95811msha4bce6ce9b3dac9p171e64jsn9de70be127de',
                    'X-RapidAPI-Host': 'translate281.p.rapidapi.com'
                },
                data: encodedParams
            };

            let data = '';
            axios.request(options).then(function (response) {
                data = response.data;
            }).catch(function (error) {
                console.error(error);
            });

            return data;
        }
    },
    getters: {},
});