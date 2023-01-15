import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

createApp(App)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
