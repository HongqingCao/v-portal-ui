
const util = require('../util');//自定义工具模块
var data = util.getJsonFile('./index/index.json');
 console.log(data)
//export default  data
 module.exports = {
 	 data
 }
