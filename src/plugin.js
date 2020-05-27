import  Toast from './toast'

export  default {
    install(Vue,options){
        Vue.prototype.$toast =function (message,toastOptions) {
            // alert(message)
            //生成toast 放到body里面
            let Constructor = Vue.extend(Toast)
            let toast =new Constructor({
                    propsData:toastOptions
// propsData:{closeButton:toastOptions.closeButton}
                }
            )
            toast.$slots.default = message
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}