/*
* @Introduce:          mock数据统一导出
* @Author:             HongqingCao
* @Date:               2018-06-1 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-06-1 17:37:22
*/
const Mock = require('mockjs');
//import indexdataApi from './data/index'   //这里是通过data里面自己书写json读取
const indexdataApi = require('./index');
const newslist = require('./newslist');
const sliderlist = require('./sliderlist');
const githublist = require('./githublist');
//const indexdataApi = require('./data/index');
Mock.mock(/\/indexdata\/data/,'get',indexdataApi.data)
Mock.mock(/\/newslist\/data/,'get',newslist.data)
Mock.mock(/\/sliderlist\/data/,'get',sliderlist.data)
Mock.mock(/\/githublist\/data/,'get',githublist.data)
 module.exports = {
 	Mock
 }