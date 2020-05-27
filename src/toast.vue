<template>
    <div :class="toastClasses" class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line"></div>
        <span @click="onClickClose" class="close" v-if="closeButton">
            {{closeButton.text}}
        </span>
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
                        text: '关闭', callback: undefined
                        // callback: (toast) => {
                        //     toast.close()
                        // }
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false,
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
                }
            }
        },
        created() {
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
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
        },
        updateStyles() {
            this.$nextlick(() => {
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        }
    }


</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        position: fixed;
        display: flex;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        color: white;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;

        .message {
            padding: 8px 0;
        }

        .close {
            padding-left: 16px;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 14px;
        }

        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);

        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

        }

    }
</style>