import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface User {
  username: string,
  email: string,
}

export interface State {
  user: Array<User>
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore () {
  return baseUseStore(key)
}

const store = createStore<State>({
  state () {
    return {
      user: []
    }
  },
  mutations: {
    updateUser(state: State, payload: { userInfo: User }){
      state.user.push(payload.userInfo);
    }
  }
});

export default store;