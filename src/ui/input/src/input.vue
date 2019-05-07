<!-- main.vue -->
<template>
<div class="doInput" v-bind:class="{error:!valid}">
    <label :for="id"><span class="prefix" v-if="required">*</span>{{label}}<span>{{labelSuffix}}</span></label>
    <input :id="id" v-model="currentValue" :type="type" :placeholder="'请输入'+label" @blur="handlerBlur">
    <span class="errorMsg">{{errorMsg}}</span>
</div>
</template>

<script>
export default {
    name: "doInput",
    data() {
        return {
            currentValue: this.value,
            currentType:'text',

            //验证类的数据
            valid: true,
            errorMsg: '',
            errorCode: '',

            //正则
            regexTel: '^(86){0,1}1[3-9]{1}\\d{9}$',
            regexEmail: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
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
        type: {
            validator(value) {
                return ['text', 'password', 'email','tel','number'].indexOf(value) > -1;
            },
            default: 'text'
        },
    },
    methods: {
        validatorInput() {
            if (this.required && this.currentValue == '') {
                this.setError('必填信息不可为空！', 'NOT_NULL');
                return;
            }
            if(this.type == 'tel'){
                let re = new RegExp(this.regexTel);
                if(!re.test(this.currentValue)){
                    this.setError('请输入正确的手机号码！', 'NOT_REGEX_RULE_TEL');
                    return;
                }
            }
            if(this.type == 'email'){
                let re = new RegExp(this.regexEmail);
                if(!re.test(this.currentValue)){
                    this.setError('请输入正确的邮箱！', 'NOT_REGEX_RULE_EMAIL');
                    return;
                }
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
        handlerBlur() {
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
        type(val){

        }
    },
    mounted() {

    },
};
</script>

<style lang="scss">
.doInput {
    &.error {
        //color:red;
        border-bottom: 1px solid red;

        .errorMsg {
            display: block;
        }

        input::-webkit-input-placeholder {
            color: red
        }
    }

    label {
        font-size: 1rem;

        .prefix {
            color: red;

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
        &:-internal-autofill-selected{
            background-color: transparent !important;
        }
    }

    .errorMsg {
        display: none;
        margin-bottom: 10px;
        font-size: 0.75rem;
        color: red;
        text-indent: 0.75rem;

    }
}
</style>
