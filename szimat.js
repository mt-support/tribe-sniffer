// ==UserScript==
// @name         Tribe Sniffer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tec.local/*
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    var msg="";
    //bodyClasses
    var bodyClasses = document.getElementsByTagName('body')[0].className;
    var res = bodyClasses.split(" ");
    var scripts = document.getElementsByTagName('script');
    var links = document.getElementsByTagName('link');
    var prods = ['WordPress','TEC', 'ECP','Filter Bar','ET','ET+','WooCommerce'];
    var csss = ['dashicons-css','tribe-events-calendar-style-css','tribe-events-calendar-pro-style-css','tribe-filterbar-styles-css','event-tickets-tickets-css-css','event-tickets-plus-tickets-css-css','woocommerce-general-css'];
    var i,sorc;

    for ( i=0; i < links.length; i++) {
        //msg+="\n"+scripts[j].innerHTML;
        sorc = links[i].getAttribute("href");
        if( sorc != null ) {
            if (sorc.search('autoptimize')>0){
                console.log(sorc.substr(sorc.indexOf("=")+1));
                msg+="AUTOPTIMIZE FOUND!";
                msg+="\n------------------\n";
                break;
            }
        }
    }

    for (i=0; i < res.length; i++) {
        if(res[i].startsWith("theme-")) {
            msg+= "Theme: " + res[i].substr(6);
        }
    }

    for(i=0;i<csss.length;i++) {
        var x=document.getElementById(csss[i]);
        if(x != null) x= x.getAttribute("href");
        msg+="\n"+prods[i]+" version: "
        if(x!=null){
            msg+= x.substr(x.indexOf("=")+1);
        }
        else{
            msg +='not found';
        }
    }


    /*    if( tec != null) {
            msg+="\nTEC version: "+tec.substr(tec.indexOf("=")+1);
        }
        if( pro != null) {
            msg+="\nTEC version: "+pro.substr(pro.indexOf("=")+1);
        }
    */
    /*
        for (i=0; i < scripts.length; i++) {
            //msg+="\n"+scripts[j].innerHTML;
            var sorc = scripts[i].getAttribute("src");
            if( sorc != null ) {
                if (sorc.search('views/breakpoints')>0){
                    console.log(sorc.substr(sorc.indexOf("=")+1));
                    msg+="\nTEC version: "+sorc.substr(sorc.indexOf("=")+1);
                }
            }
        }
    */


    alert(msg);

})();