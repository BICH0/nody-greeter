const window_item = document.getElementsByClassName('window_item');
const onload_empty = false;
var mock_message = window.mock_message.split("½");
function getRandom() {
  return (Math.random() * (10 - 5) + 5) * 10;
};

async function load(mode){
  if (mode == "out"){
    for (l=0;l<21;l++){
      background.style.opacity = l*0.05;
      await sleep(25);
    };
  }
  else{
    for (l=20;l>0;l--){
      background.style.opacity = l*0.05;
      await sleep(50);
    };
  };
};

async function terminal_animation(){
  main_window.childNodes[1].textContent = "Terminal~ " + default_user;
  await sleep(500);
  string="Loading Linux"
  for (i=0; i<4; i++){
    clear_console();
    newline(string);
    await sleep(600);
    string = string + ".";
  };
  clear_console();
  for(i=0; i<ascii.length; i++){
    await sleep(100);
    newline(ascii[i]);
  };
  newline("Welcome to " + os + " " + default_user);
  return 0;
};

async function window_popup(){
  window_objs = document.getElementsByClassName('window_item')
  await sleep(300);
  for (i=0; i<window_objs.length; i++){
    window_objs[i].style.transform = '';
    await sleep(300);
  };
  await sleep(90 * window_objs.length);
  return;
};

async function window_setup(){
  for (var i = 0; i < window_n; i++) {
    window_obj = document.createElement('div');
    window_obj.classList = "window window_item";
    header_obj = document.createElement('div');
    header_obj.classList = "header";
    header_obj.textContent = "Terminal~";
    header_obj.style.marginBottom = getComputedStyle(main_window).height.slice(0,-2) - 2 * (parseInt(getComputedStyle(main_window.childNodes[1]).height.slice(0,-2)) + 10) + 'px';
    document.getElementById('wrapper').appendChild(window_obj);
    window_obj.appendChild(header_obj);
    var header_left = 40 + (i * getRandom());
    var header_top = 30 + (i * getRandom());
    window_obj.style.cssText = 'left:' + header_left + 'px; top:' + header_top + 'px;';
    window_obj.style.transform = 'translateY(100vh) scale(0.1)';
    for (j=0;j<mock_message.length;j++){
      window_obj.innerHTML += '\u00a0' + mock_message[j];
    };
  };
  await window_popup();
  console.log('LOADED!');
  startup = "false";
  return "ready";
};
