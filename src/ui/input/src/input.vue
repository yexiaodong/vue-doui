<!-- main.vue -->
<template>
<div class="doInput">
    <label :for="id">{{label}}<span>{{labelSuffix}}</span></label>
    <input :id="id" v-model="currentValue" type="text" :placeholder="'请输入'+label">
</div>
</template>

<script>
export default {
    name: "doInput",
    data() {
        return {
            currentValue: this.value,
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
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },

        currentValue(val) {
            this.$emit('input', val);//将值给父组件
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.doInput {
    label {
        font-size: 1rem;
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
}
</style>
