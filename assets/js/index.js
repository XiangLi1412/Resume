// 作者: 李智翔  版權所有
// 若要引用部分程式碼請聯絡作者 !!!


// 滑鼠位置 (滑動 and 點擊)
// https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/260025/

function open_FB(){
	window.open("https://www.facebook.com/profile.php?id=100003076867190");
}

function open_IG(){
	window.open("https://www.instagram.com/jordan___1127/?hl=zh-tw");
}

function open_LINE(){
	window.open("https://line.me/ti/p/QtkEydz-J0");
}

var num = 0;

var u1 = document.getElementById("u1");
var u2 = document.getElementById("u2");
var u3 = document.getElementById("u3");
var u4 = document.getElementById("u4");
var cla = document.getElementById("cla");

function show1(){
	num = 1;
	u1.style.display = "block";
	u2.style.display = "none";
	u3.style.display = "none";
	u4.style.display = "none";	
	cla.src = "assets/image/computer.jpg";
	// console.log("1"+u1.style.display);
}

function show2(){
	num = 2;
	u2.style.display = "block";
	u1.style.display = "none";
	u3.style.display = "none";
	u4.style.display = "none";
	cla.src = "assets/image/magic.jpg";
	// console.log("2"+u2.style.display);	
}

function show3(){
	num = 3;
	u3.style.display = "block";
	u1.style.display = "none";
	u2.style.display = "none";
	u4.style.display = "none";
	cla.src = "assets/image/math.jpg";
	// console.log("3"+u3.style.display);	
}

function show4(){
	num = 4;
	u4.style.display = "block";
	u1.style.display = "none";
	u2.style.display = "none";
	u3.style.display = "none";
	cla.src = "assets/image/data.jpg";
	// console.log("4"+u4[0]);	
}

	
window.setInterval(function(){
	if(num == 4) num = 0;
	num++;
	switch(num){
		case 1:
			show1();
			break;
		case 2:
			show2();
			break;
		case 3:
			show3();
			break;
		case 4:
			show4();
			break;
	}
}, 7000);



var scr_h = window.screen.height;
var skil = document.getElementById("skil");
var skil_h = skil.offsetHeight;

// console.log(skil_h);
window.setInterval(function(){
	if(getAbsPoint(skil) + skil_h * 0.72 > 0 && getAbsPoint(skil) < scr_h * 0.85){
		console.log("ok!");
		circle();
		// console.log(circle);
	}else{
		console.log("not ok!");
		goBase();
	}
}, 1000);



var img_id = 1;
window.setInterval(function(){
	if(img_id == 4) img_id = 1;
	else img_id++;
	
	img_id_text = "assets/image/"+img_id+".jpg";
	var me = document.getElementById("me");
	me.src = img_id_text;
}, 1700);


// https://shubo.io/get-bounding-client-rect/
	
function getAbsPoint(obj){
	var x, y;
	var oRect = obj.getBoundingClientRect();
	x = oRect.left;
	y = oRect.top;
	// console.log("x:" + x + ",y:" + y);
	return y;
}


// circle start
// window.onload = function(){
	// circle();
// }

function circle(){
	var percent = [0.87, 0.94, 0.90, 0.88, 0.73, 0.86, 0.90, 0.88]; 

	var right = document.getElementsByClassName('circle-right');
	var left = document.getElementsByClassName('circle-left');
	
	for(var i = 0; i < percent.length; i++){
		// if(percent <= 0.5){
			// right[i].style.transform = `rotate(${percent * 360}deg)`;
		// }else{
			right[i].style.transform = `rotate(180deg)`;
			right[i].style.transition = `opacity 0s step-end 1s, transform 1s linear`;
			right[i].style.opacity = 0;
			left[i].style.transition = `transform ${(percent[i] - 0.5) / 0.5}s linear 1s`;
			left[i].style.transform = `rotate(${percent[i] * 360 - 180}deg)`;
		// }
	}	
}

function goBase(){
	var percent = [0.87, 0.94, 0.90, 0.88, 0.73, 0.86, 0.90, 0.88]; 

	var right = document.getElementsByClassName('circle-right');
	var left = document.getElementsByClassName('circle-left');
	
	for(var i = 0; i < percent.length; i++){
		// if(percent <= 0.5){
			// right[i].style.transform = `rotate(${percent * 360}deg)`;
		// }else{
			right[i].style.transform = `rotate(0deg)`;
			right[i].style.transition = `opacity 0s step-end 1s, transform 1s linear`;
			right[i].style.opacity = 1;
			left[i].style.transition = `transform ${(0.5 - percent[i]) / 0.5}s linear 1s`;
			left[i].style.transform = `rotate(${0}deg)`;
		// }
	}	
}



// var scr_w = window.screen.width;
// var scr_w = window.screen.availWidth;

var n = document.getElementById("n");
var a = n.getBoundingClientRect();

var x = a.x;
var toR = true;
var speed = 25;
window.setInterval(function(){
	var scr_w = document.body.scrollWidth;
	
	if(x <= (scr_w * 0.95 - a.width) && toR){
		x += speed;
		n.style.left = `${x}px`;
		// console.log(scr_w);
		// console.log("x:"+x);
		// console.log(scr_w * 0.94 - a.width);
	}else if(toR == true){
		toR = false;
	}
	
	if(!toR && x >= (scr_w * 0.05)){
		x -= speed;
		n.style.left = `${x}px`;
		// console.log(scr_w);
	}else if(toR == false){
		toR = true;
	}
}, 250);








// 提醒點擊有效果
// var exper = document.getElementById("exper");
// var count = 0;

// exper.addEventListener("mouseover", showNotice);

// function showNotice(){
	// console.log("被滑過");
	// count += 1;
	
	// if(count == 1) alert("區塊-個人經歷 點擊綠色大x主題\n可以看到該年級敘述喔!\n這訊息一共會提醒2次喔!\n這是第1次!");
	// if(count == 2){
		// alert("區塊-個人經歷: 點擊綠色大x主題\n可以看到該年級敘述喔!\n這訊息一共會提醒2次喔!\n這是第2次!");
		// exper.removeEventListener("mouseover", showNotice);
	// }
// }



window.setInterval(function(){
	// var scr_h = window.screen.height;  // 螢幕高度
	var ps = document.getElementById("ps");
	var ps_y = ps.getBoundingClientRect().y;
	var t = document.getElementById("top");
	
	console.log("ps_y"+ps_y);
	
	if(ps_y < 0)  t.style.display = "block";
	else          t.style.display = "none";
	
}, 2000);


// offsetHeight;

// var n = document.getElementById("n");
// var a = n.getBoundingClientRect();

