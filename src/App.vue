<template>
  <v-app>
    <v-main class="">
      <WhatTodo />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WhatTodo from "./components/WhatTodo.vue";

@Options({
  components: {
    WhatTodo,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "./style/style.scss";
</style>
