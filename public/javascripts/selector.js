/**
 * This is the portfolio category selector. By defined portfolio categories when clicking
 * on a specified category, shows only the items that belong to this category.
 * 
 * Author: Pexeto
 * http://pexeto.com/
 */


var imgArray = new Array();
var imgNumber=0;

var imgWidth=270;
var imgHeight=170;

var timer;

$(function(){
getAllDivs();
setHover();
if(imgNumber>0){
	setSelector();
}

$("#portfolioCategories span:first").css({fontWeight:"bold"});

setInfo();

});

/**
 *	Gets all the divs that have to be shown in the slider and fills them in an array.
 */
function getAllDivs(){
	//fill the divs in an array
	$("#portfolio img").each(function(i){
		imgArray[i]=$(this);
		imgNumber++;
	});
	
}

function setHover(){
	$("#portfolioCategories span").mouseover(function(){
		$(this).css({cursor:"pointer"});
	});
}

function setSelected(span){
	$("#portfolioCategories span").each(function(){
		$(this).css({fontWeight:"normal"});
	});
	
	span.css({fontWeight:"bold"});
}

function setSelector(){
	$("#portfolioCategories span").click(function(){	
		var rel=$(this).attr("class");
		setSelected($(this));

		if(rel=="all"){
			for(var i=0; i<imgNumber; i++){
				var img=imgArray[i];
				img.parent("a").parent("div").css({display:"block"});
			}
		}else{
			for(var i=0; i<imgNumber; i++){
				var img=imgArray[i];			
				img.parent("a").parent("div").css({display:"none"});

				$("#portfolio a img."+rel).parent("a").parent("div").css({display:"block"});
			}
		}
		
	});

}

function setInfo(){
	$("#portfolio div.portfolioItem").hover(function(){
		var info=$(this).find("div.portfolioItemInfo");	
		info.stop().animate({bottom:"5px"}, 500);
	},
	function(){
		var info=$(this).find("div.portfolioItemInfo");
		info.stop().animate({bottom:"-100px"}, 500);
	});
}