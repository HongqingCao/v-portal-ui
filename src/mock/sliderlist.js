var Mock = require('mockjs')
//import Mock from 'mockjs'
var data = Mock.mock({
   "status": 0,
   "list": {
    'datalist|3-5': [{
      'title': "@cword(5, 20)",
      'src': "http://pic2.ooopic.com/dreamstime/video/39/43/77/39437741.jpg",
      'url': "@url()"
    }]
  }
})

module.exports = {
 	data 
 }
