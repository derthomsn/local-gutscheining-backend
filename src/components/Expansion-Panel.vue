<template>
    <div class="expansion-panel-wrapper" v-bind:class="{'active': isActive, 'primary': color === 'primary', 'accent': color === 'accent'}">
        <div class="expansion-title" v-on:click="toggle()">
            <md-ripple>
                <slot name="title">
                </slot>
                <md-icon class="expansion-indicator">expand_more</md-icon>
            </md-ripple>
        </div>
        <div class="expansion-content" ref="expansionContent">
            <slot name="content">
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
    .expansion-panel-wrapper {
        margin-left: -$spacing-l;
        margin-right: -$spacing-l;
        margin-bottom: $spacing-l;

        .expansion-title {
            cursor: pointer;
            font-size: 20px;

            .md-ripple {
                @include flexbox();
                @include justify-content(space-between);
                @include align-items(center);
                padding: $spacing-l;

                .expansion-indicator {
                    display: block;
                    @include rotate(-90);
                    color: $color-font-light;
                    margin: 0;
                    @include transition(transform, $duration-s, $timing-standard);
                }
            }
        }
        .expansion-content {
            overflow: hidden;
            height: 0;
            @include transition(height, $duration-s, $timing-standard);

            & > * {
                padding: $spacing-l;
            }
        }

        &.active {
            .expansion-title {
                cursor: pointer;
                font-size: 20px;

                .md-ripple {
                    @include flexbox();
                    @include justify-content(space-between);
                    @include align-items(center);
                    padding: $spacing-l;

                    .expansion-indicator {
                        @include rotate(0);
                    }
                }
            }
        }

        &.primary {
            background-color: $color-primary;
            color: $color-font-light;

            & .md-icon {
                color: $color-font-light;
            }
        }
    }
</style>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class CouponCard extends Vue {
    @Prop() color!: 'primary' | 'accent';
    isActive = false;

    $refs!: {
        expansionContent: HTMLDivElement;
    }

    // todo: resize handling

    toggle() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.$refs.expansionContent.style.height = this.$refs.expansionContent.scrollHeight + 'px';
        } else {
            this.$refs.expansionContent.style.height = 0 + 'px';
        }
    }
}
</script>
