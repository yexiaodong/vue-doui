import Vue from "vue";


/*
 用 Vue.extend 创建组件的模板（构造函数）
 必须加上default：
*/
let ToastConstructor = Vue.extend(require('./toast.vue').default); 
let instance;

const Toast = function(options={}) {
  //参数设置
  let obj = {
    content: typeof options === 'string' ? options : options.content,
    duration: (options.duration || 3000),
  }
  console.log('测试toast.js',obj)
  //PS:构造方法里的data是组件的data，不是随便起的名字
  instance = new ToastConstructor({data:obj}); // 实例化组件（渲染组件）
  document.body.appendChild(instance.$mount().$el); // 挂载到 body 下
};

export default Toast;
