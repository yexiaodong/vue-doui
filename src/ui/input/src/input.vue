<!-- main.vue -->
<template>
<div class="doInput" v-bind:class="{error:!valid}">
    <label :for="id"><span class="prefix" v-if="required">*</span>{{label}}<span>{{labelSuffix}}</span></label>
    <input :id="id" v-model="currentValue" type="text" :placeholder="'请输入'+label" @blur="handlerBlur">
    <span class="errorMsg">{{errorMsg}}</span>
</div>
</template>

<script>
export default {
    name: "doInput",
    data() {
        return {
            currentValue: this.value,

            //验证类的数据
            valid: true,
            errorMsg: '',
            errorCode: '',
        }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        label: String,
        labelSuffix: { //后缀
            type: String,
            default: "："
        },
        value: [String, Number], //值
        required: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        validatorInput() {
            if (this.required && this.currentValue == '') {
                this.setError('不能为空', 'NOT_NULL');
                return;
            }
            this.valid = true;
            this.errorMsg = '';
            this.errorCode = '';
        },
        setError(error, code) {
            this.errorMsg = error;
            this.errorCode = code;
            this.valid = false;
        },
        handlerBlur(){
            this.validatorInput();
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            this.validatorInput()
            this.$emit('input', val); //将值给父组件
        },
    },
    mounted() {

    },
};
</script>

<style lang="scss">
.doInput {
    &.error{
        //color:red;
        border-bottom: 1px solid red;
        .errorMsg{
            display: block;
        }
        input::-webkit-input-placeholder{
            color: red
        }
    }
    
    label {
        font-size: 1rem;
        .prefix{
            color:red;

        }
    }

    input {
        padding: 0 10px;
        height: 3.125rem;
        line-height: 3.125rem;
        border: none;
        font-size: 1rem;

        &:focus {
            outline: none;
        }
    }

    .errorMsg{
        display: none;
        margin-bottom:10px;
        font-size: 0.75rem;
        color:red;
        text-indent:0.75rem;

    }
}
</style>
