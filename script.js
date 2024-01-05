const app = Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.updateMessage();
  },
  methods: {
    updateMessage() {
      const today = new Date().getDay();

      if (today === 5) {
        this.message = "Yep.";
      } else if (today === 4) {
        this.message = "Almost.";
      } else {
        this.message = "No.";
      }
    },
  },
});

app.mount("#app");
