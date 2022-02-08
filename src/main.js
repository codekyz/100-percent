import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBn1sRkOroH7wObiWWDpDmkW86WcYI4oYs",
    authDomain: "percent-f0f7e.firebaseapp.com",
    projectId: "percent-f0f7e",
    storageBucket: "percent-f0f7e.appspot.com",
    messagingSenderId: "1034086828313",
    appId: "1:1034086828313:web:20b34354c443560c03dd88"
};

const app = initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .use(store)
    .use(app)
    .mount('#app')
