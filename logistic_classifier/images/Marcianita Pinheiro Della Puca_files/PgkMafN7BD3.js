/*!CK:4273763238!*//*1443047627,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vQmBY"]); }

__d('NotificationJewelReminder',['Arbiter','ContextualDialog','ContextualDialogXUITheme','DOM','Event','ImageBlock.react','LayerFadeOnHide','LayerFadeOnShow','NotificationStore','NotificationUpdates','React','ReactDOM','SubscriptionsHandler','Toggler','$','cx','fbt','intlList'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z=2,aa='fbRequestsJewel',ba='fbNotificationsJewel';function ca(da){'use strict';this.$NotificationJewelReminder1=da;if(da.request.count>0&&da.show_request){this.$NotificationJewelReminder2(aa);}else this.$NotificationJewelReminder3();}ca.prototype.$NotificationJewelReminder3=function(){'use strict';if(!this.$NotificationJewelReminder1.show_notif){return;}else{this.$NotificationJewelReminder4();return;}};ca.prototype.$NotificationJewelReminder4=function(){'use strict';this.$NotificationJewelReminder5=q.subscribe('update-notifications',(function(da,ea){if(ea.nodes)this.$NotificationJewelReminder6(ea.nodes);}).bind(this));p.getNotifications(Number.isInteger(this.$NotificationJewelReminder1.show_notif)?this.$NotificationJewelReminder1.show_notif:0,this.$NotificationJewelReminder6.bind(this));};ca.prototype.$NotificationJewelReminder6=function(da){'use strict';if(this.$NotificationJewelReminder5){this.$NotificationJewelReminder5.unsubscribe();this.$NotificationJewelReminder5=null;}var ea=u.getInstance(v(ba));if(ea&&ea.isShown())return;var fa=[],ga;da=da.filter(function(ma){return ma.seen_state==='UNSEEN_AND_UNREAD';});var ha=Object.keys(da);for(var ia=0;ia<ha.length;ia++){if(!da[ha[ia]].showBeep)continue;var ja=da[ha[ia]].actors;if(ja.length===0)continue;for(var ka=0;ka<ja.length;ka++){ga=ga||ja[ka].profile_picture.uri;if(fa.length<z&&ja[ka].name&&fa.indexOf(ja[ka].name)===-1)fa.push(ja[ka].name);}if(fa.length===z)break;}if(fa.length===0||!ga)return;var la=this.$NotificationJewelReminder7(ga,fa,ha.length,ba);this.$NotificationJewelReminder8(la);};ca.prototype.$NotificationJewelReminder7=function(da,ea,fa,ga){'use strict';var ha=r.createElement('div',{className:"_5bov"},r.createElement(m,null,r.createElement('img',{className:"_5bow",src:da}),r.createElement('div',null,this.$NotificationJewelReminder9(fa,ea,ga)))),ia=k.create('div');s.render(ha,ia);var ja=new i({alignment:'right',contextSelector:'#'+ga+' a.jewelButton',offsetY:-10,position:'below',theme:j,width:210},ia);ja.enableBehaviors([o,n]);return ja;};ca.prototype.$NotificationJewelReminder9=function(da,ea,fa){'use strict';ea=ea.map(function(ga){return r.createElement('b',null,ga);});if(fa===ba){return x._({"*":{"notifications":"{number} notifica\u00e7\u00f5es de {notification senders}","notification":"{number} notifica\u00e7\u00f5es de {notification senders}"}},[x.param('number',da,[0]),x['enum'](da>1?'notifications':'notification',{notifications:'notifications',notification:'notification'}),x.param('notification senders',y(ea))]);}else return x._({"*":{"requests":"{number} solicita\u00e7\u00f5es de amizade de {request senders}","request":"{number} solicita\u00e7\u00e3o de amizade de {request senders}"}},[x.param('number',da,[0]),x['enum'](da>1?'requests':'request',{requests:'requests',request:'request'}),x.param('request senders',y(ea))]);};ca.prototype.$NotificationJewelReminder8=function(da){'use strict';da.show();this.$NotificationJewelReminder10=da;var ea=da.getRoot();this.$NotificationJewelReminder11=setTimeout(this.$NotificationJewelReminder12.bind(this),this.$NotificationJewelReminder1.show_time);this.$NotificationJewelReminder13=new t();this.$NotificationJewelReminder13.addSubscriptions(h.subscribe('layer_shown',(function(fa,ga){if(ga&&ga.type==='Jewel')this.$NotificationJewelReminder12();}).bind(this)),l.listen(ea,'mouseenter',(function(){clearTimeout(this.$NotificationJewelReminder11);}).bind(this)),l.listen(ea,'mouseleave',this.$NotificationJewelReminder12.bind(this)),l.listen(ea,'click',(function(){this.$NotificationJewelReminder12();u.show(v(ba));}).bind(this)));};ca.prototype.$NotificationJewelReminder12=function(){'use strict';clearTimeout(this.$NotificationJewelReminder11);this.$NotificationJewelReminder10.hide();this.$NotificationJewelReminder13.release();};ca.prototype.$NotificationJewelReminder2=function(da){'use strict';if(!this.$NotificationJewelReminder1.show_request||!this.$NotificationJewelReminder1.request.count)return;var ea=u.getInstance(v(da));if(ea&&ea.isShown())return;var fa=this.$NotificationJewelReminder7(this.$NotificationJewelReminder1.request.pics[0],this.$NotificationJewelReminder1.request.names,this.$NotificationJewelReminder1.request.count,da);this.$NotificationJewelReminder14(fa);};ca.prototype.$NotificationJewelReminder14=function(da){'use strict';da.show();this.$NotificationJewelReminder15=da;var ea=da.getRoot();this.$NotificationJewelReminder16=setTimeout(this.$NotificationJewelReminder17.bind(this),this.$NotificationJewelReminder1.show_time);this.$NotificationJewelReminder18=new t();this.$NotificationJewelReminder18.addSubscriptions(h.subscribe('layer_shown',(function(fa,ga){if(ga&&ga.type==='Jewel')this.$NotificationJewelReminder17();}).bind(this)),l.listen(ea,'mouseenter',(function(){clearTimeout(this.$NotificationJewelReminder16);}).bind(this)),l.listen(ea,'mouseleave',this.$NotificationJewelReminder17.bind(this)),l.listen(ea,'click',(function(){this.$NotificationJewelReminder17();u.show(v(aa));}).bind(this)));};ca.prototype.$NotificationJewelReminder17=function(){'use strict';clearTimeout(this.$NotificationJewelReminder16);this.$NotificationJewelReminder15.hide();this.$NotificationJewelReminder18.release();this.$NotificationJewelReminder3();};f.exports=ca;},null);