<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1 class="colored"><strong>#localgutschein</strong>ing</h1>
                    <p>
                        Sharing is caring!<br />
                        Sag’s deinen Freunden und
                        hilf anderen zu helfen!
                    </p>

                    <div class="socials">
                        <a href="https://www.instagram.com/localgutscheining/">
                            <md-button class="md-icon-button">
                                <img src="instagram.png" alt="instagram"/>
                            </md-button>
                        </a>

                        <a href="mailto:localgutscheining@wunschloesung.com">
                            <md-button class="md-icon-button">
                                <md-icon style="color:rgb(0, 185, 255)">alternate_email</md-icon>
                            </md-button>
                        </a>
                    </div>
                </div>

                <div class="col-4">
                    <img src="toShare_breit.png" alt="share"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SharingIsCaring extends Vue {
}

</script>
