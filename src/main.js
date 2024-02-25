import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'
import Info from '@/views/info-page.vue'
import Inventory from '@/views/inventory-page.vue'
import Resources from '@/views/resources-page.vue'

const routes = [
  { path: '/', component: Info },
  { path: '/resources', component: Resources },
  { path: '/inventory', component: Inventory },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
