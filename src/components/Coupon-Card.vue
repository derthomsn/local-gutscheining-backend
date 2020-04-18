<template>
    <div class="coupon-card-wrapper">
        <div class="coupon-media" v-if="coupon.image">
            <img :src="coupon.image" alt="Coupon">
        </div>
        <div class="md-title">{{coupon.name}}</div>
        <div class="md-subhead">{{coupon.price}}</div>
        <div class="description">
            {{coupon.description}}
        </div>

        <div class="price">
            Du zahlst {{coupon.price}}€*.
        </div>
        <md-button class="md-raised" :to="'/store/' + store.id + '/order-coupon/' + coupon.id">Den will ich!</md-button>
    </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {Store} from '@/model/Store'
import {CouponOption} from '@/model/CouponOption';

@Component
export default class CouponCard extends Vue {
  @Prop() private store!: Store;
  @Prop() private coupon!: CouponOption;

  public firstName = 'Simon';
  public lastName = 'Brandl';
  public email = 'simon.brandl@googlemail.com';
  public amountInEur = 10;

  private submitting = false;
  private redirecting = false;
  private failed = false;

  post() {
      this.submitting = true;
      this.failed = false;
      this.axios.post('/stores/' + this.store.id + '/orderCoupon', {
        firstName: this.firstName,
        lastName: this.lastName,
          email: this.email,
          amountInEur: this.amountInEur
      })
          .then(e => {
              this.submitting = false;
              this.redirecting = true;
              // returns a redirect URL
              window.location.href = e.data;
          })
          .catch(e => {
              this.submitting = false;
              this.failed = true;
              console.error(e)
          })
  }

}
</script>
