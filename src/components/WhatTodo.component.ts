import { Vue, Options } from "vue-class-component";
import Template from "./WhatTodo.template.vue";

@Options({
  mixins: [Template]
})
export default class WhatTodo extends Vue {
  public stepsCard = false;
  public progressValue = 0;
  public stepsList: { text: string; completed: boolean }[] = [
    { text: "Select an insurance type", completed: true },
    { text: "Get detailed report", completed: false },
    { text: "Compare insurance plans", completed: false },
    { text: "Choose an Advisor", completed: false }
  ];

  mounted() {
    this.setProgressValue();
  }

  public onCompleteStep(index: number) {
    this.stepsList[index].completed = true;
    this.setProgressValue();
  }

  public setProgressValue() {
    const completedSteps = this.stepsList.filter((key) => key.completed);
    this.progressValue = completedSteps.length * 25;
  }
}
