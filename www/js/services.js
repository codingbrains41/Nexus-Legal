angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('getPost',  function(){
	this.get_post=function(categories){
		var post_arg={"categories":categories};
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/categorylist.php',
			type: 'post',
			data:post_arg,
		});
	}
	
})

.service('getPost_Byid',  function(){
	this.get_postid=function(id){
		var post_arg={"id":id};
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/category.php',
			type: 'post',
			data:post_arg,
		});
	}
	
})

.service('Cat_list',  function(){
	this.cat_list=function(){
		var post_arg={"to":localStorage.getItem('device_token')};
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/listing.php',
			type: 'post',
			data: post_arg

		});
	}
	
})

.service('list_service',  function(){
	this.Service_list=function(){
		
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/list_service.php',
			type: 'post',
			
		});
	}
	
})

.service('Sub_category',  function(){
	this.subcategory=function(){
		
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/subcategories.php',
			type: 'post',
			
		});
	}
	
})

.service('Email_send',  function(){
	this.email=function(name,ph_num,email,Category,sub_category,Message){
		var post_arg={"Name":name,"Phone_No":ph_num,"Email_id":email,"Category":Category,"sub_category":sub_category,"Message":Message};
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/email.php',
			type: 'post',
			data:post_arg,
		});
	}
	
})

.service('subList_byCat',  function(){
	this.List_byCat=function(name){
		var post_arg={"name":name};
		return	$.ajax({
			url: 'http://app.nexuslegalassociates.com/dhaval/cat_sub_cat.php',
			type: 'post',
			data:post_arg,
		});
	}
	
})