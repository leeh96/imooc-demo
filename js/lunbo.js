function lunbo(event) {
	// body...
	
	var pic=document.getElementById('lunbo_click');
	var li=pic.getElementsByTagName('li');
	
	for(i=0;i<li.length;i++){
		if(li[i]==event){
			li[i].className="lunbo_foot_s";
		}else{
			li[i].className="lunbo_foot";
		}
	}


}
function movepic(){
		var lunbo=document.getElementById('lunbo'),
			pic=document.getElementById('lunbo_pic');
			if(parseInt(pic.style.left)==-3000){
				pic.style.left=-1000+'px';
			}else {
				pic.style.left =pic.offsetLeft-1000+'px';				
				}
			}
		