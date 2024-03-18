const vm = Vue.createApp({
  data() {
    return {
      author: "Луверанс",
      track: "Душа моя",
      trackImage:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/2c/7f/23/2c7f2312-079a-3d75-c3b5-3df23ac7ca0c/6c0d93c9-0225-4138-85e4-437caca710bc_file_cropped.png/375x375bb.jpg",
      isLike: false,
    };
  },
  methods: {
    like(event) {
      const icon = event.target.parentElement;
      icon.classList.remove("text-white");
      icon.classList.add("text-red-500");
      this.isLike = true;
    },
  },
  computed: {
    fullName() {
      return `${this.author} - ${this.track}`;
    },
  },
  watch: {
    isLike() {
      setTimeout(() => {
        alert(`Вы поставили отметку - "нравится" на треке "${this.fullName}"`);
      }, 1000);
    },
  },
}).mount("#app");
