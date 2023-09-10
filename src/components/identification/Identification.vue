<script setup>
import { ref } from "vue";
import { getImage } from "@/helpers";
import StepComponent from "@/components/identification/Steps.vue";
import StepOne from "@/components/identification/StepOne.vue";

const steps = ref(["Step 1", "Step 2", "Step 3", "Step 4"]);
const activeStep = ref(0);

function proceed() {
    if (activeStep.value === steps.value.length - 1) return activeStep.value = 0;
    return activeStep.value++;
}
</script>

<template>
    <v-container style="padding: 0;">
        <v-img :src="getImage('onehand_icon.png')" height="75"></v-img>
        <v-card-subtitle style="text-align: center;">
            Provide all the information needed
        </v-card-subtitle>
        <StepComponent :items="steps" :active-step="activeStep">
            <template #step1>
                <StepOne />
            </template>
        </StepComponent>
        <v-container style="margin-top: 20px;">
            <v-btn type="submit" block style="background: #45357c; color: #fff;" @click="proceed">Proceed</v-btn>
        </v-container>
    </v-container>
</template>