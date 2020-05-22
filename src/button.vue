<template>
    <!--    {[iconPosition]:true}-->
</template>
<template>
    <button :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')" class="g-button">
        <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
        <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    // import Vue from 'vue'
    import Icon from './icon'
    // Vue.component('g-icon',Icon)
    export default {
        components: {
            'g-icon':Icon
        },
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            loading: {
                "type": Boolean,
                "default": false,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    if (value !== 'left' && value !== 'right') {
                        return false
                    } else {
                        return true
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-background);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //内联元素对齐
        &:hover {
            border-color: var(--border-color-hover)
        }

        &:active {
            background-color: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .1em;

        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }

            > .content {
                order: 1;
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg)
            }
            100% {
                transform: rotate(85deg)
            }
        }

        .loading {
            animation: spin 1ms linear infinite;
        }
    }
</style>