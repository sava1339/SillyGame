console.log("Хомяк");
const hamster = document.querySelector(".ham");
const coins = document.querySelector("#coins");
const dubleClick = document.querySelector("#dubleClick");
const autoClick = document.querySelector("#autoClick");

const dubleClickNum = document.querySelector("#dubleClickNum");
const autoClickNum = document.querySelector("#autoClickNum");
let dubClick = 1;
let autoClicks = 0;
setInterval(()=>{
	coins.textContent = +(coins.textContent) + autoClicks;
},1000)
setInterval(()=>{
	localStorage.setItem("coins", +(coins.textContent));
	localStorage.setItem("dub", dubClick );
	localStorage.setItem("aut", autoClicks );
},2000)
hamster.addEventListener("click",()=>{
	coins.textContent = +(coins.textContent) + 1 * dubClick;
	!hamster.classList.contains("active") && hamster.classList.add("active");
	setTimeout(()=>{
		hamster.classList.contains("active") && hamster.classList.remove("active")
	},100)
})
dubleClick.addEventListener("click",()=>{
	if(+(coins.textContent) >= +(dubleClickNum.textContent) ){
		coins.textContent = +(coins.textContent) - +(dubleClickNum.textContent);
		dubClick += 1;
		dubleClickNum.textContent = +(dubleClickNum.textContent) * 2
		!dubleClick.classList.contains("active") && dubleClick.classList.add("active");
		setTimeout(()=>{
			dubleClick.classList.contains("active") && dubleClick.classList.remove("active")
		},100)
	}
})
autoClick.addEventListener("click",()=>{
	if(+(coins.textContent) >= +(autoClickNum.textContent)){
		coins.textContent = +(coins.textContent) - +(autoClickNum.textContent);
		autoClicks += 1;
		autoClickNum.textContent = +(autoClickNum.textContent) * 2
		!autoClick.classList.contains("active") && autoClick.classList.add("active");
		setTimeout(()=>{
			autoClick.classList.contains("active") && autoClick.classList.remove("active")
		},100)
	}
})