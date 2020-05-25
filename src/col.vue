<template>
    <div :class="colClass" :style="colStyle" class="col">
        <div style="background: deepskyblue;line-height: 80px;
        text-align:center;height:80px;
margin-top: 10px">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
                return valid
            }
            return false
        })
    }
    export default {
        name: 'GuLu-col',
        props: {
            span: {type: [Number, String]},
            offset: {type: [Number, String]},
            phone: {type: Object, validator,},
            iPad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods: {
            createClasses(obj, str = '') {
                if (!obj) {
                    return []
                }
                let array = []
                if (obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if (obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone, iPad, narrowPc, pc, widePc,} = this
                let {createClasses} = this
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(iPad, 'iPad-'),
                    ...createClasses(narrowPc, 'narrowPc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'widePc-')
                ]
                // return [span && `col-${span}`,
                //     offset && `offset-${offset}`,
                //     ...(phone?`col-phone-${phone.span}`:[]),
                //     ...(iPad ? `col-iPad-${ipad.span}` : []),
                //     ...(narrowPc ? `col-narrow-pc-${narrowPc.span}` : []),
                //     ...(pc ? `col-pc-${pc.span}` : []),
                //     ...(widePc ? `col-wide-pc-${widePc.span}` : [])
                // ]
            },
            colStyle() {
                return {
                    paddingRight: this.gutter / 2 + 'px',
                    paddingLeft: this.gutter / 2 + 'px'
                }
            }

        },
        // created() {
        //     console.log('col created')
        // },
        // mounted() {
        //     console.log('col mounted')
        // }
    }
</script>
<style lang="scss" scoped>
    .col {
        /*background-color: grey;*/
        /*height: 56px;*/
        width: 100%;
        /*border: 1px solid red;*/

        $class: col-;

        // loops through 100 times
        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%
            }
        }
        $class: offset-;

        // loops through 100 times
        @for $n from 1 through 24 {
            // for each $col_#{i}
            &.#{$class}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
        @media (min-width: 576px) {
            $class: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%
                }
            }
            $class: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media (min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%
                }
            }
            $class: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media (min-width: 993px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%
                }
            }
            $class: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media (min-width: 1200px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%
                }
            }
            $class: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%
                }
            }
        }
    }
</style>