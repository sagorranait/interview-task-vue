import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface Videos {
  id: number,
  url: string,
  name: string,
  time: string,
  title: string,
  thumbnail: string,
  description: string,
}

export interface User {
  username: string,
  email: string,
}

export interface State {
  user: Array<User>,
  videos: Array<Videos>
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore () {
  return baseUseStore(key)
}

const store = createStore<State>({
  state () {
    return {
      user: [],
      videos: [],
    }
  },
  mutations: {
    updateUser(state: State, payload: { userInfo: User }){
      state.user.push(payload.userInfo);
    },

    newVideos(state: State, payload: { data: Array<Videos> }){      
      state.videos.push(...payload.data);
    }
  }
});

export default store;