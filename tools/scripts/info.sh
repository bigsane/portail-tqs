#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`

getStatus()
{
    STATUS=$(docker ps -f name="$1" --format "{{.Status}}" -a)
    [[ $STATUS =~ "Up" ]] && echo "${green}[disponible]${reset}" && return
    [[ -z "$STATUS" ]] && echo "${red}[inexistant]${reset}" && return
    echo "${yellow}[indisponible]${reset}"
}

getPort()
{
    port=$(docker ps -f name="$1" --format "{{.Ports}}" -a)
    status=$(docker ps -f name="$1" --format "{{.Status}}" -a)
    [[ $status =~ "Up" ]] && echo "$port" && return
    [[ -z "$STATUS" ]] && echo ".NOTFOUND" && return    
}

getExternalPort()
{
    port=$(docker ps -f name="$1" --format "{{.Ports}}" -a | sed -n 's/.*0.0.0.0:\([0-9]*\).*/\1/p')
    status=$(docker ps -f name="$1" --format "{{.Status}}" -a)
    [[ $status =~ "Up" ]] && echo ":$port" && return
    [[ -z "$STATUS" ]] && echo ".NOTFOUND" && return    
}

echo ""
echo "TQS"
echo ""
echo "client -> https://tqs-client.local.tqs - $(getStatus tqs-client)"
echo ""
echo "ghaHvaD tlhap nuv DaneHlaH :) "
echo ""
