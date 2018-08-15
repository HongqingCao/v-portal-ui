var Mock = require('mockjs')
//import Mock from 'mockjs'
var data = Mock.mock({
  "status": 0,
  'newlist|3': [{
    'newstitle': "@ctitle(2, 10)",
    'datalist|2-7': [{
      'title': "@cword(15, 40)",
      'content': "@cparagraph",
      'date': "@date()"
    }]
  }]
})

module.exports = {
 	data 
 }
