<template>
<div>
    <div v-if="submitting">
        Paypal rödelt noch, warte kurz<br />
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>

    <div v-if="successful">
        <div class="content">
            <h2>Herzlichen Glückwunsch!</h2>

            <div style="text-align: center">
                <md-icon class="md-size-3x">cake</md-icon>
            </div>

            <div v-if="store">
                <p>Du hast einen Gutschein erworben, und darueber freut sich vor allem…
                </p>
                <p>richtig, <strong>{{store.name}}</strong></p>
            </div>

            <p>Der Gutschein wird dir als E-Mail an die angegebene E-Mail-Adresse geschickt. </p>

        </div>

        <SharingIsCaring></SharingIsCaring>
    </div>

    <div v-if="failed">
        Das hat leider nicht geklappt. Bitte versuche es später noch einmal und gib uns bescheid, falls das Problem bestehen bleibt.
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {Store} from '../model/Store';
import SharingIsCaring from '@/components/Sharing-Is-Caring.vue';

@Component({
    components: {SharingIsCaring}
})
export default class PaymentResult extends Vue {
    failed = false;
    submitting = true;
    successful = false;

    store: Store|null = null;

    mounted() {
        const token = this.$route.query.token;
        const payerID = this.$route.query.PayerID;
        const storeId = this.$route.params.id;

        console.log('now confirming ' + token);

        this.failed = false;
        this.axios.post('/confirmPayment/' + storeId, {
            token: token,
            payerId: payerID
        })
            .then(e => {
                this.submitting = false;
                this.successful = true;
            })
            .catch(e => {
                this.submitting = false;
                this.failed = true;
                console.error(e)
            });

        this.axios.get('/stores/' + storeId, {})
            .then(e => {
                this.store = e.data as Store;
            })
            .catch(e => console.error(e))
    }
}
</script>

<style scoped>
.content {
    min-height: 400px;
}

</style>
