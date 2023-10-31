const onload_empty = true;
async function load(mode){
  background.style.zIndex = 1;
  if (mode == 'in'){
    for (l=0; l<20; l++){
      background.style.opacity = Math.random(0,1);
      await sleep(50+(100-l*5));
    }
    background.style.opacity = 1;
    await sleep(600);
    background.style.opacity = 0;
    background.style.zIndex = 2;
    await sleep(100);
    for (l=9; l>0; l--){
      await sleep(20);
      main_window.style.transform = "rotateX(" + l*10 + "deg)";
    };
    return;
  }
  else{
    background.style.zIndex = "1";
    for (l=0; l<10; l++){
      background.style.opacity = Math.random(0,1);
      await sleep(50+(100-l*5));
    };
    background.style.opacity = 0;
    await sleep(300);
    background.style.opacity = 1;
    await sleep(400);
    for (l=1; l<10; l++){
      await sleep(20);
      main_window.style.transform = "rotateX(" + l*10 + "deg)";
    };
    return;
  };
};

async function glow_effect(){
  og_shadow = getComputedStyle(document.documentElement).getPropertyValue('--glow').split(",");
  window_shadow = document.documentElement
  while (true){
    await sleep(250);
    shadow_build = og_shadow[0] + ", " + og_shadow[1] + ", " + og_shadow[2] + ", " + Math.random(0,1) + ")"
    window_shadow.style.setProperty('--glow', shadow_build )
  };
};

async function terminal_animation(){
  main_window.childNodes[1].textContent = "Terminal~ " + default_user;
  if (glow){
    glow_effect();
  }
  return 0;
};

async function window_setup(){
  header_container = document.createElement('div');
  header_container.classList = "header_container";
  main_window.childNodes[1].appendChild(header_container)
  for (l=0; l<3; l++){
    button = document.createElement('div');
    button.classList = "circle";
    if (l == 0){
      button.style.background = "#dece66";
    }else if(l == 1){
      button.style.background = "#66de6b";
    }else{
      button.style.background = "#e04040";
    };
    header_container.appendChild(button);
  }
  console.log('LOADED!');
  startup = 'false';
  return "ready";
}
