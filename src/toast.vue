<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span @click="onClickClose" class="close" v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>
<script>

    export default {
        name: 'GuLuToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: Number,
                default: 5,
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',callback:undefined
                        // callback: (toast) => {
                        //     toast.close()
                        // }
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        color: white;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
    }

    .close {
        padding-left: 16px;
    }

    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 14px;
    }
</style>