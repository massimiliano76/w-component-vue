<template>
    <div :changeValue="changeValue">

        <input
            ref="inp"
            class="basic"
            type="text"
            :style="[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!valueTrans && !focused)?0.6:1}]"
            :readonly="!editable"
            :placeholder="placeholder"
            v-model="valueTrans"
            @input="changeFocused(true);changeContent('input')"
            @focus="changeFocused(true)"
            @blur="changeFocused(false);changeContent('blur');"
            @keyup.enter="changeContent('enter')"
        >

    </div>
</template>

<script>
import verifyValue from 'wsemi/src/verifyValue.mjs'

/**
 * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    props: {
        type: {
            type: String,
            default: 'any',
        },
        value: {
            type: [String, Number],
        },
        textAlign: {
            type: String,
            default: 'left',
        },
        placeholder: {
            type: String,
            default: '',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            valueTrans: '',
        }
    },
    mounted: function() {
    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //valueTrans
            vo.valueTrans = vo.value

            return ''
        },

    },
    methods: {

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('update:focused', focused)

            }, 1)

        },

        changeContent: function (evname) {
            //console.log('methods changeContent', evname)

            let vo = this

            //verifyValue
            let r = verifyValue(vo.valueTrans, vo.type)

            //value, errmsg
            let value = r.value
            let errmsg = r.errmsg

            //setTimeout
            setTimeout(() => {

                //save
                vo.valueTrans = value

                //emit
                vo.$emit('input', value, errmsg)

                //emit
                vo.$emit(evname, value, errmsg)

            }, 1)

        },

    },
}
</script>

<style scoped>
.basic {
    transition: all 0.7s;
    outline: none;
}
</style>
