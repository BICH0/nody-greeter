const plugin_scripts = [];
const onload_empty = true;
async function load_scripts(){
  for (i=0;i<screen_plugins.length;i++){
    var script = document.createElement("script");
    script.src = "themes/tilling/scripts/" + screen_plugins[i] + ".js";
    document.head.appendChild(script);
  };
  return;
};

async function addon_screen(){
  let wrapper_height =  Math.trunc(getComputedStyle(document.getElementById('wrapper')).height.slice(0,-2));
  let border_height = getComputedStyle(main_window).borderTopWidth.slice(0,-2);
  window_container = document.createElement('div');
  window_container.classList = 'window_container';
  wrapper.appendChild(window_container);
  if (! collapse){
    main_window.style.marginRight = tilling_margin;
    window_size = wrapper_height/screen_plugins.length - (2 * border_height) - (((screen_plugins.length - 1) * 20)/screen_plugins.length);
  }
  else{
    window_size = wrapper_height/screen_plugins.length - ((2 * border_height) * (screen_plugins.length - 1));
    main_window.style.borderRightWidth = "0px";
  };
  for (let l=0; l<screen_plugins.length; l++){
    window_item = document.createElement('div');
    window_item.classList = 'window';
    if (l == screen_plugins.length - 1){
      window_item.style.height = Math.round(window_size - border_height) + 'px';
      window_item.style.borderBottomWidth = "3px";
    }
    else{
      if (! collapse){
        window_item.style.marginBottom = tilling_margin;
      }
      else{
        window_item.style.borderBottomWidth = "0px";
      };
      window_item.style.height = Math.round(window_size) + 'px';
    }
    window_container.appendChild(window_item);
    await sleep(1);
    plugin_scripts.find(obj => obj.name == screen_plugins[l]).start(window_item);
    if (headers){
      header_item = document.createElement('div');
      header_item.classList = "header";
      header_item.innerHTML = "Terminal~";
      window_item.prepend(header_item);
    };
  };
  main_window.style.height = window_container.offsetHeight - (getComputedStyle(main_window).paddingTop.slice(0,-2)* 2) - (border_height * 2) - 3 + "px";
};

async function load(mode){
  if (mode == 'in'){
    await load_scripts();
    await sleep(1);
    if (headers){
      main_window.childNodes[1].innerHTML = "Terminal~ " + default_user;
    }
    else{
      main_window.childNodes[1].remove();
    };
    await sleep(1);
    background.style.transform = "translateY(-100vh)";
    addon_screen();
    main_window.style.transform = "translateY(0vh)";
    window_container.style.transform = "translateY(0vh)";
  }
  else{
    background.style.transform = "translateY(0vh)";
  };
  cli.style.width = getComputedStyle(main_window).width.slice(0,-2) - getComputedStyle(prompt).width.slice(0,-2) - 20 + 'px';
};

function terminal_animation(){
  //animation for the terminal window/s
};

async function window_setup(){
  //executed when window is fully loaded
  startup = 'false';
  return "ready";
}
