<template>
    <div>
        <h3>Deine Bestellung für den Gutschein</h3>
        <div v-if="coupon && store">
            <h2>{{coupon.name}}</h2>

            <div class="container order-data">
                <coupon-form :store="store" :coupon="coupon"></coupon-form>
            </div>

            <section class="store-info" v-if="store">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <h3>{{store.name}}</h3>
                            <h4>{{store.slogan}}</h4>
                        </div>
                        <div class="col-4">
                            <div v-if="store.address" class="address">
                                {{store.address.street}} {{store.address.houseNumber}}<br/>
                                {{store.address.zipCode}} {{store.address.city}}
                            </div>

                            <div>
                            <div v-if="store.telephone">
                                Tel: <a :href="'tel:' + store.telephone">{{store.telephone}}</a>
                            </div>
                            <div v-if="store.email">
                                Mail: <a :href="'mailto:' + store.email">{{store.email}}</a>
                            </div>
                            </div>

                        </div>

                        <div class="col-4">
                            <div class="logo">
                                <img alt="Logo" v-if="store.logo" :src="store.logo">
                                <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1024px-Andromeda_Galaxy_%28with_h-alpha%29.jpg" alt="Skyscraper">
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Store} from '@/model/Store'
import CouponForm from '@/components/Coupon-Form.vue';
import {CouponOption} from '@/model/CouponOption';
@Component({
    components: {CouponForm}
})
export default class OrderCoupon extends Vue {
    private store: Store|null = null;
    private coupon: CouponOption|null = null;

    mounted(): void {
        this.get();
    }

    get () {
        const storeId = this.$route.params.id;
        const couponId = this.$route.params.couponId;

        this.axios.get('/stores/' + storeId, {})
            .then(e => {
                this.store = e.data as Store;
            })
            .catch(e => console.error(e));

        this.axios.get('/couponOption/' + storeId + '/' + couponId, {})
            .then(e => {
                this.coupon = e.data as CouponOption;
            })
            .catch(e => console.error(e));
    }
}
</script>

<style scoped lang="scss">

$wlBlue: rgb(0, 185, 255);

section.store-info {
    text-align: left;
    background-color: $wlBlue;
    padding-top: 15px;
    padding-bottom: 15px;

    a {
        color: black;
    }
}

.address {
    margin-bottom: 20px;
}

.order-data {
    min-height: 400px;
}
</style>
