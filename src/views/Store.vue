<template>
<div class="store container-fluid" v-if="store">
    <div class="cover-imnage">
        <img :src="store.coverImage">
        <!-- Store Header -->
        <div class="store-header">
            <div class="header-wrapper">
                <h1>{{store.name}}</h1>
                <h2>{{store.slogan}}</h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">

            <!-- Who we are -->
            <div class="col-12 col-sm-6 col-lg-7 col-xl-8">
                <h3>Wer wir sind?</h3>
                <p v-html="store.description">
                </p>
            </div>

            <!-- More about us -->
            <div class="col-12 col-sm-6 col-lg-5 col-xl-4">
                <div class="logo">
                    <img alt="Logo" v-if="store.logo" :src="store.logo">
                    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1024px-Andromeda_Galaxy_%28with_h-alpha%29.jpg" alt="Skyscraper">
                </div>
                <div class="socials">
                    <a :href="store.socialFacebook" v-if="store.socialFacebook">
                        <md-button class="md-icon-button">
                            <img src="facebook.png" alt="facebook"/>
                        </md-button>
                    </a>

                    <a :href="store.socialInstagram" v-if="store.socialInstagram">
                        <md-button class="md-icon-button">
                            <img src="instagram.png" alt="instagram"/>
                        </md-button>
                    </a>

                    <a :href="store.socialTwitter" v-if="store.socialTwitter">
                        <md-button class="md-icon-button">
                            <img src="twitter.png" alt="twitter"/>
                        </md-button>
                    </a>

                    <a :href="store.website" v-if="store.website">
                        <md-button class="md-icon-button">
                            <img src="browser.png" alt="web"/>
                        </md-button>
                    </a>
                </div>
                <div class="contact">
                    {{store.name}}<br/>
                    <div v-if="store.address">
                        {{store.address.street}} {{store.address.houseNumber}}<br/>
                        {{store.address.zipCode}} {{store.address.city}}
                    </div>
                    <table>
                        <tr v-if="store.telephone">
                            <td>Tel:</td>
                            <td>
                                <a :href="'tel:' + store.telephone">{{store.telephone}}</a>
                            </td>
                        </tr>
                        <tr v-if="store.email">
                            <td>Mail:</td>
                            <td>
                                <a :href="'mailto:' + store.email">{{store.email}}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <section class="primary-section">
        <div class="container">
            <div class="row">
                <!-- Coupons Overview -->
                <div class="col-12">
                    <div class="row">
                        <h1 class="col-12">
                            Deine Gutschein-Optionen
                        </h1>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3"
                             v-for="coupon in store.couponOptions"
                             v-bind:key="coupon.id">
                            <CouponCard :coupon="coupon"
                                        :store="store">
                            </CouponCard>
                        </div>
                    </div>
                </div>

                <div v-if="store.couponOptions && store.couponOptions.length">
                    <p>
                        * Mit dem kleinen Zusatzbeitrag befreist du den Händler von der PayPal-Gebühr. Danke Dafür.
                    </p>

                    <p style="color:red">
                        Bitte beachten Sie, dass angesichts der aktuellen Umstände nicht ausgeschlossen werden kann, dass einzelne Gutschein-Anbieter in finanzielle Not geraten und Gutscheine deshalb nicht eingelöst oder erstattet werden können.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<style lang="scss" scoped>
    .store {
        text-align: left;

        .cover-imnage {
            max-height: 400px;
            margin: 0 -15px;
            overflow: hidden;
            position: relative;

            img {
                display: block;
                width: 100%;
                height: auto;
                position: relative;
                z-index: 1;
            }

            .store-header {
                position: absolute;
                bottom: 0;
                width: 100%;
                z-index: 2;
                background-color: $color-transparent-dark-bg;

                .header-wrapper {
                    width: 100%;
                    max-width: $site-content-max-width;
                    margin: 0 auto;
                    padding: 0 15px;
                    color: $color-font-light;
                }
            }
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Store} from '@/model/Store'
import CouponCard from '@/components/Coupon-Card.vue';
import {CouponOption} from '@/model/CouponOption';
@Component({
    components: {CouponCard}
})
export default class StoreView extends Vue {
    private store: Store|null = null;

    constructor() {
        super();
        this.get();
    }

    get () {
        const storeId = this.$route.params.id;
        this.axios.get('/stores/' + storeId, {})
            .then(e => {
                this.store = e.data as Store;
            })
            .catch(e => console.error(e))
    }
}
</script>
