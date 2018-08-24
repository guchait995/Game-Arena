
$(function all(){
	var $games=$('#games');
	var $pcgames=$('#PC');
	var $mac=$('#mac');
	var $iphonegames=$('#iphone');
	var $ipad=$('#ipad');
	var $xbox=$('#xbox');
	var $playstation=$('#playstation');
	var $linux=$('#linux');
	var count=0;
	$.ajax({
		type: 'GET',
		url: 'http://starlord.hackerearth.com/gamesext',
		success: function(games){
			$.each(games,function(i,game){
				var ratsrc=null;
				if(game.editors_choice=="Y"){
				ratsrc="Images/if_--09_1720773.png";
				}else{
					ratsrc="Images/transparent.png";
				}
				if(game.platform=="PC"){
					$pcgames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="Macintosh"){
					$mac.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Play")==0){
					$playstation.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Xbox")==0){
					$xbox.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPhone"){
					$iphonegames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}
				else if(game.platform=="Lynx"){
					$linux.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPad"){
					$ipad.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}
				
				else{
				
				$games.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
			}
				
			});
			
		}
		
	});
});

$('#search').on('input',function(e){
	var query=$("#search").val();
	var $games=$('#games');
	var $pcgames=$('#PC');
	var $mac=$('#mac');
	var $iphonegames=$('#iphone');
	var $ipad=$('#ipad');
	var $xbox=$('#xbox');
	var $playstation=$('#playstation');
	var $linux=$('#linux');
	$games.empty();$pcgames.empty();$mac.empty();$iphonegames.empty();$ipad.empty();$xbox.empty();$playstation.empty();
	$linux.empty();
	$.ajax({
		type: 'GET',
		url: 'http://starlord.hackerearth.com/gamesext',
		success: function(games){
			$.each(games,function(i,game){
				var ratsrc=null;
				if(game.editors_choice=="Y"){
				ratsrc="Images/if_--09_1720773.png";
				}else{
					ratsrc="Images/transparent.png";
				}
				if(game.title.indexOf(query)==0){
				if(game.platform=="PC"){
					$pcgames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="Macintosh"){
					$mac.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Play")==0){
					$playstation.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Xbox")==0){
					$xbox.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPhone"){
					$iphonegames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}
				else if(game.platform=="Lynx"){
					$linux.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPad"){
					$ipad.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else{
				$games.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
					
				}
				}
			});
			
		}
		
	});
	
});

$(function(){
	var $menu=$('#pop-menu-id');
	$.ajax({
		type: 'GET',
		url: 'http://starlord.hackerearth.com/gamesext',
		success: function(games){
			$.each(games,function(i,game){
				var exists=$('#pop-menu-id li:contains('+game.genre+')').length;// see if element(s) exists that matches by checking length

				if( !exists){
					// code when search doesn't exist
					//alert(exists);
					$menu.append('<li>'+game.genre+'</li>');
				}
			});
			
		}
		
	});
});

$('#grid-icon').click(function(){
	var cards=document.getElementsByClassName("card");
	//alert("Clci");'
	var befwidth=cards[0].style.width;
	if(befwidth==("25%")){
	for(var i=0;i<cards.length;i++){
	cards[i].style.width="40%";	
	}
		$('#grid-icon').attr('src','Images/if_Grid_1031514.png');
	}else{
	for(var i=0;i<cards.length;i++){
	cards[i].style.width="25%";	
	}
		$('#grid-icon').attr('src','Images/if_editor-grid-view-block-outline-stroke_763350.png');
	}
	
});
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('pop-menu-id');
ul.onclick = function(event) {
    var target = getEventTarget(event);
	var sel_genre=target.innerHTML;
	var $games=$('#games');
	var $pcgames=$('#PC');
	var $mac=$('#mac');
	var $iphonegames=$('#iphone');
	var $ipad=$('#ipad');
	var $xbox=$('#xbox');
	var $playstation=$('#playstation');
	var $linux=$('#linux');
	$games.empty();$pcgames.empty();$mac.empty();$iphonegames.empty();$ipad.empty();$xbox.empty();$playstation.empty();
	$linux.empty();
	$.ajax({
		type: 'GET',
		url: 'http://starlord.hackerearth.com/gamesext',
		success: function(games){
			$.each(games,function(i,game){
				var ratsrc=null;
				if(game.editors_choice=="Y"){
				ratsrc="Images/if_--09_1720773.png";
				}else{
					ratsrc="Images/transparent.png";
				}
				//alert(sel_genre);
				if(game.genre==(sel_genre) || (sel_genre=="All Games")){
				if(game.platform=="PC"){
					$pcgames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="Macintosh"){
					$mac.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Play")==0){
					$playstation.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform.indexOf("Xbox")==0){
					$xbox.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPhone"){
					$iphonegames.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}
				else if(game.platform=="Lynx"){
					$linux.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else if(game.platform=="iPad"){
					$ipad.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
				}else{
				$games.append('<div class="card">'+
							  '<table><td>'+
							  '<img src="Images/if_steam_1542805.png" class="gameicon">'+
							  '<img src="'+ratsrc+'" class="editor">'+
							  '<span class="title">'+game.title+'</span>'+
							  '<div class="platform">'+game.platform+'</div>'+
							  '</td></table>'+
							  '<table><td>'+
							  '<span class="genre">Genre : '+game.genre+'</span>'+
							  '<span class="score">'+game.score+'</span>'+
							  '</td></table>'+
							  '</div>');
					
				}	
				}
			});
			
		}
		
	});
	
	
};


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function HideCat(n){
	if(n==0){
		if($('#PC').is(":visible")){
			 $('#PC').hide();
			$("#icon0").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#PC').show();
			$("#icon0").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==1){
		if($('#xbox').is(":visible")){
			 $('#xbox').hide();$("#icon1").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#xbox').show();$("#icon1").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==2){
		if($('#playstation').is(":visible")){
			 $('#playstation').hide();$("#icon2").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#playstation').show();$("#icon2").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==3){
		if($('#mac').is(":visible")){
			 $('#mac').hide();$("#icon3").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#mac').show();$("#icon3").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==4){
		if($('#linux').is(":visible")){
			 $('#linux').hide();$("#icon4").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#linux').show();$("#icon4").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==5){
		if($('#iphone').is(":visible")){
			 $('#iphone').hide();$("#icon5").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#iphone').show();$("#icon5").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==6){
		if($('#ipad').is(":visible")){
			 $('#ipad').hide();$("#icon6").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#ipad').show();$("#icon6").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}if(n==7){
		if($('#games').is(":visible")){
			 $('#games').hide();$("#icon7").attr("src","Images/if_Eye_view_views_enable_watch_1886932.png");
		}else{
			 $('#games').show();$("#icon7").attr("src","Images/if_Eye_see_unview_hide_optical_blind_invisible_1886933.png");
		}
		  
		
	}
	
}