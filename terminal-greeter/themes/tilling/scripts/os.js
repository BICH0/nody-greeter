class os_script{
  constructor(){
    this.name="os";
  }
  start(term){
    var container=document.createElement('div');
    container.style.fontSize = "0.8rem";
    container.style.lineHeight = "1.2";
    container.classList = "script-container"
    term.appendChild(container)
    for (let t=0; t<ascii.length; t++){
      var line=document.createElement('span');
      var br=document.createElement('br');
      line.innerHTML=ascii[t];
      container.appendChild(line);
      container.appendChild(br);
    };
    container.removeChild(container.lastChild);
  };
};
window.os_pl = new os_script();
plugin_scripts.push(os_pl);
