$(function (){
	$("#navbar-toggler collapsed").blur(function(event){
	var screenWidth = window.innerWidth;
	if (screenWidth < 987){
		$("#navbarSupportedContent").collapse('hide');
	}
});
});