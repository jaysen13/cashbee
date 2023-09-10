<script setup>
import { ref } from "vue";
import moment from "moment";
import { getImage } from "@/helpers";

const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const gender = ref("");
const birthDate = ref("");
const birthPlace = ref("");
const nationality = ref("");
const educationLevel = ref("");
const facebookNumber = ref("");
const idType = ref("");
const idNumber = ref("");
const validity = ref("");

const inputs = ref([
    { model: firstName, label: "First Name" },
    { model: middleName, label: "Middle Name" },
    { model: lastName, label: "Last Name" },
    {
        model: gender,
        label: "Gender",
        inputType: "dropdown",
        options: ["Male", "Female"],
    },
    {
        model: birthDate,
        label: "Birth Date",
        inputType: "date",
        max: moment().subtract(18, "years").format("YYYY-MM-DD"),
        min: moment().subtract(65, "years").format("YYYY-MM-DD"),
    },
    { model: birthPlace, label: "Birth Place" },
    { model: nationality, label: "Nationality" },
    { model: educationLevel, label: "Education Level" },
]);
const fNumber = ref({ model: facebookNumber, label: "Facebook Number" });
const inputId = ref([
    {
        model: idType,
        label: "ID Type",
        inputType: "dropdown",
        options: ["National ID", "Driver's License", "SSS"],
    },
    { model: idNumber, label: "ID Number" },
    {
        model: validity,
        label: "Validity",
        inputType: "date",
        min: moment().add(1, "month").format("YYYY-MM-DD"),
    },
]);
</script>

<template>
    <v-container>
        <div v-for="input in inputs">
            <v-text-field v-if="input && !input.inputType" clearable variant="outlined" :label="input.label"
                v-model="input.model"></v-text-field>
            <v-combobox v-else-if="input.inputType === 'dropdown'" clearable :label="input.label" :items="input.options"
                variant="outlined" v-model="input.model"></v-combobox>
            <v-text-field v-else clearable variant="outlined" :type="input.inputType" :max="input.max" :min="input.min"
                :label="input.label" v-model="input.model"></v-text-field>
        </div>
    </v-container>

    <v-divider :thickness="7"></v-divider>

    <v-container>
        <v-card-subtitle style="text-align: center; margin-bottom: 20px;">How to get Facebook Link</v-card-subtitle>
        <v-card style="margin-bottom: 30px;" width="100%">
            <v-row no-gutters>
                <v-col>
                    <v-img :src="getImage('facebook_logo.png')" height="75"></v-img>
                </v-col>
                <v-col cols="6" style="padding: 25px 0;">
                    <p>See Instructions</p>
                </v-col>
                <v-col style="padding: 17.5px 0; text-align: end;">
                    <v-btn variant="text" style=" color: #B8A7F0;">
                        <v-icon icon="east" style="font-size: 40px;"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
        <v-text-field clearable variant="outlined" label="Facebook Number" v-model="fNumber.model"></v-text-field>
    </v-container>

    <v-divider :thickness="7"></v-divider>

    <v-container>
        <v-card-subtitle style="text-align: center; margin-bottom: 20px;">Valid Id</v-card-subtitle>
        <template v-for="input in inputId">
            <v-text-field v-if="input && !input.inputType" clearable variant="outlined" :label="input.label"
                v-model="input.model"></v-text-field>
            <v-combobox v-else-if="input.inputType === 'dropdown'" clearable :label="input.label" :items="input.options"
                variant="outlined" v-model="input.model"></v-combobox>
            <v-text-field v-else clearable variant="outlined" :type="input.inputType" :max="input.max" :min="input.min"
                :label="input.label" v-model="input.model"></v-text-field>
        </template>

        <v-row>
            <v-col cols="6" style="padding: 5px;">
                <v-container style="background-color: #FAF9FF; border-radius: 20px; padding: 15px;">
                    <v-container style="background-color: #DFD9FF; border-radius: 10px; text-align: center;">
                        <v-icon icon="photo_camera" color="#7C71A3" style="font-size: 40px;"></v-icon>
                    </v-container>
                    <v-container class="id-desc-container">
                        <p>Take a photo of your ID</p>
                    </v-container>
                </v-container>
            </v-col>
            <v-col cols="6" style="padding: 5px;">
                <v-container style="background-color: #FAF9FF; border-radius: 20px; padding: 15px;">
                    <v-container style="background-color: #DFD9FF; border-radius: 10px; text-align: center;">
                        <v-icon icon="photo_camera" color="#7C71A3" style="font-size: 40px;"></v-icon>
                    </v-container>
                    <v-container class="handled-id-desc-container" style="text-align: center; height: 80px;">
                        <p style="color: #7C71A3; font-size: 0.8rem;">Take a photo of your Handled
                            ID</p>
                    </v-container>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.id-desc-container {
    text-align: center;
    height: 80px;
}

.id-desc-container p {
    color: #7C71A3;
    font-size: 0.8rem;
}


.handled-id-desc-container {
    text-align: center;
    height: 80px;
}

.handled-id-desc-container p {
    color: #7C71A3;
    font-size: 0.8rem;
}

@media only screen and (max-width: 426px) {
    .id-desc-container {
        padding: 20px 10px;
    }

    .handled-id-desc-container {
        padding: 20px 10px;
    }
}

@media only screen and (min-width: 768px) {
    .id-desc-container {
        padding: 30px;
    }

    .handled-id-desc-container {
        padding: 30px;
    }
}
</style>