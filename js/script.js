

(function() {
			var 
				// Obtain a reference to the canvas element
				// using its id.
				htmlCanvas = document.getElementById('c'),
			
			  	// Obtain a graphics context on the
			  	// canvas element for drawing.
			  	context = htmlCanvas.getContext('2d');
 
			// Start listening to resize events and
			// draw canvas.
			initialize();
 
			function initialize() {
				// event listener to
				// call the resizeCanvas() function each time 
				// the window is resized.
				window.addEventListener('resize', resizeCanvas, false);
				
				// Draw canvas for the first time.
				resizeCanvas();
			}
				
			// Display canvas.					
			function redraw() {


// Draw the leftpoly shadow
context.fillStyle = "#666A75";
context.beginPath();
context.moveTo(0, window.innerHeight*0.645);
context.lineTo(window.innerWidth*0.147, window.innerHeight*0.605);
context.lineTo(window.innerWidth*0.147, window.innerHeight);
context.lineTo(0, window.innerHeight);
context.closePath();
context.fill();
// Draw the leftpoly sunside
context.fillStyle = "#D7BF91";
context.beginPath();
context.moveTo(window.innerWidth*0.147, window.innerHeight*0.605);
context.lineTo(window.innerWidth*0.242, window.innerHeight*0.650);
context.lineTo(window.innerWidth*0.242, window.innerHeight);
context.lineTo(window.innerWidth*0.147, window.innerHeight);
context.closePath();
context.fill();

// Draw the midpoly shadow
context.fillStyle = "#666A75";
context.beginPath();
context.moveTo(window.innerWidth*0.407, window.innerHeight*0.872);
context.lineTo(window.innerWidth*0.462, window.innerHeight*0.85);
context.lineTo(window.innerWidth*0.462, window.innerHeight);
context.lineTo(window.innerWidth*0.407, window.innerHeight);
context.closePath();
context.fill();

// Draw the midpoly sunside
context.fillStyle = "#D7BF91";
context.beginPath();
context.moveTo(window.innerWidth*0.462, window.innerHeight*0.85);
context.lineTo(window.innerWidth*0.517, window.innerHeight*0.872);
context.lineTo(window.innerWidth*0.517, window.innerHeight);
context.lineTo(window.innerWidth*0.462, window.innerHeight);
context.closePath();
context.fill();

// Draw the rightpoly shadow
context.fillStyle = "#666A75";
context.beginPath();
context.moveTo(window.innerWidth*0.675, window.innerHeight*0.424);
context.lineTo(window.innerWidth*0.894, window.innerHeight*0.334);
context.lineTo(window.innerWidth*0.894, window.innerHeight);
context.lineTo(window.innerWidth*0.675, window.innerHeight);
context.closePath();
context.fill();

// Draw the rightpoly sunside
context.fillStyle = "#D7BF91";
context.beginPath();
context.moveTo(window.innerWidth*0.894, window.innerHeight*0.334);
context.lineTo(window.innerWidth, window.innerHeight*0.377);
context.lineTo(window.innerWidth, window.innerHeight);
context.lineTo(window.innerWidth*0.894, window.innerHeight);
context.closePath();
context.fill();


			}
		
			// redraw after resize
			function resizeCanvas() {
				htmlCanvas.width = window.innerWidth;
				htmlCanvas.height = window.innerHeight;
				redraw();
			}
		
		})();