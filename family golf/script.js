var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
	crsr.style.left = dets.x + "px";
	crsr.style.top = dets.y + "px";
	blur.style.left = dets.x - 200 + "px";
	blur.style.top = dets.y - 200 + "px";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
	elem.addEventListener("mouseenter",function(){
		crsr.style.scale = 4
		crsr.style.backgroundColor = "transparent"
		crsr.style.border = "0.1px solid #fff"
	})
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
	elem.addEventListener("mouseleave",function(){
		crsr.style.scale = 1
		crsr.style.backgroundColor = "#95c11e"
		crsr.style.border = "none"
	})
})

// var elemAll = document.querySelectorAll("#page4 .elem")
// elemAll.forEach(function(elem){
// 	elem.addEventListener("mouseenter",function(){
// 		crsr.style.scale = 4
// 		crsr.style.backgroundColor = "transparent"
// 		crsr.style.border = "0.1px solid #fff"
// 	})
// })

// var elemAll = document.querySelectorAll("#page4 .elem")
// elemAll.forEach(function(elem){
// 	elem.addEventListener("mouseleave",function(){
// 		crsr.style.scale = 1
// 		crsr.style.backgroundColor = "#95c11e"
// 		crsr.style.border = "none"
// 	})
// })

gsap.to("#nav",{
	backgroundColor: "#000",
	height:"85px",
	paadingTop:0,
	duration: 0.5,
	scrollTrigger:{
		trigger:"#nav",
		scroller:"body",
		start:"top -10%",
		end:"top -11%",
		scrub: 1
	}
})

gsap.to("#main",{
	backgroundColor: "#000",
	scrollTrigger:{
		trigger:"#main",
		scroller:"body",
		start:"top -40%",
		end:"top -90%",
		scrub: 3
	}
})

gsap.from("#about-us img, #about-us-in",{
	y: 70,
	opacity: 0,
	duration: 1.5,
	scrollTrigger:{
		trigger:"#about-us",
		scroller:"body",
		start:"top 70%",
		end:"top 65%",
		scrub: 1
	}

})

gsap.from(".card",{
	scale: 0.8,
	opacity: 0,
	duration: 1,
	scrollTrigger:{
		trigger:".card",
		scroller:"body",
		start:"top 70%",
		end: "top 65%",
		scrub: 1
	}
})

gsap.from("#colon1",{
	y: -70,
	x: -70,
	scrollTrigger:{
		trigger: "#colon1",
		scroller: "body",
		// markers: true,
		start: "top 55%",
		end: "top 45%",
		scrub: 4
	}
})

gsap.from("#colon2",{
	y: 70,
	x: 70,
	scrollTrigger:{
		trigger: "#colon1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub: 4
	}
})

gsap.to("#page4 h1",{
	y: -25,
	// x: -50,
	scrollTrigger:{
		trigger:"#page4 h1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		// markers: true,
		scrub: 4
	}
})