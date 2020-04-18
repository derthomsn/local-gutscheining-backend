<template>
  <div class="coupon-form">

      <form v-if="!redirecting && !submitting">
          <div class="row">
              <div class="col">
                  <div>
                      <md-field>
                          <label for="first-name">Vorname</label>
                          <md-input name="first-name" id="first-name" v-model="firstName" :disabled="submitting"/>
                      </md-field>
                  </div>
                  <div>
                      <md-field>
                          <label for="last-name">Nachname</label>
                          <md-input name="last-name" id="last-name" v-model="lastName" :disabled="submitting"/>
                      </md-field>
                  </div>
                  <div>
                      <md-field>
                          <md-icon>email</md-icon>
                          <label for="email">E-Mail</label>
                          <md-input name="email" id="email" v-model="email" :disabled="submitting"/>
                      </md-field>
                  </div>
                  <div>
                      <md-field>
                          <label for="coupon-text">Gutscheintext</label>
                          <md-textarea name="coupon-text" id="coupon-text" placeholder="Für Oma Renate" maxlength="150" v-model="couponText" :disabled="submitting"/>
                      </md-field>
                      <small class="input-hint">{{couponText ? couponText.length : 0}} / 150 Zeichen</small>
                  </div>
                  <div>
                      <md-field>
                          <md-icon>euro</md-icon>
                          <label for="amount-in-euro">Gutscheinbetrag</label>
                          <md-input name="amount-in-euro" id="amount-in-euro" v-model="coupon.value" :disabled="true"/>
                      </md-field>
                  </div>
              </div>

              <div class="col">
                  <div class="prices">
                      <md-field>
                          <md-icon>euro</md-icon>
                          <label for="price-in-euro">Gesamtsumme inkl. Gebühren</label>
                          <md-input name="price-in-euro" id="price-in-euro" v-model="coupon.price" :disabled="true"/>
                      </md-field>

                      <md-field>
                          <md-icon>receipt</md-icon>
                          <label for="tax-in-euro">Inkl. MwSt</label>
                          <md-input name="tax-in-euro" id="tax-in-euro" v-model="coupon.taxes"  :disabled="true"/>
                      </md-field>
                  </div>

                  <md-button class="md-raised md-primary" v-if="!submitting" v-on:click="post">Weiter zu Paypal</md-button>
              </div>
          </div>

      </form>

      <div class="waiting-message-with-spinner" v-if="submitting || redirecting">
          <span v-if="submitting">Warte kurz</span>
          <span v-if="redirecting">Geht gleich weiter bei Paypal</span>
          <br/>
          <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>

      <div v-if="failed">Das hat leider nicht geklappt</div>
  </div>
</template>

<style lang="scss">
.waiting-message-with-spinner {
    text-align: center;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {Store} from '@/model/Store'
import {CouponOption} from '@/model/CouponOption';

@Component
export default class CouponForm extends Vue {
    @Prop() private store!: Store;
    @Prop() private coupon!: CouponOption;

    public firstName = '';
    public lastName = '';
    public email = '';
    public couponText = '';

    private submitting = false;
    private redirecting = false;
    private failed = false;

    post() {
        this.submitting = true;
        this.failed = false;
        this.axios.post('/stores/' + this.store.id + '/orderCoupon/' + this.coupon.id, {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            couponText: this.couponText
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
