import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            todos: []
        }
    },
    mutations: {
        addItem(state, payload) {
            state.todos.push(payload)
        },
        removeItem(state, payload) {
            state.todos = state.todos.filter((it) => String(it.id)!== String(payload))
        },
        editItem(state, payload) {
            state.todos.forEach((it) => {
                if (String(it.id) === String(payload.id)) {
                    it.text = payload.text
                }
            })
        }
    },
    actions: {
        addNewListItem({commit}, payload) {
            commit('addItem', payload)
        },
        removeListItemById({commit}, payload) {
            commit('removeItem', payload)
        },
        editListItemById({commit}, payload) {
            commit('editItem', payload)
        }
    },
    getters: {
        getTodos: (s) => s.todos
    }
  })
