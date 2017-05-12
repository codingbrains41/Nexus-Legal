angular.module('app.controllers', [])

.controller('HomePageCtrl', ['$scope', '$stateParams','$state','$ionicLoading','getPost','Cat_list',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$stateParams,$state,$ionicLoading,getPost,Cat_list) {
	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	});

	// $state.reload();

	// if($state.params.homeReload==1){
		
	// 	Cat_list.cat_list().then(function(data){
	// 		var ret=JSON.parse(data);
	// 		$scope.cat=ret.result;
	// 	})

	// 	getPost.get_post().then().then(function(data){
	// 		$ionicLoading.hide();
	// 		var ret=JSON.parse(data);
	// 		$scope.listdata=ret.result;
	// 	})
	// 	$scope.fullDesc=function(index,id){
	// 		$state.go('tabsController.detail',{val_index:id});
	// 	}
	// }
	// else{
	// 	alert("hi");
	// }
	

	// $scope.category="-Select-";

	// $scope.show_category=function(category){
	// 	$ionicLoading.show({
	// 		content: 'Loading',
	// 		animation: 'fade-in',
	// 		showBackdrop: true,
	// 		maxWidth: 200,
	// 		showDelay: 0
	// 	});
	// 	if(category==$scope.category){
	// 		getPost.get_post().then().then(function(data){
	// 			$ionicLoading.hide();
	// 			var ret=JSON.parse(data);
	// 			$scope.listdata=ret.result;
	// 		})
	// 		$scope.fullDesc=function(index,id){
	// 			$state.go('tabsController.detail',{val_index:id});
	// 		}
	// 	}
	// 	else{
	// 		getPost.get_post(category).then().then(function(data){
	// 			$ionicLoading.hide();
	// 			var ret1=JSON.parse(data);
	// 			$scope.listdata=ret1.result;
	// 		})
	// 		$scope.fullDesc=function(index,id){
	// 			$state.go('tabsController.detail',{val_index:id});
	// 		}

	// 	}
	// }

}])

.controller('detailCtrl', ['$scope','$rootScope', '$stateParams','$state','$ionicLoading','getPost_Byid','$cordovaSocialSharing','getPost', function($scope,$rootScope,$stateParams,$state,$ionicLoading,getPost_Byid,$cordovaSocialSharing,getPost){
	//alert($state.params.val_index);

	console.log("Name in rootscope ",$rootScope.index1);
	var index=0;
	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	});

	var category=	localStorage.getItem('Category');
	getPost.get_post(category).then().then(function(data){
		$ionicLoading.hide();
		var ret1=JSON.parse(data);
		if(ret1.flag=="unsuccess"){
			alert("No data found");
		}
		else{
			var list_id=[];
			var id=[];
			

			for (var i = 0; i < ret1.result.length; i++) {
					//$scope.listdata_swipe=ret1.result[i].id;
					
					//$state.go('tabsController.detail',{val_index:ret1.result[i].id});
					list_id.push(ret1.result[i].id);
					
				}
				
				
				for (var i = 0; i < list_id.length; i++) {
					//	console.log(i);
					id.push(i);
				}
				
				
				$scope.left_swipe=function(){
					
					
					if($rootScope.index1==id.length-1){
						$rootScope.index1=0;
					//alert("No data found");
					//$state.go('tabsController.detail',{val_index:list_id[index]});
				}
				else{
					$rootScope.index1++;
					$state.go('tabsController.detail',{val_index:list_id[$rootScope.index1]});
				}
				console.log($rootScope.index1);

			}
			$scope.right_swipe=function(){

				if($rootScope.index1>1){
					$rootScope.index1--;
					//alert("No data found");
					//$state.go('tabsController.detail',{val_index:list_id[index]});
				}
				$state.go('tabsController.detail',{val_index:list_id[$rootScope.index1]});
				console.log($rootScope.index1);

			}



		}

	})

	
	getPost_Byid.get_postid($state.params.val_index).then().then(function(data){
		var ret=JSON.parse(data);
		$ionicLoading.hide();
		$scope.listdata=ret.result[0];
		$scope.socialShare=function(){
			$cordovaSocialSharing
    .share(ret.result[0].discription, 'subject', null,'https://play.google.com/store/apps/details?id=com.nexus.com') // Share via native share sheet
    .then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });
}
})

}])

.controller('aboutPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	

}])

.controller('servicesPageCtrl', ['$scope','$stateParams','$state','$ionicLoading','Email_send','Sub_category','Cat_list','subList_byCat','list_service', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicLoading,Email_send,Sub_category,Cat_list,subList_byCat,list_service) {
	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	});
	$scope.category="Select Category";
	$scope.subcategory="Select SubCategory";
	
	list_service.Service_list().then(function(data){
		$ionicLoading.hide();
		var ret_data=JSON.parse(data);
		$scope.cat=ret_data.result;
	});

	$scope.show_category=function(id){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		subList_byCat.List_byCat(id).then(function(data){
			$ionicLoading.hide();
			//console.log(data.trim());
			var ret_data=JSON.parse(data);

			
			if(ret_data.result==""){
				$scope.sub=true;
			}
			else{
				$scope.sub=false;
				$scope.subcat=ret_data.result;
			}
			
		})
	}

	$scope.submit_data=function(){
		var name=$('#name').val();
		var phone_num=$('#phone_num').val();
		var email=$('#email').val();
		var category=$('#category :selected').text();
		var subcategory=$('#subcategory :selected').text();
		var message=$('#message').val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(name==""){
			alert("Please enter the name");
		}
		else if(phone_num==""){
			alert("Please enter phone number");
		}
		else if(phone_num.length<10 || phone_num.length>10){
			alert("Please enter valid phone number");
		}
		else if(!re.test(email)){
			alert("Please enter valid email id");
		}
		else if(category==""){
			alert("Please select category");
		}
		else if(subcategory==""){
			alert("Please select subcategory");
		}
		else if(message==""){
			alert("Please enter message");
		}
		else{
			Email_send.email(name,phone_num,email,category,subcategory,message).then(function(data){
				alert("Send Successfully");
			});
		}

		

		
	}


}])

.controller('ContactCtrl', ['$scope','$stateParams','$state','$ionicLoading','Email_send', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicLoading,Email_send) {
	$('#name').val("");
	$('#phone_num').val("");
	$('#email').val("");
	$('#message').val("");
	

	$scope.Contact=function(){
		var name=$('#name1').val();
		var phone_num=$('#phone_num1').val();
		var email=$('#email1').val();
		var category="ContactUs";
		var subcategory="ContactUs";
		var message=$('#message1').val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(name==""){
			alert("Please enter the name");
		}
		else if(phone_num==""){
			alert("Please enter phone number");
		}
		else if(phone_num.length<10 || phone_num.length>10){
			alert("Please enter valid phone number");
		}
		else if(!re.test(email)){
			alert("Please enter valid email id");
		}
		else if(message==""){
			alert("Please enter message");
		}
		else{
			Email_send.email(name,phone_num,email,category,subcategory,message).then(function(data){
				alert("Send Successfully");
			});
		}

		

		
	}


}])

.controller('FeedbackCtrl', ['$scope','$stateParams','$state','$ionicLoading','Email_send',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicLoading,Email_send) {
	$('#name').val("");
	$('#phone_num').val("");
	$('#email').val("");
	$('#message').val("");
	$scope.send=function(){
		var name=$('#name2').val();
		var phone_num=$('#phone_num2').val();
		var email=$('#email2').val();
		var category="ContactUs";
		var subcategory="ContactUs";
		var message=$('#message2').val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(name==""){
			alert("Please enter  name");
		}
		else if(phone_num==""){
			alert("Please enter phone number");
		}
		else if(phone_num.length<10 || phone_num.length>10){
			alert("Please enter valid phone number");
		}
		else if(!re.test(email)){
			alert("Please enter valid email id");
		}
		else if(message==""){
			alert("Please enter message");
		}
		else{
			Email_send.email(name,phone_num,email,category,subcategory,message).then(function(data){
				alert("Send Successfully");
			});
		}

		

		
	}


}])

.controller('mainCtrl', ['$scope','$stateParams','$state','$ionicLoading','Cat_list','getPost','$cordovaSocialSharing',
	function($scope, $stateParams,$state,$ionicLoading,Cat_list,getPost,$cordovaSocialSharing){
		$scope.Error=true;
		$scope.latest=false;
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		Cat_list.cat_list().then(function(data){
			var ret=JSON.parse(data);
			$scope.cat=ret.result;
		})

		getPost.get_post().then().then(function(data){
			$ionicLoading.hide();

			var ret=JSON.parse(data);
			$scope.listdata=ret.result;
			$scope.home_img=ret.result[0].filepath;
		})
		$scope.fullDesc=function(index,id){
			$state.go('tabsController.detail',{val_index:id});
		}


		

		$scope.show_category=function(category){

			$scope.Title=category;
			$scope.latest=true;
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0
			});

			localStorage.setItem('Category', category);

			getPost.get_post(category).then().then(function(data){
				$ionicLoading.hide();
				var ret1=JSON.parse(data);
				if(ret1.flag=="unsuccess"){
					$scope.ListVal=true;
					$scope.Error=false;
				}
				else{
					$scope.ListVal=false;
					$scope.Error=true;
					$scope.listdata=ret1.result;
					$scope.home_img=ret1.result[0].filepath;
				}
				
			})
			$scope.fullDesc=function(index,id){
				$state.go('tabsController.detail',{val_index:id});
			}

			
		}
		$scope.home_click=function(){
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0
			});
			$scope.Title="";
			$scope.latest=false;
			Cat_list.cat_list().then(function(data){
				var ret=JSON.parse(data);
				$scope.cat=ret.result;

			})

			getPost.get_post().then().then(function(data){
				$ionicLoading.hide();

				var ret=JSON.parse(data);
				$scope.listdata=ret.result;
			})
			$scope.fullDesc=function(index,id){
				$state.go('tabsController.detail',{val_index:id});
			}
			$state.go('tabsController.home');
		}

		$scope.shareApp=function(){
			$cordovaSocialSharing
    .share('Hi, you can install this app from PlayStore', 'subject', null,'https://play.google.com/store/apps/details?id=com.nexus.com') // Share via native share sheet
    .then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });

}

}])


