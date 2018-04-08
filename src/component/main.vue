<template>
    <div v-if="visible">
        <div class="form-group pull-left mt5" v-if="form">
            共<strong>{{totalNum}}</strong>条记录，
            第<strong>{{currPage}}</strong>/<strong>{{pageNum}}</strong>页
        </div>
        <div :class="{'pull-right':form}">
            <ul class="pagination pagination-sm">
                <li class="previous" :class="previousStatus" @click="previous"><a href="javascript:;">&laquo;</a></li>

                <template v-for="i in pageList.firstStep">
                    <li @click="setPage(i)"><a href="javascript:;">{{i}}</a></li>
                </template>

                <li v-if="pageList.firstDot" class="disabled"><a href="javascript:;">...</a></li>

                <template v-for="i in pageList.secondStep">
                    <li v-if="i===currPage" class="active" @click="setPage(i)"><a href="javascript:;">{{i}}</a></li>
                    <li v-else @click="setPage(i)"><a href="javascript:;">{{i}}</a></li>
                </template>

                <li v-if="pageList.secondDot" class="disabled"><a href="javascript:;">...</a></li>

                <template v-for="i in pageList.thirdStep">
                    <li @click="setPage(i)"><a href="javascript:;">{{i}}</a></li>
                </template>
                <li class="next" :class="nextStatus" @click="next"><a href="javascript:;">&raquo;</a></li>
            </ul>

            <span class="form-inline ml10" v-if="form">
                到第 <input class="form-control input-sm" style="width:60px;" type="number" v-model="jumpTo" min="1"> 页
                <button type="button" class="btn btn-sm btn-primary" @click="jump">确定</button>
            </span>
        </div>
    </div>
</template>

<script>
    const listArr = function(page, totle, len) {
        const arr = [];
        let i;
        let flag = true;
        const cs = parseInt(len / 2);

        if (flag && totle <= len) {
            for (i = 1; i <= totle; i++) {
                arr.push(i);
            }
            flag = false;
        }
        if (flag && page <= len - cs) {
            for (i = 1; i <= len; i++) {
                arr.push(i);
            }
            flag = false;
        }
        if (flag && page + cs >= totle) {
            for (i = totle - len + 1; i <= totle; i++) {
                arr.push(i);
            }
            flag = false;
        }
        if (flag) {
            for (i = page - cs; i <= page + cs; i++) {
                arr.push(i);
            }
        }
        return arr;
    };

    export default {
        name: 'page',
        props: {
            currPage: {
                //当前页
                type: Number,
                default: 1
            },
            pageLen: {
                //每页数量
                type: Number,
                default: 10
            },
            totalNum: {
                //记录总数
                type: Number,
                default: 10000
            },
            form: {
                //是否显示跳转
                type: Boolean,
                default: false
            },
            spage: {
                //页面几页后省略
                type: Number,
                default: 5
            },
            topPage: {
                //省略号前显示页数
                type: Number,
                default: 1
            },
            afterPage: {
                //省略号后显示页数
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                jumpTo: this.currPage
            };
        },
        computed: {
            pageNum() {
                return parseInt(Math.ceil(this.totalNum / this.pageLen));
            },
            visible() {
                //页面是否可见
                return this.pageNum > 0;
            },
            previousStatus() {
                const num = parseInt(this.currPage);

                return num <= 1 ? 'disabled' : '';
            },
            pageList() {
                const pageNum = this.pageNum;
                const spage = this.spage;
                const num = parseInt(this.currPage);
                const arr = listArr(num, pageNum, spage);
                const len = arr.length;
                const firstStep = [];
                const thirdStep = [];
                let showPage;

                if (arr[0] > 1) {
                    showPage = arr[0] <= this.topPage ? arr[0] - 1 : this.topPage;

                    for (let i = 1; i <= showPage; i++) {
                        firstStep.push(i);
                    }
                }
                const firstDot = arr[0] > this.topPage + 1;
                const secondStep = arr;
                const secondDot = arr[len - 1] < pageNum - this.afterPage;

                if (arr[len - 1] < pageNum) {
                    showPage = arr[len - 1] >= pageNum - this.afterPage ? pageNum - arr[len - 1] : this.afterPage;

                    for (let i = pageNum - showPage + 1; i <= pageNum; i++) {
                        thirdStep.push(i);
                    }
                }
                return {
                    firstStep: firstStep,
                    firstDot: firstDot,
                    secondStep: secondStep,
                    secondDot: secondDot,
                    thirdStep: thirdStep
                };
            },
            nextStatus() {
                const num = parseInt(this.currPage);
                const pageNum = this.pageNum;

                return num >= pageNum ? 'disabled' : '';
            }
        },
        methods: {
            jump() {
                let inputNum = parseInt(this.jumpTo);

                if (/^\d+$/.test(inputNum + '')) {
                    if (inputNum > this.pageNum) {
                        inputNum = this.pageNum;
                    }
                    this.$emit('change-page', inputNum);
                } else {
                    this.$emit('change-page', this.currPage);
                }
            },
            previous() {
                if (this.currPage > 1) {
                    this.jumpTo = this.currPage - 1;
                    this.$emit('change-page', this.currPage - 1);
                }
            },
            next() {
                if (this.currPage < this.pageNum) {
                    this.jumpTo = this.currPage + 1;
                    this.$emit('change-page', this.currPage + 1);
                }
            },
            setPage(page) {
                page = parseInt(page);
                if (page > this.pageNum) {
                    page = this.pageNum;
                }
                if (page < 1) {
                    page = 1;
                }
                this.jumpTo = page;
                this.$emit('change-page', page);
            }
        },
        watch: {
            jumpTo(newVal) {
                this.jumpTo = (newVal + '').replace(/(^0|\D)/g, '');
            },
            currPage(newVal) {
                newVal = parseInt(newVal);
                if (newVal > this.pageNum) {
                    newVal = this.pageNum;
                }
                if (newVal < 1) {
                    newVal = 1;
                }
                this.jumpTo = newVal;
            }
        }
    };
</script>
