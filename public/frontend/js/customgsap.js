$(window).on("load",function(){$("#preloader").fadeOut("slow"),new TimelineMax({onComplete:function(){e.play()}}).fromTo(".load-text",2,{opacity:0,y:200},{opacity:1,y:0,delay:1});var e=new TimelineMax({paused:!0});e.from(".home-slider",1,{opacity:0,autoalpha:0,delay:.5},"reveal").from(".slider",1,{opacity:0,autoalpha:0,delay:.1},"reveal").from(".home_copy_page .home-top-left",1,{scale:.8,transformOrigin:"center",opacity:0,autoalpha:0,delay:.1},"reveal").from(".home_copy_page .sldm-toggle",1,{x:-200,opacity:0,autoalpha:0,delay:.1},"reveal").from(".archi-line",1,{x:-200,opacity:0,autoalpha:0,delay:.1},"reveal").from(".search-container",1,{x:-200,opacity:0,autoalpha:0,delay:.1},"reveal").from(".home-action",1,{y:100,opacity:0,autoalpha:0,delay:1.2},"reveal").from(".home-bottom-left",1,{opacity:0,autoalpha:0,delay:1},"reveal").from(".home-bottom-right",1,{opacity:0,autoalpha:0,delay:1},"reveal"),$(".product-fallbackVisual__container").each(function(){(new TimelineMax).from(".product-fallbackVisual__container",1,{opacity:0,autoalpha:0}).to(".product-fallbackVisual__container",2,{opacity:1,ease:Elastic.easeOut.config(1,.3)},"reveal").from(".product-assets",1,{y:100,transformOrigin:"center",opacity:0,autoalpha:0,delay:1},"reveal").from(".product-buyButton",1,{scale:.8,transformOrigin:"center",opacity:0,autoalpha:0,delay:1},"reveal").from(".next-product",1,{y:100,opacity:0,autoalpha:0,delay:1},"reveal").from(".product-title",1,{opacity:0,autoalpha:0,delay:1},"reveal").from(".product-colors ",1,{opacity:0,autoalpha:0,delay:1},"reveal").from(".product-backButton",1,{x:-100,opacity:0,autoalpha:0,delay:1.2},"reveal").from(".product-noticeButton__wrapper",1,{x:100,opacity:0,autoalpha:0,delay:1.2},"reveal")}),$(".guide-step").each(function(){(new TimelineMax).from(".guide-step:first-child",1,{scaleX:0,transformOrigin:"right",autoalpha:0}).to(".guide-step:first-child",1,{scaleX:1,opacity:1,className:"+=active can-hover",ease:Expo.easeOut},"reveal").from(".guide-step:nth-child(2)",1,{scaleX:0,transformOrigin:"right",autoalpha:0},"reveal").to(".guide-step:nth-child(2)",1.2,{scaleX:1,opacity:1,className:"+=active can-hover",ease:Expo.easeOut,delay:4},"reveal").from(".sidebar",1,{opacity:0,autoalpha:0},"reveal").to(".sidebar",1.2,{opacity:1,ease:Expo.easeOut,delay:4},"reveal").from(".btn-floating",1,{y:10,opacity:0},"reveal").to(".btn-floating",1.2,{y:0,opacity:1,ease:Expo.easeOut,delay:5},"reveal")})}),$(document).ready(function(){for(var e=new ScrollMagic.Controller,a=document.getElementsByClassName("story-item"),t=0;t<a.length;t++)new ScrollMagic.Scene({triggerElement:a[t],offset:0,triggerHook:.9}).setClassToggle(a[t],"visible").addTo(e);document.getElementsByClassName("story-text");new ScrollMagic.Scene({triggerElement:".story-text",offset:50,triggerHook:.9}).setClassToggle(".story-text","storyanim").addTo(e);var o=TweenMax.to(".profile-block img",1,{y:-160,ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:".profile-block img",duration:3e3}).setTween(o).addTo(e),document.getElementsByClassName("img-cmp-profile");new ScrollMagic.Scene({triggerElement:".img-cmp-profile",offset:50,triggerHook:.9}).setClassToggle(".img-cmp-profile","imganim").addTo(e);var l=document.getElementsByClassName("profile-item");for(t=0;t<l.length;t++)new ScrollMagic.Scene({triggerElement:l[t],offset:50,triggerHook:.9}).setClassToggle(l[t],"visible").addTo(e);document.getElementsByClassName("profile-text");new ScrollMagic.Scene({triggerElement:".story-text",offset:50,triggerHook:.9}).setClassToggle(".profile-text","storyanim").addTo(e);document.getElementsByClassName("brand-text");new ScrollMagic.Scene({triggerElement:".brand-text",offset:50,triggerHook:.9}).setClassToggle(".brand-text","storyanim").addTo(e),$(".timeline-wrap").each(function(){var a=new TimelineMax,t=$(this).find(".timeline-item-img-wrap");a.to(t,1,{ease:Power0.easeNone});new ScrollMagic.Scene({triggerElement:".timeline-item-img-wrap",triggerHook:"onEnter",duration:3e3,offset:500}).setTween(a).addTo(e)});var r=document.getElementsByClassName("timeline-item-img-wrap");for(t=0;t<r.length;t++)new ScrollMagic.Scene({triggerElement:r[t],offset:50,triggerHook:.9}).setClassToggle(r[t],"timelineAnim").addTo(e)});