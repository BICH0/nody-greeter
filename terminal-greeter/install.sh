#!/bin/bash
directory="/usr/share/lightdm-webkit/themes/terminal-greeter"
if [[ $(whoami) != "root" ]]
then
  echo "[ERROR] You have to execute this script as root!"
  exit 1
fi
if [[ -d ${directory} ]] && [[ $(cat ${directory}/index.html | grep author | grep B1ch0)  ]]
then
  echo "[WARN] The theme terminal-greeter already exists."
  echo "Do you want to update it? y/N"
fi
