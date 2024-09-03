// Fase di preparazione

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Vue: Hello World!",
            url: "../img/logo.jpg"
        }
    }
}).mount("#app");