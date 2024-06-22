//Coded by jSdCool
//Throws the stuff in here
function getPageHead(page){
    let pageHead= '<div class="topbar"><font size=100% color=white><b><center>6460 Minecraft Server Website!</center></b></font>\n'+
    '<table align="center">\n'+
        '<tr>\n'+
            '<td><center><button class="btn-hover color-'+((page=="home")?'6':'5')+'" onclick="gotoIndex()">Home Page</button></center></td>\n'+
            '<td><center><button class="btn-hover color-'+((page=="mods")?'6':'5')+'" onclick="gotoApprovedmods()">Approved Mods</button></center></td>\n'+
            '<td><center><button class="btn-hover color-'+((page=="serverstatus")?'6':'5')+'" onclick="gotoServerstatus()">Server Status</button></center></td>\n'+
        '</tr>\n'+
    '</table>\n'+
    '<center><i><font color=white>This webpage is maintained by jSdCool and SuperTylerMan. Webpage Created by: SuperTylerMan</i></font></center>\n'+
    '</div>\n';
    console.log(page)
    return pageHead
}

window.loadPageHead = function loadPageHead(page){
    document.querySelector('.headBlock').outerHTML = getPageHead(page)
}

window.gotoIndex = function gotoIndex(){
    location.href="https://mcjava.niskyrobotics.club/index.html"
}

window.gotoApprovedmods = function gotoApprovedmods(){
    location.href="https://mcjava.niskyrobotics.club/approvedmods.html"
}

window.gotoServerstatus = function gotoServerstatus(){
    location.href="https://mcjava.niskyrobotics.club/serverstatus.html"
}

//Coded by SuperTylerMan (everything above was done by jSdCool)

window.goto120Approvedmods = function goto120Approvedmods(){
    location.href="https://cc.cbi-games.org/120approvedmods.html"
}