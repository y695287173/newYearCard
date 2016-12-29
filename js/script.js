
window.onload = function(){
	console.log("网页可见宽度："+ document.body.clientWidth);
	console.log("网页可见高度："+ document.body.clientHeight);
	console.log("网页可见区域宽度（包括边线宽度）："+ document.body.offsetWidth);
	console.log("网页可见区域高度（包括边线宽度）："+ document.body.offsetHeight);
	console.log("网页正文全文宽："+ document.body.scrollWidth);
	console.log("网页正文全文高："+ document.body.scrollHeight);
	console.log("网页被卷去的高："+ document.body.scrollTop);
	console.log("网页被卷去的左："+ document.body.scrollLeft);
	console.log("网页正文部分的上："+ window.screenTop);
	console.log("网页正文部分的左："+ window.screenLeft);
	console.log("屏幕分辨率的高："+ window.screen.height);
	console.log("屏幕分辨率的宽："+ window.screen.width);
	console.log("屏幕可用工作区高度："+ window.screen.availHeight);
	console.log("屏幕可用工作区宽度："+ window.screen.availWidth);
	//获取元素
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	//当音乐播放完停止的时候，自动停止光盘旋转效果
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	//点击音乐图标，控制音乐播放效果
	//onclick()有300ms的延迟
	// music.onclick = function(){
	// 	if (audio.paused) {
	// 		audio.play();
	// 		this.setAttribute("class","play");
	// 		//android4.4以下 和iPhone6PLUS之前无法停止
	// 		//this.style.animationPlayState = "running";
	// 		//this.style.webkitAnimationPlayState = "running";
	// 	}else{
	// 		audio.pause();
	// 		this.setAttribute("class","");
	// 		//android4.4以下 和iPhone6PLUS之前无法停止
	// 		//this.style.animationPlayState = "paused";
	// 		//this.style.webkitAnimationPlayState = "paused";
	// 	};
	// };

	music.addEventListener("touchstart",function(event){
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		};
	},false);

	//点击翻页效果
	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";

		setTimeout(function(){
			page3.style.display = "block";
			page3.style.top = "100%";
			
		},5495);
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false);
}