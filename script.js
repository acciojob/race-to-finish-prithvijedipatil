window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function randomtime(max,min){
	return Math.floor(Math.random()*(max-min+1)+min);
}

funtion generatepromise(time){
	return new Promise((resolve)=>{
		setTimeOut(()=>{
			resolve(`Promise resolved after ${time} seconds`)
		},time*1000);
	});
}

 let promises = [];

for(let i=0;i<5;i++){
	let randomtime1 = randomtime(5,1);
	promises.push(generatepromise(randomtime1));
}

Promise.any((promises).then((data)=>{
	document.getElementById("output").innerText =data;
}).catch((error)=>{
	console.log(error);
});
















