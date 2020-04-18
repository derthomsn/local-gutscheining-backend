<template>
    <div class="container-fluid">
        <h2>Wähle deinen Händler</h2>

        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-3" v-for="store in stores" :key="store.id">
                <router-link :to="'/store/' + store.id">
                    <md-card md-with-hover>
                        <md-ripple>
                            <md-card-media-cover md-solid>
                                <md-card-media md-ratio="16:9">
                                    <img v-if="store.logo" :src="store.thumbnail" alt="logo" />
                                    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1024px-Andromeda_Galaxy_%28with_h-alpha%29.jpg" alt="Skyscraper">
                                </md-card-media>

                                <md-card-area>
                                    <md-card-header>
                                        <span class="md-title">{{ store.name }}</span>
                                        <span class="md-subhead">Jetzt Gutschein sichern</span>
                                    </md-card-header>
                                </md-card-area>
                            </md-card-media-cover>
                        </md-ripple>
                    </md-card>
                </router-link>
            </div>

            <div v-if="loading" style="text-align: center">
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            </div>

            <div class="col-12" v-if="failed">
                Das Backend ist gerade nicht erreichbar. Bitte versuche es später noch einmal.
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Store} from '@/model/Store'

    @Component
    export default class HelloWorld extends Vue {
        private stores: Store[] = [];
        private failed = false;
        private loading = true;

        constructor() {
            super();
            this.get();
        }

        get() {
            this.axios.get('/stores', {})
                .then(e => {
                    this.stores = e.data as Store[];
                    this.loading = false;
                })
                .catch(e => {
                    console.error(e);
                    this.loading = false;
                    this.failed = true;
                })
        }
    }
</script>

<style scoped>

</style>
