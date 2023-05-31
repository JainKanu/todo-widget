<template>
  <div class="responsive fill-height d-flex w-100">
    <v-card class="todo-card" @click="stepsCard = true" v-if="!stepsCard">
      <v-card-item>
        <v-progress-circular
          class="full-screen"
          :size="65"
          :width="5"
          :model-value="progressValue"
          :rotate="180"
        >
          <span class="progress-circle"
            ><b>{{ progressValue }}%</b> <small>Complete</small></span
          >
        </v-progress-circular>
        <v-progress-circular
          class="small-screen"
          :size="32"
          :width="3"
          :model-value="progressValue"
          :rotate="180"
        >
          <span class="progress-circle"
            ><b>{{ progressValue }}%</b></span
          >
        </v-progress-circular>
        <v-card-text class="card-text full-screen">
          <p class="card-content"><b>What do I do next?</b></p>
        </v-card-text>
        <v-card-text class="card-text small-screen">
          <p class="card-content"><b>What's next?</b></p>
        </v-card-text>
      </v-card-item>
    </v-card>

    <div class="overlay-menu">
      <v-menu
        class="steps-menu"
        v-model="stepsCard"
        :close-on-content-click="false"
      >
        <v-card class="steps-card">
          <div class="steps-card-content">
            <v-card-title class="title pl-0">
              <span>You're just steps away...</span>
              <v-icon @click="stepsCard = false" icon="close" />
            </v-card-title>
            <v-card-subtitle class="subtitle pl-0">
              ... to get the best recommendations for your term insurance
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                class="steps-list"
                v-for="(steps, index) in stepsList"
                :key="index"
              >
                <v-list-item-title class="title pb-3">
                  <span
                    :class="[
                      {
                        'completed-step': steps.completed,
                      },
                      index !== 0
                        ? stepsList[index - 1].completed && !steps.completed
                          ? 'font-weight-bold'
                          : ''
                        : !steps.completed
                        ? 'font-weight-bold'
                        : '',
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
