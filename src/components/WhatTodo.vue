<template>
  <div class="responsive fill-height d-flex">
    <v-card
      class="todo-card"
      width="120"
      @click="stepsCard = true"
      v-if="!stepsCard"
    >
      <v-card-item>
        <v-progress-circular :size="80" :width="7" :model-value="progressValue">
          <span class="progress-circle"
            ><b>{{ progressValue }}%</b> <small>Complete</small></span
          >
        </v-progress-circular>
        <v-card-text class="card-text">
          <p class="card-content"><b>What do I do next?</b></p>
        </v-card-text>
      </v-card-item>
    </v-card>

    <div class="overlay-menu">
      <v-menu
        class="steps-menu d-flex align-center"
        v-model="stepsCard"
        :close-on-content-click="false"
      >
        <v-card class="steps-card" width="350">
          <div class="steps-card-content">
            <!-- <div> -->
            <v-card-title class="title">
              <span>You're just steps away...</span>
              <v-icon @click="stepsCard = false" icon="close" />
            </v-card-title>
            <v-card-subtitle class="subtitle">
              ... to get the best recommendations for your term insurance
            </v-card-subtitle>
            <v-divider></v-divider>
            <!-- <v-card-title> You're just steps away... </v-card-title> -->
            <v-list>
              <v-list-item
                class="steps-list"
                v-for="(steps, index) in stepsList"
                :key="index"
              >
                <v-list-item-title class="title pb-3">
                  <span
                    :class="[
                      { 'completed-step': steps.completed },
                      'd-flex align-center',
                    ]"
                    >{{ steps.text }}</span
                  >
                  <div>
                    <v-icon
                      v-if="steps.completed"
                      class="check-icon"
                      icon="check_circle_outline"
                    />
                    <v-btn
                      v-else
                      variant="outlined"
                      block
                      rounded="lg"
                      class="go-btn"
                      @click="onCompleteStep(index)"
                      >Go</v-btn
                    >
                  </div>
                </v-list-item-title>
                <v-divider v-if="index + 1 !== stepsList.length"></v-divider>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class WhatTodo extends Vue {
  public stepsCard = false;
  public progressValue = 0;
  public stepsList = [
    { text: "Select an insurance type", completed: true },
    { text: "Get detailed report", completed: false },
    { text: "Compare insurance plans", completed: false },
    { text: "Choose an Advisor", completed: false },
  ];

  mounted() {
    this.setProgressValue();
  }

  public onCompleteStep(index: number) {
    this.stepsList[index].completed = true;
    this.setProgressValue();
  }

  public setProgressValue() {
    let completedSteps = this.stepsList.filter((key) => key.completed);
    this.progressValue = completedSteps.length * 25;
  }
}
</script>
