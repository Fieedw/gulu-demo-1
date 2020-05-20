<template>
    <!--    {[iconPosition]:true}-->
    <button :class="{[`icon-${iconPosition}`]:true}" class="g-button">
        <g-icon :name="icon" v-if="icon"></g-icon>
        <div class="content">
        <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        // props: ['icon', 'iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
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
            order: 1;margin-right: .1em;

        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2; margin-right:0; margin-left: .1em;
            }

            > .content {
                order: 1;
            }
        }
    }
</style>