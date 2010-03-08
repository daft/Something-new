/**
 * This file contains the functionality for the image fader on the home page.
 * 
 * Author: Pexeto
 * http://pexeto.com/
 */


var divArray = new Array();
var navArray = new Array();

var divNumber=0;
var currentImage=0;
var selectedImage=0;

var waitInterval=5000;  //this is the interval between each fade
var fadeSpeed=2000;    //this is the speed of the fade action
var selectFadeSpeed=1000;


var timer=-1;

$(function(){
getAllDivs();
setFader();
setClickHandlers();
setArrowClickHandlers();
timer = window.setInterval("fade()", waitInterval);
setLinks();
});

function setLinks(){
	$(".fadeWrapper").click(function(){
		var link=$(".fadeHolder").eq(currentImage).find("a").attr("href");
		if(link!=null){
			location.href=link;
		}
	});
	
	$(".fadeWrapper").mouseover(function(){
		$(".fadeWrapper").css({cursor:"pointer"});
	});
}

/**
 *	Gets all the divs that have to be shown in the slider and fills them in an array.
 */
function getAllDivs(){

$("#sliderNavigation").append("<ul class=\"navUl\"></ul>");

	//fill the divs in an array
	$(".fadeHolder").each(function(i){
		divArray[i]=$(this);
		divNumber++;
		if(i!=0){
			$(".navUl").append("<li><a href=\"#\"></a></li>");
		}else{
			$(".navUl").append("<li class=\"selected\"><a href=\"#\"></a></li>");
		}
		
		navArray[i]=$("ul.navUl li").eq(i);
	});
}

/**
 *	Makes all the images invisible.
 */
function setFader(){
	for(var i=1; i<divNumber; i++){
		divArray[i].find("img").css({display:"none"});
	}
}

function setClickHandlers(){
	$("ul.navUl li").each(function(i){	
		$(this).click(function(){
			window.clearInterval(timer);
			selectedImage=i;
			fadeSelected();	
			timer = window.setInterval("fade()", waitInterval);
		});		
	});
}

function setArrowClickHandlers(){
	$("#leftArrow").click(function(){
		if(currentImage!=0){
			window.clearInterval(timer);
			selectedImage=currentImage-1;
			fadeSelected();	
			timer = window.setInterval("fade()", waitInterval);
		}
	});
	
	$("#rightArrow").click(function(){
		if(currentImage!=divNumber-1){
			window.clearInterval(timer);
			selectedImage=currentImage+1;
			fadeSelected();	
			timer = window.setInterval("fade()", waitInterval);
		}
	});
}

function fadeSelected(){
	var img=divArray[currentImage].find("img");
	img.fadeOut(selectFadeSpeed);
	
	var navLi=navArray[currentImage];
	navLi.removeClass("selected");
			
	img=divArray[selectedImage].find("img");
	img.fadeIn(selectFadeSpeed);
	
	navLi=navArray[selectedImage];
	navLi.addClass("selected");
	
	currentImage=selectedImage;
}

/**
 *	The whole fading is performed here.
 */
function fade(){
	var img=divArray[currentImage].find("img");
	img.fadeOut(fadeSpeed);
	
	var navLi=navArray[currentImage];
	navLi.removeClass("selected");
	
	if(currentImage<divNumber-1){
		img=divArray[currentImage+1].find("img");
		navLi=navArray[currentImage+1];
		currentImage++;
	}else{
		img=divArray[0].find("img");
		navLi=navArray[0];
		currentImage=0;
	}
		
	img.fadeIn(fadeSpeed);
	navLi.addClass("selected");
}
