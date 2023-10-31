const chars = "012346789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const font_size = 13;
class matrix_script{
  constructor(){
    this.name = "matrix";
  };
  start(term){
    var container=document.createElement('canvas');
    container.classList = "script-container";
    container.style.padding = "0px";
    container.height = term.offsetHeight;
    container.width = term.offsetWidth + 20;
    console.log(term.offsetWidth)
    term.appendChild(container);
    var ctx = container.getContext('2d');
    var cols = container.width/font_size;
    var drops = [];
    for(let x = 0; x < cols; x++){
      drops[x] = 1;
    }
    function draw()
    {
    	ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    	ctx.fillRect(0, 0, container.width, container.height);
    	ctx.fillStyle = getComputedStyle(html).getPropertyValue('--accent')
"#00f0ff";
    	ctx.font = font_size + "px monospace";
    	for(var i = 0; i < drops.length; i++)
    	{
    		var text = chars[Math.floor(Math.random()*chars.length)];
    		ctx.fillText(text, i*font_size, drops[i]*font_size);
    		if(drops[i]*font_size > container.height && Math.random()>0.975){
          drops[i]=0;
        }
    		drops[i]++;
    	}
    }
    setInterval(draw, 35);
  };
};
window.matrix = new matrix_script();
plugin_scripts.push(matrix);
