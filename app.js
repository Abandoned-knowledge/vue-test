const vm = Vue.createApp({
  data() {
    return {
      author: "Луверанс",
      track: "Душа моя",
      trackImage:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/2c/7f/23/2c7f2312-079a-3d75-c3b5-3df23ac7ca0c/6c0d93c9-0225-4138-85e4-437caca710bc_file_cropped.png/375x375bb.jpg",
      isLike: false,
      blockWidth: 1000,
      similarTracks: [
        {
          name: "Спи",
          duration: "3.55",
        },
        {
          name: "Океаны",
          duration: "2.59",
        },
        {
          name: "Там где",
          duration: "3.22",
        },
      ],
      boxW: 100,
      boxH: 100,
    };
  },
  methods: {
    addLike() {
      !this.isLike ? (this.isLike = true) : (this.isLike = false);
    },
    copyWidth() {
      let text = `width: ${this.boxW}px;`;
      navigator.clipboard.writeText(text);
      alert(`copied text: ${text}`);
    },
    copyHeight() {
      let text = `height: ${this.boxH}px;`;
      navigator.clipboard.writeText(text);
      alert(`copied text: ${text}`);
    },
    copyAll() {
      let text = `width: ${this.boxW}px; height: ${this.boxH}px;`;
      navigator.clipboard.writeText(text);
      alert(`copied text: ${text}`);
    }
  },
  computed: {
    fullName() {
      return `${this.author} - ${this.track}`;
    },
    sizeBox() {
      return {
        width: `${this.boxW}px`,
        height: `${this.boxH}px`,
      };
    },
  },
  watch: {
    // isLike() {
    //   setTimeout(() => {
    //     alert(`Вы поставили отметку - "нравится" на треке "${this.fullName}"`);
    //   }, 1000);
    // },
  },
}).mount("#app");
