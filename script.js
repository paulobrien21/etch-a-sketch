const grid = document.getElementById('container');

for(let i = 0;i<16;i++){
	let block = document.createElement('div');
	block.style.cssText = 'width:20px; height:20px; margin:0;border:1px solid black';
	console.log('in for loop')
	grid.appendChild(block);
}