<template>
  <v-app>
    <v-main class="main-app">
      <WhatTodo />
    </v-main>
  </v-app>
</template>

<style>
@import "./style/style.scss";
.main-app {
  background-image: url(./assets/bg.png);
  background-size: 100% 100%;
}
@media only screen and (max-width: 360px) {
  .main-app {
    background-image: url("./assets/mobile-bg.png");
    background-size: 100% 100%;
  }
}
</style>
