<script setup>
import { ref, reactive } from "vue";
import { getImage, convertToCurrency } from "@/helpers";

const selectedValue = ref(0);
const loanTerm = ref(120);
const transactionFee = ref(100);
const slider = reactive({
    min: 0,
    max: 50000,
    step: 1000
});
</script>

<template>
    <v-container>
        <v-container style="background-color: #FAF9FF;">
            <p style="color: #5A4C8B; text-align: center;">LOAN APPLICATION</p>
            <v-img :src="getImage('apply_loan.png')" height="140"></v-img>
            <p style="color: #B0AEC4; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </v-container>
        <v-container style="margin-top: 20px;">
            <v-container style="background-color: #F8F6FF; border-radius: 30px;">
                <p style="text-align: center; color: #504184; font-size: 0.8rem;">Enter your desired loan amount.</p>
            </v-container>
            <p style="text-align: center; color: #45357C; font-weight: 900; margin-top: 30px; font-size: 1.5rem;">₱ {{
                selectedValue }}</p>
            <p style="text-align: center; color: #45357C; font-weight: 400; font-size: 0.7rem">(Minimum loan: Php 5,000)
                (Max loan: Php 50,000)</p>
            <v-slider color="#6750A4" :min="slider.min" :max="slider.max" :step="slider.step" v-model="selectedValue"
                style="margin-top: 20px;"></v-slider>

            <v-row style="background-color: #FBFBFB;">
                <v-col cols="6" style="padding: 5px;">
                    <v-container style="padding: 0;">
                        <v-container class="loan-term-card-container">
                            <p style="text-align: center;  font-size: 0.7rem; font-weight: 500; ">SELECT LOAN
                                TERM</p>
                        </v-container>
                        <v-container
                            style="background-color: #fff; border-radius: 0 0 15px 15px; padding: 15px 0; height: 80px; ">
                            <p style="text-align: center; color: #45357C; font-weight: 600; font-size: 1.5rem;">{{
                                loanTerm }}
                            </p>
                            <p style="text-align: center; color: #45357C; font-weight: 400;font-size: 0.65rem;">DAYS</p>
                        </v-container>
                    </v-container>
                </v-col>
                <v-col cols="6" style="padding: 5px;">
                    <v-container style="padding: 0;">
                        <v-container class="withdrawal-channel-card-container">
                            <p style="text-align: center; font-size: 0.7rem; font-weight: 500;">SELECT WITHDRAWAL CHANNEL
                            </p>
                        </v-container>
                        <v-container
                            style="background-color: #fff; border-radius: 0 0 15px 15px; padding: 15px 0; height: 80px;">
                            <p style="text-align: center; color: #45357C; font-weight: 600; font-size: 1.5rem;">
                                {{ convertToCurrency(transactionFee) }}</p>
                            <p style="text-align: center; color: #45357C; font-weight: 400; font-size: 0.65rem;">TRANSACTION
                                FEE BDO</p>
                        </v-container>
                    </v-container>
                </v-col>
            </v-row>

        </v-container>
        <v-container>
            <v-btn color="#45357C" style="color: #fff; width: 100%;" rounded="xl">CONFIRM</v-btn>
        </v-container>
    </v-container>
</template>

<style scoped>
.loan-term-card-container {
    background-color: #DFD9FF;
    color: #45357C;
    border-radius: 15px 15px 0 0;
    padding: 15px 30px;
    height: 50px;
}

.withdrawal-channel-card-container {
    background-color: #DFD9FF;
    color: #45357C;
    border-radius: 15px 15px 0 0;
    padding: 10px;
    height: 50px;
}

@media only screen and (min-width: 768px) {
    .withdrawal-channel-card-container {
        padding: 15px;
    }
}

@media only screen and (max-width: 425px) {
    .loan-term-card-container {
        padding: 10px 30px;
    }

    .withdrawal-channel-card-container {
        padding: 7px;
    }
}
</style>