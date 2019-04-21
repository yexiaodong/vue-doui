<template>
<div class="DoFile">
    <ul>
        <li v-for="(file,index) in files" :key="file.Id">
            <span class="close" @click="remove(file,index)">X</span>
            <!--
            <img :src="global.BASE_API + file.FilePath">
            -->
        </li>
        <li class="fileinput-button">
            <span>+</span>
            <input class="file" type="file" name="file" accept="image/*" multiple @change='uploadAll($event)'>
        </li>
    </ul>

    <!--
        <span class="file-name"  ng-repeat="x in files">{{x.FileName}} <span ng-click="deleteFile($index)" class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
        <span class="file-name"  ng-if="files.length == 0">未选择任何文件</span>
        -->
</div>
</template>

<script>
//import api from '@/api/file.js'
//import { Toast } from 'mint-ui';

export default {
    name: 'DoFile',
    components: {},
    data() {
        return {
            guid: this.getGUID(),
            files: [],
        }
    },
    methods: {
        getGUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        uploadAll(event) {
            for (let i in event.target.files) {
                this.upload(event.target.files[i]);
            }
        },
        async upload(file) {
            /*
            let obj = {
                id: this.guid,
                file: file,
            }
            let data = await api.uploadFile(obj);
            if (!(data == 0 || data == 1)) {
                this.files.push(data);
            }
            */
        },
        async remove(file,index){
            /*
            let data = await api.deleteFileById(file.Id);
            console.log('移除',file.Id)
            if(data == 1){
                this.files.splice(index,1);
            }
            else{
                Toast('删除失败，请联系管理员');
            }
            */
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.DoFile {
    /* 九宫格 */
    ul {
        display: flex;
        padding:0px;
        flex-wrap: wrap;

        li {
            position: relative;
            flex: 0 0 33.3333%;
            height: 100px;
            text-align: center;
            //border-right: 1px solid #ccc;
            //border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            overflow: hidden;

            &:last-child{
                border:1px solid #ccc;
            }

            img {
                display: block;
                margin: 0 auto;
                width: auto;
                height: 100px;
            }
            .close{
                position:absolute;
                top:5px;
                right: 5px;;
                padding:3px;
                color:#fff;
                background: red;
                border-radius: 50%;
                font-size: 12px;
            }
        }
    }

    /* 上传按钮 */
    .fileinput-button {
        position: relative;
        display: flex;
        overflow: hidden;
        color: #ccc;
        font-size: 58px;
        //align-self: stretch;
        span{
            display: block;
            width: 100%;
            height: 100px;
            line-height: 90px;
        }

        input {
            position: absolute;
            left: 0px;
            top: 0px;
            padding:0px;
            height: 200px;
            opacity: 0;
            -ms-filter: 'alpha(opacity=0)';
            border: none;
            background-color: transparent;
            box-shadow: none;
            
        }
    }

}
</style>
