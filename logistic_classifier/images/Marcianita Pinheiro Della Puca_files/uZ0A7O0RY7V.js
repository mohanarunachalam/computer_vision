/*!CK:1575720515!*//*1443467794,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KgyAR"]); }

__d('legacy:dom-html',['HTML'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.HTML=c('HTML');},3);
__d('FeedErrorDetection',['Banzai','DOM','csx','ge'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=0,m={},n=false,o=false;function p(event,r,s,t){var u={event:event,shouldLogDetail:r,site:'www'};if(r){u.intValues=s;u.normalValues=t;}h.post('feed_error_detection',u,{delay:0});}var q={registerFeedStories:function(r,s){if(r=='substream_0'){l=0;m={};n=false;o=false;}var t=i.scry(k(r),"._5jmm"),u=t.length;if(!u&&!n){if(!o){o=true;return;}if(!l){p('empty_feed_js',s,{},{});}else p('end_of_feed_js',s,s?{stories_count:l}:{},{});n=true;return;}o=false;for(var v=0;v<u;v++){var w=t[v],x=w.getAttribute('data-dedupekey'),y=w.getAttribute('data-ft');if(!x||!y)continue;if(x in m){var z={};if(s)z={dedupKey:x,ft_A:y,ft_B:m[x]};p('duplicate_stories',s,{},{dup_field:z});}else{m[x]=y;l++;}}}};f.exports=q;},null);