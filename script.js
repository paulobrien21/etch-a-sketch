document.addEventListener('DOMContentLoaded', function() {
	const defaultGridSize = 16;
	setGridSize(defaultGridSize);
  });
  
  function setGridSize(size){
	  const dimension = 320/size;
	  grid.innerHTML = '';
	  for(let i = 0;i<(size*size);i++){
		  let square = document.createElement('div');
		  square.classList.add('square');
		  square.style.height = `${dimension}px`;
		  square.style.width = `${dimension}px`;
		  grid.appendChild(square);
	  }
	  attachEventListeners();
  }
  
  function attachEventListeners() {
	const squares = document.querySelectorAll('.square');
  
	squares.forEach((square) => {
	  square.addEventListener('mouseenter', () => {
		if (colorControl === 0) {
		  square.style.backgroundColor = 'black';
		} else if (colorControl === 1) {
		  square.style.backgroundColor = rgb[Math.floor(Math.random() * rgb.length)];
		}
	  });
	});
  
	reset.addEventListener('click', () => {
	  squares.forEach((square) => {
		square.classList.remove('black');
		square.style.backgroundColor = 'white';
	  });
	});
  }
  
  
  const reset = document.getElementById('reset');
  
  const rgb = ['red','green','blue','yellow','pink','orange','purple'];
  const grid = document.getElementById('container');
  
  let colorControl = 0;
  
  const blackMode = document.getElementById('black')
  const rgbMode = document.getElementById('rgb');
  const gridSmall = document.getElementById('size-16');
  const gridMedium = document.getElementById('size-32');
  const gridLarge = document.getElementById('size-64');
  
  blackMode.addEventListener('click', ()=>{
	  colorControl = 0;
  })
  
  rgbMode.addEventListener('click', ()=>{
	  colorControl = 1;
  })
  
  gridSmall.addEventListener('click', ()=>{
	  setGridSize(16);
  })
  
  gridMedium.addEventListener('click', ()=>{
	  setGridSize(32);
  })
  
  gridLarge.addEventListener('click', ()=>{
	  setGridSize(64);
  })
  
  
  //const squares = document.querySelectorAll('.square');
  
  /*squares.forEach((square)=>{
	  square.addEventListener('mouseenter',()=>{
		  console.log(colorControl);
		  if(colorControl===0){
			  square.style.backgroundColor = 'black';
		  }
		  else if(colorControl===1){
			  square.style.backgroundColor = rgb[Math.floor(Math.random() * rgb.length)];
		  }
	  })
	  
	  reset.addEventListener('click', ()=>{
		  square.classList.remove('black');
		  square.style.backgroundColor = 'white';
		  console.log('reset grid');
	  })
  
  })*/
  
  
  
  
  