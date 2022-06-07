import { login} from "~/api/users/users.api";

export const state = () => ({
  user: null,
  csrf_token: null
})

export const getters = {
  get_user(state) {
    return state.user
  },
}
export const mutations = {
  SET_USER_INFO(state, user) {
    state.user = user
  },
}
export const actions = {
  loginUser({store, commit}, {username, password}) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await login({
        username, password
      });
      //depends on the response
      commit('SET_USER_INFO', response.data) 
      resolve()
    } catch (err) {
      reject(err.response.data.message)
      
    }
  })
}
}