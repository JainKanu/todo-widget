import { Options, Vue } from "vue-class-component";
import WhatTodo from "./components/WhatTodo.component";
import Template from "./App.vue";

@Options({
  mixins: [Template],
  components: {
    WhatTodo
  }
})
export default class App extends Vue {}
