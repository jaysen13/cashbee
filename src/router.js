import { createRouter, createWebHistory } from "vue-router";

import Identification from "@/components/identification/Identification.vue";
import ApplyLoan from "@/components/apply_loan/ApplyLoan.vue";
import WithdrawalChannel from "@/components/withdrawal_channel/WithdrawalChannel.vue";
import PageNotFound from "@/components/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Identification },
        { path: "/loan", component: ApplyLoan },
        { path: "/withdraw", component: WithdrawalChannel },
        {
            path: "/:catchAll(.*)*",
            name: "PageNotFound",
            component: PageNotFound,
        },
    ],
});

export { router };