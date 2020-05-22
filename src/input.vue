<template>
    <div :class="{error}" class="wrapper">
        <input :disabled="disable" :readonly="readOnly" :value="value" type="text">
        <!--        <icon v-if="error" name="setting"></icon>-->
        <!--        <span v-if="error">{{error}}</span>-->
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        components: {Icon},

        name: 'GuLu-input',
        props: {
            value: {
                type: String,
            },
            disable: {
                type: Boolean,
                default: false,
            },
            readOnly: {
                type: Boolean,
                default: false,
            },
            error: {
                type: String,
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        display: inline-block;
        > :not(:last-child) {
            margin-right: .5em
        }

        > input {
            border-radius: 4px;
            padding: 0 8px;
            height: 32px;
            border: 1px solid $border-color;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0px 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readOnly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }

</style>