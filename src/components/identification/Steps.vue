<script setup>
import { computed } from "vue";

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: []
    },
    activeStep: {
        type: Number,
        default: 0
    }
});

const activeStep = computed(() => props.activeStep);
</script>
<template>
    <v-container style="padding: 0;">
        <v-container style="padding: 5px;">
            <v-row no-gutters justify="center" style="overflow-x: auto; width: 100%;">
                <v-col cols="3" style="padding: 0 2px;" v-for="(step, index) in props.items">
                    <v-container
                        :class="`step-component__header ${index === 0 ? 'step-component__header-first' : ''} ${props.items.length - 1 === index ? 'step-component__header-last' : ''} ${index === activeStep ? 'step-component__header--active' : ''}`">
                        <p>{{ step }}</p>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <v-container style="padding: 0;">
            <div v-for="(item, index) in props.items"
                :class="`${activeStep === index ? '' : 'step-component__content--hidden'}`">
                <slot :name="`step${index + 1}`">
                    {{ item }}
                </slot>
            </div>
        </v-container>
    </v-container>
</template>

<style scoped>
.step-component__header {
    background-color: #E1E1E1;
    color: #AFAEAE;
    text-align: center;
    font-size: 0.8rem;
}

.step-component__header-first {
    border-radius: 15px 0 0 15px;
}

.step-component__header-last {
    border-radius: 0 15px 15px 0;
}

.step-component__header--active {
    background-color: #45357C;
    color: #A9A1C2;
}

.step-component__content--hidden {
    display: none;
}
</style>
