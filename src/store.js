import { createStore } from 'vuex'
import * as solid from '@fortawesome/free-solid-svg-icons/index'
import * as brands from '@fortawesome/free-brands-svg-icons/index'

const iconsList = {
  ...solid,
  ...brands
};

export default createStore({
  state: {
    inputValue: '',
    dragged: false,
    icon: {
      prefix: '',
      iconName: '',
    },
    items: [
      { "id": 1, name: 'Team@trengo.com', prefix: 'fas', icon: 'phone' },
      { "id": 2, name: 'Call center', prefix: 'fas', icon: 'phone' },
      { "id": 3, name: 'Whatsapp business', prefix: 'fab', icon: 'whatsapp' },
      { "id": 4, name: '(test) development California', prefix: 'fas', icon: 'envelope' },
      { "id": 5, name: 'Whatsapp Business Iceland', prefix: 'fab', icon: 'whatsapp' },
    ]
  },
  mutations: {
    addItem(state) {
      // Randomizing icon first
      const names = Object.values(iconsList);
      const randomIcon = names[Math.floor(Math.random() * names.length)];
      state.icon.prefix = randomIcon.prefix;
      state.icon.iconName = randomIcon.iconName;

      // Push to items, aware the id assignment might cause issues in the future, would use uuid in a bigger project to fix it.
      state.items.push({"id": Math.floor(Math.random() * 100) + state.items.length + 1, "name": state.inputValue, "prefix": state.icon.prefix, "icon": state.icon.iconName})

      // Shows buttons
      state.dragged = true;

      // Reset value input
      state.inputValue = ''
    },
    removeItem(state, id) {
      const index = state.items.findIndex(item => item.id === id);
      const newData = [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
      ]
      state.items = newData;
    },
    saveOrder(state) {
      // Not sure this is what you are asking for when requesting "save to state"
      localStorage.setItem('items', state.items); 
      console.log(localStorage.items)
      state.dragged = false;

    },
    cancelOrder(state) {
      state.items = []
      state.dragged = false;
    }
  },
  actions: { 

  },
  getters: {

  },
  modules: {

  },
})