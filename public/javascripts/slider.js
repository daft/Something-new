/**
 * This is the script which executes the functionality of the accordion slider.
 * 
 * Author: Pexeto
 * http://pexeto.com/
 */

var divArray = new Array();
var bgArray=new Array();



var divNumber=0;
var imagePadding=0;
var animationSpeed=500;  //this is the speed of the animation
var waitInterval=5000;   //this is the interval between each animation (5000 = 5sec.)

var currentImage=-1;
var previousImage=0;



//*********Please change these settings if you have made some changes in the HTML or CSS files!************

var imageWidth=700;   //this is the width of a single image
var holderWidth=932;

var timer=-1;

$(function(){
getAllDivs();

if(divNumber>0){
	positionImages();
	setImageHolderHandlers();
	timer = window.setInterval("startSlideshow()", waitInterval);
}
});



/**
 *	Gets all the divs that have to be shown in the slider and fills them in an array.
 */

function getAllDivs(){

	//fill the big image divs in an array
	$(".imageHolder").each(function(i){
		divArray[i]=$(this);
		bgArray[i]=$(this).find("div.black");
		$(this).css({zIndex:i});
		divNumber++;
	});
}

function wait(){
	window.clearInterval(timer);
	timer=window.setInterval("moveLeft()", waitInterval);
}

function startSlideshow(){
setCurrentImage();
	showSelected();
}



function setCurrentImage(){

if(currentImage===divNumber-1){
		currentImage=0;
		previousImage=divNumber-1;
	}else{
		if(currentImage!=-1){
			previousImage=currentImage;
		}else{
			previousImage=0;
		}
		currentImage++;
	}
}

function positionImages(){

	var width=holderWidth/divNumber;

	for(var i=0; i<divNumber; i++){
		leftPosition=i*width;
		divArray[i].css({left:leftPosition});
	}

}

function setImageHolderHandlers(){

	$(".imageHolder").each(function(i){	
		$(this).click(function(){

			if(currentImage!=-1){
				previousImage=currentImage;
			}else{
				previousImage=0;
			}
			currentImage=i;

			window.clearInterval(timer);
			showSelected();
			timer = window.setInterval("startSlideshow()", waitInterval);

			});

	});

	$(".imageHolder").each(function(i){

	$(this).hover(function(){
			if(i!=currentImage){
				$(this).css({cursor:"pointer"});
				bgArray[i].css({zIndex:"-30"});
				}
			}, function(){

			if(i!=currentImage){

			bgArray[i].css({zIndex:"30"});

			}
		});
	});
}





function showSelected(){

	bgArray[previousImage].css({zIndex:"30"});

	divArray[previousImage].find(".imgInfo").animate({bottom:"-150px"});
			
	var width=(holderWidth-imageWidth)/(divNumber-1);

	for(var j=0; j<divNumber; j++){
		if(j<=currentImage){
			var leftPosition=j*width;
			divArray[j].animate({left:leftPosition}, animationSpeed);
			if(j==currentImage){
				bgArray[currentImage].css({zIndex:"-30"});
				divArray[currentImage].find(".imgInfo").animate({bottom:"0px"},1000);
			}
		}else{
			var leftPosition=j*width+imageWidth-width;
			divArray[j].animate({left:leftPosition}, animationSpeed);
		}	
	}		
}



