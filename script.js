/* Scripts for Favorite Musician */

$(document).ready(function(){

let imgCycle= 1;

	$(".cycle").click(function(){
		
		if (imgCycle <6) {
			$(this).attr("src","assets/"+imgCycle+".jpg");
			imgCycle++;
		} else {
			$(this).attr("src","assets/"+imgCycle+".jpg");
			imgCycle=1;
		}
	});

})