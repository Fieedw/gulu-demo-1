import  Toast from './toast'

export  default {
    install(Vue,options){
        Vue.prototype.$toast =function (message) {
            // alert(message)
            //生成toast 放到body里面
            let Constructor = Vue.extend(Toast)
            let toast =new Constructor()
            toast.$slots.default = message
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}