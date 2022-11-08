import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

// 创建一个key
export const key: InjectionKey<Store<State>> = Symbol();
// 声明输出类型
export type State = {
  cont: number;
};

export default createStore({
  state: {
    cont: 1,
  },
  mutations: {
    add(state) {
      state.cont++;
    },
  },
});
