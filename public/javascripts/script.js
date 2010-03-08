/**
 * This is the main JS file. It initializes some plugins and contains the functionality
 * for the send email form.
 * 
 * Author: Pexeto
 * http://pexeto.com/
 */

var searchClicked=false;

var nullNameError="Please insert your name";
var nullEmailError="Please insert your email";
var nullQuestionError="Please insert your question";
var invalidEmailError="Please insert a valid email address";

var urlToPhp = "http://yourdomain/sendEmail.php";

var valid=true;

$(function(){

$('ul.sf-menu').superfish();

	//setSearchInputClickHandler();
	validateSendEmailForm();
	checkIfOpera();
});

/**
 *	Removes the text in the search text box when clicked on it.
 */
function setSearchInputClickHandler(){
	$("#searchInput").click(function(){
		if(searchClicked==false){
			this.value='';
			searchClicked=true;
		}
	});
}

/**
 *	Validates the send email form.
 */
function validateSendEmailForm(){
    $("#sendButton").click(function(){
		
		//clear previous messages
		$("#nameError").text("");
		$("#emailError").text("");  
		$("#questionError").text("");  
		valid=true;  
		
		//verify whether the name text box is empty
		if(document.getElementById("nameTextBox").value=="" || document.getElementById("nameTextBox").value==null){
			$("#nameError").text(nullNameError);
			valid=false;
		}
		
		//verify whether the question text area is empty
		if(document.getElementById("questionTextArea").value=="" || document.getElementById("questionTextArea").value==null){
			$("#questionError").text(nullQuestionError);
			valid=false;
		}
		
		//verify whether the inserted email address is valid
		var reg = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
		var email = document.getElementById("emailTextBox").value;
		if(!(email.indexOf(".") > 2) || !(email.indexOf("@") > 0)) {
			$("#emailError").text(invalidEmailError); 
			valid=false;
		}
		
		//verify whether the email text box is empty
		if(document.getElementById("emailTextBox").value=="" || document.getElementById("emailTextBox").value==null){
			$("#emailError").text(nullEmailError);
			valid=false;
		}
		
		var name=document.getElementById("nameTextBox").value;
		var question=document.getElementById("questionTextArea").value;

		//if the inserted data is valid, then sumbit the form
		if(valid==true){
			urlToPhp="sendEmail.php";
			
			var dataString = 'name='+ name + '&question=' + question + '&email=' + email;  

			$.ajax({  
				type: "POST",  
				url: urlToPhp,  
				data: dataString,  
				success: function() {  
				$("label#message").html("<span class=\"message\">Your message has been sent!<br/><br/></span>");
				$("#submitForm").each(function(){
					this.reset();
				});
				}
			}); 
		}
    });
}

/**
 *	Positions the dropdown children of the menu.
 */
function positionUlChildren(){
	$("#menu ul li").each(function(i){
		var childUl=$(this).find("ul");
		var left=$(this).find("a").offset().left-$("#menu").offset().left;
		childUl.css({left:left});
		
		
		childUl.hover(function(){
			$(this).parent("li").find("a").addClass("selected");
		},function(){
			$(this).parent("li").find("a").removeClass("selected");
		});
	});
	
}

function checkIfOpera(){
	if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
		$(".sf-menu a").css({display:"block"});
		$(".sf-menu li").css({"float":"left", top:"-10px"});
		$(".sf-menu").css({marginLeft:"80px"});
		$(".sf-menu li ul").css({top:"32px", paddingTop:"10px"});
		$("#menu ul li ul li ul").css({top:"0px"});
	}
}

