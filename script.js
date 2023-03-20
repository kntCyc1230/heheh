console.log("amongus");

let conf = "";
let txtbox = document.querySelector('.txtbox');
let cbtn = document.querySelector('#btn');
let dababy = document.querySelector('.fuc');
let dababy2 = document.querySelector('#dicc');




cbtn.disabled = true;
cbtn.addEventListener("click", topgay)

function confirm(){
	conf = txtbox.value;
	if ( conf == "i am gay"){
	cbtn.disabled = false;
	cbtn.setAttribute("onmouseover", "gayfuck()");
	}else{
	
	cbtn.disabled = true;
	cbtn.setAttribute("onmouseout", "idk()");
	
	}
}

function gayfuck(){
	cbtn.style.background = "#fff";
	cbtn.style.color = "#000";
	
	

}

function idk(){
	cbtn.style.background = "transparent";
	cbtn.style.color = "#fff";
	
	
	

}

function topgay(){
	dababy.style.display = "none";
	dababy2.style.display = "grid";
	dababy2.style.opacity = "100%"
}