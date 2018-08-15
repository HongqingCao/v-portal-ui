var Mock = require('mockjs')
//import Mock from 'mockjs'
var data = Mock.mock({
      "status": 0,
	  "userList|3-4": [{
	    'login': "HongqingCao",
	    'heart|0-3': 1,
	    'id|+1': 1,
	    'avatar_url': "https://avatars0.githubusercontent.com/u/17700419?s=460&v=4",
	    'gravatar_id': "",
	    'url': "https://api.github.com/users/HongqingCao",
	    'html_url': "https://github.com/HongqingCao",
	    'followers_url': "https://api.github.com/users/HongqingCao/followers",
	    'following_url': "https://api.github.com/users/HongqingCao/following{/other_user}",
	    'gists_url': "https://api.github.com/users/HongqingCao/gists{/gist_id}",
	    'starred_url': "https://api.github.com/users/HongqingCao/starred{/owner}{/repo}",
	    'subscriptions_url': "https://api.github.com/users/HongqingCao/subscriptions",
	    'organizations_url': "https://api.github.com/users/HongqingCao/orgs",
	    'repos_url': "https://api.github.com/users/HongqingCao/repos",
	    'events_url': "https://api.github.com/users/HongqingCao/events{/privacy}",
	    'received_events_url': "https://api.github.com/users/HongqingCao/received_events",
	    'type': "User",
	    'site_admin': false
	  }]
})

module.exports = {
 	data 
 }