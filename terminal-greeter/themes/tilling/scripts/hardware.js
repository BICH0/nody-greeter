const specs=['cpu', 'ram', 'gpu'];
async function ram_animate(){
  const rambar=document.getElementById('rambar');
  const label=document.getElementById('rambar-label');
  while(true){
    var rambar_newwidth = Math.random(0,7) * 20 + "%";
    rambar.style.width = rambar_newwidth;
    label.innerHTML = Math.trunc(rambar_newwidth.slice(0,-1)) * 0.25 + 'GB';
    await sleep(750);
  };
};
class hw_script{
  constructor(){
    this.name="hardware";
  };
  async start(term){
    var container=document.createElement('div');
    container.classList = "script-container";
    container.style.width = "100%";
    term.appendChild(container);
    for (let t=0; t<specs.length; t++){
      var part=document.createElement('div');
      part.classList = "part";
      switch (specs[t]) {
        case 'cpu':
          part.innerHTML = "CPU -----<br>";
          part.style.width = "250px";
          part.style.display = "inline-block";
          container.appendChild(part);
          for (let c=1; c<navigator.hardwareConcurrency + 1; c++){
            var core=document.createElement('div');
            core.style.display = "inline-block";
            core.style.width = "120px";
            if (c.toString().length >= 2){
              name = "Core ";
            }
            else{
              name = "Core&nbsp;&nbsp;";
            }
            core.innerHTML = name + c + ": <span class='color1'>ON</span>"
            part.appendChild(core);
          };
          break;
          case 'ram':
            part.innerHTML = "RAM -----<br>";
            container.appendChild(part);
            var raminfo=document.createElement('div');
            part.appendChild(raminfo);
            var bar=document.createElement('div');
            bar.style.marginRight = "15px";
            bar.style.width = "230px";
            bar.style.height = "1rem";
            bar.style.background = "black";
            raminfo.appendChild(bar);
            var inner = document.createElement('div');
            inner.style.background = "var(--accent)";
            inner.style.height = "1rem";
            inner.id = "rambar";
            bar.appendChild(inner);
            for (let c=0; c<2; c++){
              var label=document.createElement('span');
              label.style.fontSize = "0.95rem";
              if (c==0){
                label.innerHTML= "0GB"
                label.id = "rambar-label";
              }
              else{
                label.innerHTML= "/" + "?GB"
              };
              raminfo.appendChild(label);
            };
          break;
          case 'gpu':
            var canvas = document.createElement("canvas")
            var webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
            var debugInfo = webgl.getExtension("webgl_debug_renderer_info")
            var gpu = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            part.innerHTML = "GPU -----<br>";
            container.appendChild(part);
            var gpuinfo=document.createElement('div');
            gpuinfo.innerHTML=gpu;
            part.appendChild(gpuinfo);
          break;
      };
    };
    await sleep(1);
    ram_animate();
    if (small_window){
    var small_win = document.createElement('div');
    small_win.classList = "small_window";
    small_win.innerHTML = "&nbsp&nbsp;.---------.<br>&nbsp&nbsp|.-------.|<br>&nbsp&nbsp||>run#&nbsp&nbsp||<br>&nbsp&nbsp||&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp||<br>&nbsp&nbsp|&quot-------\&apos;|<br>.-^---------^-.<br>| ---~&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&quot-------------&apos;";
    container.appendChild(small_win);
    }
  };
};
window.hardware = new hw_script();
plugin_scripts.push(hardware);
