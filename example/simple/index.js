/**
 * @author rubyisapm
 */
import Vue from 'vue';
import Page from '../../index.js';
Vue.component(Page.name, Page);
new Vue({
    el: '#page',
    data: {
        currPage: 1,
        pageLen: 20,
        totalNum: 1000,
        form: true
    },
    methods: {
        changePage(page){
            this.currPage = page;
            console.log(page)
        },
        toggle(){
            this.form = !this.form;
        },
        changeCurrPage(){
            this.currPage=this.currPage+1;
        }
    }

});