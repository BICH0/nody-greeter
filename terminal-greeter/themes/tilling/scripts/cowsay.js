if (character == "tux"){
  character="<br>¬¬\\<br>¬¬¬\\<br>¬¬¬¬¬¬¬.--.<br>¬¬¬¬¬¬|o_o¬|<br>¬¬¬¬¬¬|:_/¬|<br>¬¬¬¬¬//¬¬¬\\¬\\<br>¬¬¬¬(|¬¬¬¬¬|¬)<br>¬¬¬/'\\_¬¬¬_/`\\<br>¬¬¬\\___)=(___/".replaceAll("¬","\u00a0");
}
else if (character = "cow"){
  character="<br>¬¬¬¬¬¬¬¬\\¬¬¬^__^<br>¬¬¬¬¬¬¬¬¬\\¬¬(oo)\\_______<br>¬¬¬¬¬¬¬¬¬¬¬¬(__)\\¬¬¬¬¬¬¬)\\/\\<br>¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬||----w¬|<br>¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬||¬¬¬¬¬||".replaceAll("¬","\u00a0");
}
var biggest_line = line = "";
var separator_line = "\u00a0_";
var message = message.replaceAll(" ","\u00a0").split('\\');

class cowsay_script{
  constructor(){
    this.name = "cowsay";
  }
  start(term){
    var container=document.createElement('div');
    for (let i=0; i<message.length; i++){
      if (message[i].length > biggest_line.length ){
        biggest_line = message[i];
      };
    };
    for (let i=0; i<biggest_line.length; i++){
      separator_line = separator_line + "_";
    }
    separator_line = separator_line + "<br>";
    container.innerHTML = separator_line;
    for (let i=0; i<message.length; i++){
      if (message[i].length < biggest_line.length){
        while (message[i].length < biggest_line.length) {
          message[i] = message[i] + "\u00a0";
        };
      };
      if (i == 0){
        line = "/ " + message[i] + " \\<br>";
      }
      else if (i == message.length - 1){
        line = "\\ " + message[i] + " /<br>";
      }
      else{
        line = "| " + message[i] + " |<br>";
      };
      container.innerHTML += line;
    };
    container.innerHTML += separator_line.replaceAll("_", "-").slice(0,-4);
    container.innerHTML += character;
    container.classList = "script-container";
    term.appendChild(container);
  };
}
window.cowsay = new cowsay_script();
plugin_scripts.push(cowsay);
