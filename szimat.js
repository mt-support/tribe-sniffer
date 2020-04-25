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
    var bp=document.getElementsByClassName('tribe-common--breakpoint-xsmall');
    var sc=document.getElementsByClassName('tribe-events-view--shortcode');
    var ed=document.getElementsByClassName('tribe-blocks-editor');
    var sng=document.getElementsByClassName('tribe-events-single');

    var bodyClasses = document.getElementsByTagName('body')[0].className;
    var res = bodyClasses.split(" ");
    var scripts = document.getElementsByTagName('script');
    var links = document.getElementsByTagName('link');
    var prods = ['WordPress','TEC', 'ECP','Filter Bar','ET','ET+','WooCommerce'];
    var csss = ['wp-block-library-css','tribe-events-calendar-style-css','tribe-events-calendar-pro-style-css','tribe-filterbar-styles-css','event-tickets-tickets-css-css','event-tickets-plus-tickets-css-css','woocommerce-general-css'];
    var caching = ['WP-Super-Cache','WP Fastest Cache','W3 Total Cache','Hummingbird','WP Rocket'];
    var prevSib=document.lastChild.previousSibling.nodeValue;
    var lastChi=document.lastChild.nodeValue;
    var i,sorc,cacher='not found',theme="couldn't identify";

    msg = 'Single event view: ';
    if(sng.length>0){
        msg+="YES\nEditor: ";
        if(ed.length>0){
            msg+="Block";
        }
        else{
            msg+="Classic";
        }
    }
    else{
        msg+="NO\nDesign: ";
        if(bp.length>0){
            msg+='V2';
        }
        else{
            msg+='V1';
        }
    }
    msg+="\nShortcode: ";
    if(sc.length>0){
        msg+="YES";
    }
    else{
        msg+="NO";
    }
    msg+='\n------\n';
    for ( i=0; i < links.length; i++) {
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
    msg+="Theme: ";
    for (i=0; i < res.length; i++) {
        if(res[i].startsWith("theme-")) {
            theme= res[i].substr(6);
        }
    }
    msg+=theme;

    for(i=0;i<csss.length;i++) {
        var x=document.getElementById(csss[i]);
        if(x != null) x= x.getAttribute("href");
        msg+="\n"+prods[i]+": "
        if(x!=null){
            msg+= x.substr(x.indexOf("=")+1);
        }
        else{
            msg +='not found';
        }
    }

    msg+='\n------\nCaching:\n';

    if(prevSib!=null){
        for(i=0;i<caching.length;i++){
            if(prevSib.search(caching[i])>0){
                cacher=caching[i];
            }
        }
    }
    if(lastChi!=null) {
        for(i=0;i<caching.length;i++){
            if(prevSib.search(caching[i])>0){
                cacher=caching[i];
            }
        }
    }
    msg+=cacher;
    /*
            if(prevSib.search('WP-Super-Cache')>0){
                msg+='WP Super Cache';
            }

            if(document.lastChild.previousSibling.nodeValue.search('WP Fastest Cache')>0){
                msg+='WP Fastest Cache';
            }
        }
        if(lastChi!=null) {
            if(document.lastChild.nodeValue.search('W3 Total Cache')>0){
                msg+='W3 Total Cache';
            }
            if(document.lastChild.nodeValue.search('W3 Rocket')>0){
                msg+='W3 Total Cache';
            }
            if(document.lastChild.nodeValue.search('Hummingbird')>0){
                msg+='Hummingbird';
            }

        }
    */

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