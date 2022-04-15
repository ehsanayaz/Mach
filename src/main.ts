import { createApp } from 'vue'
//import router from 'router'
import App from 'App.vue'

// Tailwind CSS
import 'index.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEdit);

createApp(App)
    //.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
