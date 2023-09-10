<script setup>
import { ref } from "vue";
import { convertToCurrency } from "@/helpers";
const firstName = ref("Juan");
const middleName = ref("Dimagiba");
const lastName = ref("Dela Cruz");
const monthlyIncome = ref(20000);
const transferFee = ref(100);
const accountNumber = ref("0000 000000");
const bankName = ref("Bank 1");
</script>

<template>
    <v-container>
        <v-container style="text-align: center; color: #8277B4; font-weight: 300;">
            <p style="margin-bottom: 10px; font-size: 1rem;">Select withdrawal channel</p>
            <p style="font-size: 0.8rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </v-container>
        <v-card style="border-radius: 15px;">
            <v-container>
                <p style="margin-bottom: 10px; font-size: 0.9rem; font-weight: 600;">{{ bankName }}</p>
                <v-divider :thickness="2"></v-divider>
                <v-row class="transfer-fee-container" justify="space-between" no-gutters>
                    <v-col cols="4">
                        <p>Transfer Fee</p>
                    </v-col>
                    <v-col cols="4" class="transfer-fee__text--end">
                        <p> {{ convertToCurrency(transferFee) }}</p>
                    </v-col>
                </v-row>
                <v-card class="info-card">
                    <v-container class="information-container">
                        <p class="information__title">Personal Information</p>
                        <p class="information_secondary">First Name: {{ firstName }}</p>
                        <p class="information_secondary">Middle Name: {{ middleName }}</p>
                        <p class="information_secondary">Last Name: {{ lastName }}</p>
                        <p class="information_secondary">Monthly Income: {{ convertToCurrency(monthlyIncome) }}</p>
                    </v-container>
                    <v-container class="information-container">
                        <p class="information__title">Account details</p>
                        <p class="information_secondary">Account no.: {{ accountNumber }}</p>
                    </v-container>
                </v-card>

                <v-container style="text-align: center;">
                    <v-btn color="#C6C1F4" size="small" style="color: #48387F; width: 100%;">Update Information</v-btn>
                    <v-btn style="color: #48387F; margin-top: 10px;" size="small" variant="plain">Change bank</v-btn>
                </v-container>

            </v-container>
        </v-card>
        <v-expansion-panels class="expansion-panel-wrapper">
            <v-expansion-panel title="Remitance"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            </v-expansion-panel>
            <v-expansion-panel class="expansion-panel__margin--top" title="E-wallets"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            </v-expansion-panel>
        </v-expansion-panels>
        <v-container>
            <v-btn color="#45357C" style="color: #FFF; width: 100%; border-radius: 20px;">CONFIRM</v-btn>
        </v-container>
    </v-container>
</template>

<style scoped>
.expansion-panel-wrapper {
    margin-top: 15px;
}

.expansion-panel__margin--top {
    margin-top: 15px;
}

.transfer-fee-container {
    font-size: 0.8rem;
    margin-top: 15px;
    font-weight: 500;
}

.transfer-fee__text--end {
    text-align: end;
}

.info-card {
    margin-top: 10px;
    border-radius: 10px;
}

.information-container {
    font-size: 0.8rem;
    text-align: center;
}

.information__title {
    font-weight: 500;
}

.information__secondary {
    font-weight: 400;
}
</style>