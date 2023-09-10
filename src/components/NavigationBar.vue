<script setup>
import { ref } from "vue";
import { router } from "@/router";

const isShow = ref(false);
function goTo(to) {
    router.push(to);
    isShow.value = false;
}
function goBack() {
    router.go(-1);
}
</script>

<template>
    <v-app-bar scroll-behavior="elevate" style="background-color: #cbbcff" rounded="b-xl">
        <v-btn variant="plain" @click="goBack">
            <v-icon icon="arrow_back" />
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="isShow = !isShow">
            <v-icon icon="menu" />
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer location="right" temporary :model-value="isShow">
        <v-list>
            <v-list-item title="Identification" prepend-icon="home" value="identification" @click="goTo('/')">
            </v-list-item>
            <v-list-item title="Apply Loan" prepend-icon="request_quote" value="apply_loan"
                @click="goTo('/loan')"></v-list-item>
            <v-list-item title="Withdrawal Channel" prepend-icon="mdi:mdi-cash-refund" value="withdrawal_channel"
                @click="goTo('/withdraw')"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
