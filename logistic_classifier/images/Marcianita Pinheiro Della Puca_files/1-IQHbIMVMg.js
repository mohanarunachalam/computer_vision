/*!CK:558771174!*//*1443564754,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WRTh6"]); }

__d("ComposerTargetType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event",RECOMMENDATION:"recommendation",FUNDRAISER:"fundraiser",EXAMPLE:"example"};},null,{});
__d("ComposerType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INLINE:"inline",ADVANCED:"advanced",NORMAL:"normal"};},null,{});
__d("ComposerWaterfallEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",EMBEDS_ADD:"add_embed",EMBEDS_CANCEL:"cancel_embed",EMBEDS_INTENT:"intent_embed",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_CHANGE_ICON_SEARCH:"change_icon_search_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video"};},null,{});
__d("ReactComposerConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www"};},null,{});
__d('ContextualLayer.react',['ContextualLayer','React','ReactDOM','ReactLayer','Style'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.PropTypes,n=k.createClass({propTypes:{contextRef:m.func,context:function(o,p,q){if(o.context==null==(o.contextRef==null))return new Error('Exactly one of `context` or `contextRef` must be set on `'+(q+'`.'));var r=o[p];if(r!=null){if(typeof r!=='object')return new Error('Invalid `'+p+'` supplied to `'+q+'`, '+'expected a React component.');if(i.isValidElement(r))return new Error('Invalid `'+p+'` supplied to `'+q+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},immutableProps:{modal:null},createLayer:function(o){var p=this._getContextNode(),q={context:p,contextBounds:this.props.contextBounds,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},r=new h(q,o);this._node=o;this._matchContextSize(this.props);if(this.props.contextBounds)r.setContextWithBounds(p,this.props.contextBounds);r.conditionShow(this.props.shown);return r;},receiveProps:function(o,p){this.updateBehaviors(p.behaviors,o.behaviors);var q=this._getContextNode();if(o.contextBounds){this.layer.setContextWithBounds(q,o.contextBounds);}else this.layer.setContext(q);this._matchContextSize(o);this.layer.setPosition(o.position);this.layer.setAlignment(o.alignment);this.layer.setOffsetX(o.offsetX);this.layer.setOffsetY(o.offsetY);this.layer.conditionShow(o.shown);},getDefaultEnabledBehaviors:function(){return h.getDefaultBehaviorsAsObject();},_getContextNode:function(){var o;if(this.props.context){o=j.findDOMNode(this.props.context);}else if(this.props.contextRef)o=j.findDOMNode(this.props.contextRef());return o;},_matchContextSize:function(o){var p=this._node,q=this._getContextNode();if(o.containerWidthMatchContext)l.set(p,'width',q.offsetWidth+'px');if(o.containerHeightMatchContext)l.set(p,'height',q.offsetHeight+'px');}});f.exports=n;},null);
__d('XUIBlock',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k={propTypes:{background:j.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(l){var m=(l.background==='base-wash'?"_4-u5":'')+(l.background==='light-wash'?' '+"_57d8":'')+(l.background==='white'?' '+"_4-u8":'')+(l.background==='highlight'?' '+"_4-u7":'');return m;}};f.exports=k;},null);
__d('XUICard.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUICard',propTypes:i.propTypes,getDefaultProps:function(){return babelHelpers._extends({},i.getDefaultProps(),{background:'white'});},render:function(){var m=k("_4-u2",i.getBackgroundClass(this.props));return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,m)}),this.props.children));}});f.exports=l;},null);
__d('XUICardSection.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUICardSection',propTypes:i.propTypes,getDefaultProps:i.getDefaultProps,render:function(){var m=k("_4-u3",i.getBackgroundClass(this.props));return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,m)}),this.props.children));}});f.exports=l;},null);
__d('AbstractTextFieldMixin.react',['React','ReactDOM','Keys','cx','invariant','joinClasses','cloneWithProps'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={propTypes:{value:o.string,placeholder:o.string,tabIndex:o.string,maxLength:o.number,autoComplete:o.string,onBackspace:o.func,onBackTab:o.func,onBlur:o.func,onChange:o.func,onDownArrow:o.func,onEnter:o.func,onEscape:o.func,onFocus:o.func,onKeyDown:o.func,onLeftArrow:o.func,onNoShiftEnter:o.func,onRightArrow:o.func,onShiftEnter:o.func,onShiftDownArrow:o.func,onShiftUpArrow:o.func,onTab:o.func,onUpArrow:o.func,required:o.bool,type:o.string,autoCapitalize:o.string,autoCorrect:o.string},getInitialState:function(){return {focused:false,value:this.props.defaultValue||''};},getValue:function(){return this.props.value!=null?this.props.value:this.state.value;},onInputKeyDown:function(q){var r=this.props,s=q.keyCode,t=q.shiftKey;if(s===j.BACKSPACE&&!t&&r.onBackspace){r.onBackspace(q);}else if(s===j.TAB&&!t&&r.onTab){r.onTab(q);}else if(s===j.TAB&&t&&r.onBackTab){r.onBackTab(q);}else if(s===j.UP){if(t){if(r.onShiftUpArrow)r.onShiftUpArrowAttempt(q);}else if(r.onUpArrow)r.onUpArrow(q);}else if(s===j.DOWN&&r.onDownArrow){if(t){if(r.onShiftDownArrow)r.onShiftDownArrow(q);}else if(r.onDownArrow)r.onDownArrow(q);}else if(s===j.LEFT&&r.onLeftArrow){r.onLeftArrow(q);}else if(s===j.RIGHT&&r.onRightArrow){r.onRightArrow(q);}else if(s===j.RETURN){if(r.onEnter)r.onEnter(q);if(t){if(r.onShiftEnter)r.onShiftEnter(q);}else if(r.onNoShiftEnter)r.onNoShiftEnter(q);}else if(s===j.ESC&&r.onEscape)r.onEscape(q);if(r.onKeyDown)r.onKeyDown(q);},onInputChange:function(q){if(this.props.onChange)this.props.onChange(q);if(this.props.value==null)this.setState({value:q.target.value});},focusInput:function(){this.getTextFieldDOM().focus();},blurInput:function(){this.getTextFieldDOM().blur();},onInputBlur:function(event){if(this.props.onBlur)this.props.onBlur(event);if(!event.isDefaultPrevented())this.setState({focused:false});},onInputFocus:function(event){if(this.props.onFocus)this.props.onFocus(event);if(!event.isDefaultPrevented())this.setState({focused:true});},getTextFieldDOM:function(){return i.findDOMNode(this.refs[this.getTextFieldRef()]);},getTextFieldRef:function(){return 'textField';},setTextFieldPropsOn:function(q){return n(q,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'data-testid':this.props['data-testid'],required:this.props.required,ref:this.getTextFieldRef(),role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,title:this.props.title,type:this.props.type||q.props.type});},render:function(){var q=m(this.props.className,"_58ak"+(!this.getValue()?' '+"_3ct8":''));!this.renderTextField?l(0):undefined;return (h.createElement('label',{className:q},this.renderTextField()));}};f.exports=p;},null);
__d('AbstractTextInput.react',['AbstractTextFieldMixin.react','React','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'AbstractTextInput',mixins:[h],renderTextField:function(){return this.setTextFieldPropsOn(i.createElement('input',{type:'text',className:"_58al",size:this.props.size,tabIndex:this.props.tabIndex,onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste}));}});f.exports=k;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(n.byClass(r(),aa))return;var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusin',function(event){var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new o(function(oa,pa){i.loadModules(["React","XUIErrorDialogImpl"],function(qa,ra){oa(babelHelpers._extends({React:qa},ra.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},k.get(oa,y));}function fa(oa,pa){k.set(oa,y,pa);}function ga(oa,pa){k.set(oa,y,babelHelpers._extends({},k.get(oa,y),pa));}function ha(oa){k.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.dialog,sa=pa.dialogMessageNode,ta=ea(oa),ua=ta.message;if(ua==null)return;var va=qa.isValidElement(ua);if(ia&&!va)qa.unmountComponentAtNode(sa);if(va){qa.render(ua,sa);}else{!(typeof ua==='string'||u(ua))?t(0):undefined;if(typeof ua==='string')ua=w(ua);l.setContent(sa,ua);}ia=va;ra.setContext(oa).setPosition(ta.position||'right').setAlignment(ta.alignh||(ta.position==='above'||ta.position==='below'?'right':null)).show();h.notify(s(sa));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.dialog,ra=oa.dialogMessageNode;if(!da)return;if(ia){pa.unmountComponentAtNode(ra);ia=false;}qa.hide();da=null;});}function ma(oa){if(l.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;j.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){j.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);
__d('XUIError.react',['React','ReactDOM','XUIError','cx','joinClasses','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o="_1tp7",p=h.createClass({displayName:'ReactXUIError',propTypes:{xuiError:n.any,xuiErrorPosition:n.oneOf(['above','below','left','right']),xuiErrorAlignh:n.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){j.__clearReactError(i.findDOMNode(this));}else j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){j.__clearReactError(i.findDOMNode(this));},render:function(){var q=m(this.props.children);if(this.props.xuiError!=null)q=h.cloneElement(q,{className:l(q.props.className,o)});return q;}});f.exports=p;},null);
__d('XUITextInput.react',['AbstractTextInput.react','React','XUIError.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.createClass({displayName:'XUITextInput',propTypes:babelHelpers._extends({},h.propTypes,j.propTypes),render:function(){var n="_55r1"+(this.props.height=='tall'?' '+"_55r2":''),o=i.createElement(h,babelHelpers._extends({},this.props,{ref:'textInput',className:l(this.props.className,n)}));return (i.createElement(j,this.props,o));},focusInput:function(){this.refs.textInput.focusInput();},blurInput:function(){this.refs.textInput.blurInput();}});f.exports=m;},null);
__d('ComposerXStore',['Arbiter','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};function k(m,n){return 'ComposerX/'+m+'/'+n;}var l={set:function(m,n,o){if(!j[m])j[m]={};j[m][n]=o;h.inform(k(m,n),{},h.BEHAVIOR_STATE);},get:function(m,n){if(j[m])return j[m][n];return null;},getAllForComposer:function(m){return j[m]||{};},waitForComponents:function(m,n,o){h.registerCallback(o,n.map(k.bind(null,m)));}};h.subscribe('page_transition',function(){for(var m in j)if(!i(m))delete j[m];});f.exports=l;},null);
__d('fileSliceName',['UserAgent_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='slice',j;if(j=h.chrome()){if(j<21)i='webkitSlice';}else if(j=h.firefox()){if(j<13)i='mozSlice';}else if(!(j=h.safari()))if(h.webkit())i='webkitSlice';f.exports=i;},null);
__d('fileSlice',['fileSliceName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.File&&b.File.prototype[h];f.exports=i;},null);
__d('VideoUploadFeatureDetector',['UserAgent_DEPRECATED','fileSlice'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={supportsChunking:function(){return typeof i==='function'&&this.supportsXHR();},supportsFullProgress:function(){return !h.firefox();},supportsFileAPI:function(){return 'FileList' in window;},supportsFileReading:function(){return 'FileReader' in window&&'DataView' in window;},supportsXHR:function(){return 'FormData' in window;}};f.exports=j;},null);
__d('ComposerXDragDropUtils',['Arbiter','CSS','DOMQuery','Parent','VideoUploadFeatureDetector','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={handleDragEnterAndLeave:function(p){var q=j.scry(k.byClass(p,"_119"),"._2wr");h.subscribe('dragenter',function(r,s){if(p==s.element)q.forEach(i.hide);});h.subscribe('dragleave',function(r,s){if(p==s.element)q.forEach(i.show);});},filterImages:function(p){var q=l.supportsFileAPI(),r=[];for(var s=0;s<p.length;s++)if(p[s].type.match('image/*')){r.push(p[s]);}else if(q&&p[s].type.match('video/*'))r.push(p[s]);return r;}};f.exports=o;},null);
__d('ComposerXSessionIDs',['DOM','cx','uuid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={getSessionID:function(m){return k[m];},resetSessionID:function(m){k[m]=j();},createSessionIDInput:function(m){return h.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b",value:m});}};f.exports=l;},null);
__d('ShareModeConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message',ONE_CLICK:'oneclick',EVENT:'event',UNKNOWN:'unknown'};f.exports=h;},null);
__d('ComposerXMarauderLogger',['Event','ComposerTargetType','ComposerType','ComposerWaterfallEvent','ComposerXSessionIDs','MarauderLogger','ShareModeConst'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=j.NORMAL,q={logEvent:function(r,s,t){if(!t)t={};var u=o[s],v=l.getSessionID(s);if(!u||!v)return;if(t.logOncePerSession){if(!u.loggedEventTypes[v])u.loggedEventTypes[v]={};if(u.loggedEventTypes[v][r])return;u.loggedEventTypes[v][r]=true;}var w=babelHelpers._extends({},t.extraData,{composer_type:p,composer_version:u.composerVersion,target_type:u.targetType,target_id:u.targetID,ref:u.entryPointRef});if(t.logDetails){w.has_photo=u.hasPhoto;w.has_video=u.hasVideo;w.xy_tag_count=u.numXYTags;w.with_tag_count=u.numWithTags;w.tags_user=u.numUserTags;}m.log(r,'composer',w,undefined,undefined,v);},registerComposer:function(r,s,t,u,v){o[r.id]={targetID:v,targetType:s,entryPointRef:t,composerVersion:u,loggedEventTypes:{},hasPhoto:false,hasVideo:false,numWithTags:0,numXYTags:0,numUserTags:0};},getInstance:function(r){return o[r];},updateHasPhoto:function(r,s){if(!o[r])return;o[r].hasPhoto=s;},updateHasVideo:function(r,s){if(!o[r])return;o[r].hasVideo=s;},updateNumWithTags:function(r,s){if(!o[r])return;o[r].numWithTags=s;},updateNumXYTags:function(r,s){if(!o[r])return;o[r].numXYTags=s;o[r].numWithTags=o[r].numWithTags-s;},updateNumUserTags:function(r,s){if(!o[r])return;o[r].numUserTags=s;},listenForPostEvents:function(r,s){if(!s)return [];return [h.listen(s,'submit',function(){q.logPost(r);}),h.listen(s,'success',function(){q.logPostSuccess(r);}),h.listen(s,'error',function(event){q.logPostFailure(r,{error_info:{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary}});})];},setShareMode:function(r,s){var t=o[r];if(!t)return;switch(s){case n.SELF_POST:t.targetType=i.SELF_USER;break;case n.FRIEND:t.targetType=i.OTHER_USER;break;case n.PAGE:case n.SELF_PAGE:t.targetType=i.PAGE;break;case n.GROUP:t.targetType=i.GROUP;break;default:t.targetType=i.OTHER;}},logEntry:function(r,s){if(typeof s==='string')return;q.logEvent(k.COMPOSER_ENTRY,r,{logOncePerSession:true,extraData:s});},logCompleted:function(r,s){q.logEvent(k.COMPOSER_POST_COMPLETED,r,{extraData:s});},logPost:function(r,s){q.logEvent(k.COMPOSER_POST,r,{extraData:s});},logPostSuccess:function(r,s){q.logEvent(k.COMPOSER_POST_SUCCESS,r,{extraData:s});},logPostFailure:function(r,s){q.logEvent(k.COMPOSER_POST_FAILURE,r,{extraData:s});}};f.exports=q;},null);
__d('Layout.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'Layout',render:function(){var l=[],m=[],n=null;h.Children.forEach(this.props.children,function(p,q){if(!p)return;var r=n!==null,s=h.cloneElement(p,{className:j(p.props.className,r?"_4bl8":''),key:q});if(n===null){if(p.type===k.FillColumn){n=s;}else l.push(s);}else m.push(s);});m.reverse();var o=l.concat(m);if(n)o.push(n);return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,'clearfix')}),o));}});k.Column=h.createClass({displayName:'Column',render:function(){return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,"_4bl7")})));}});k.FillColumn=h.createClass({displayName:'FillColumn',render:function(){return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,"_4bl9")})));}});f.exports=k;},null);
__d('PhotosMimeType',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';if(this instanceof h===false)return new h(i);this.$PhotosMimeType1=i.split('/');}h.prototype.isImage=function(){'use strict';return this.$PhotosMimeType1[0]==='image';};h.prototype.isJpeg=function(){'use strict';return this.isImage()&&(this.$PhotosMimeType1[1]==='jpeg'||this.$PhotosMimeType1[1]==='pjpeg');};f.exports=h;},null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=new RegExp('\u000D\u000A','g'),l='\u000A',m={'text/rtf':1,'text/html':1};function n(p){if(p.kind=='file')return p.getAsFile();}function o(p){'use strict';this.data=p;this.types=p.types?i(p.types):[];}o.prototype.isRichText=function(){'use strict';return this.types.some(function(p){return m[p];});};o.prototype.getText=function(){'use strict';var p;if(this.data.getData)if(!this.types.length){p=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)p=this.data.getData('text/plain');return p?p.replace(k,l):null;};o.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};o.prototype.isLink=function(){'use strict';return this.types.some(function(p){return p.indexOf('url')!=-1||p.indexOf('text/uri-list')!=-1;});};o.prototype.isImage=function(){'use strict';var p=this.types.some(function(t){return t.indexOf('application/x-moz-file')!=-1;});if(p)return true;var q=this.getFiles();for(var r=0;r<q.length;r++){var s=q[r].type;if(!h(s).isImage())return false;}return true;};o.prototype.getCount=function(){'use strict';if(this.data.hasOwnProperty('items')){return this.data.items.length;}else if(this.data.hasOwnProperty('mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};o.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(n).filter(j.thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};o.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=o;},null);
__d('IntlSemiticSimplifiedNumberType',['IntlVariations'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getNumberVariationType:function(j){var k=j%100;return j===2?h.NUMBER_DUAL:k>=3&&k<=10?h.NUMBER_PLURAL:h.NUMBER_SINGULAR;}};f.exports=i;},null);
__d("DragDropFileUpload",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.isSupported=function(){return typeof FileList!=="undefined";};},null);
__d('DocumentDragDrop',['Event','Arbiter','CSS','DOM','DOMQuery','DragDropFileUpload','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={},q=0;function r(){q=0;o(p).forEach(function(w){j.removeClass(w.element,w.className);i.inform('dragleave',{element:w.element});});}var s=null;function t(){s&&clearTimeout(s);s=setTimeout(function(){r();},500);}function u(){if(!m.isSupported())return;h.listen(document,'dragenter',function(w){if(q===0)o(p).forEach(function(x){j.addClass(x.element,x.className);i.inform('dragenter',{element:x.element,event:w});});q++;t();});h.listen(document,'dragleave',function(w){q--;if(q===0)r();t();});h.listen(document,'drop',function(w){r();var x=w.getTarget();if(l.isNodeOfType(w.getTarget(),'input'))if(x.type==='file')return;w.prevent();});h.listen(document,'dragover',h.prevent);document.addEventListener('dragover',t,true);u=n;}var v={init:function(){u();},registerStatusElement:function(w,x){u();p[k.getID(w)]={element:w,className:x};if(q>0)j.addClass(w,x);},removeStatusElement:function(w){var x=k.getID(w),y=p[x];if(y){j.removeClass(y.element,y.className);delete p[x];}}};f.exports=v;},null);
__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();function p(q){this._element=q;this._listeners=new j();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}Object.assign(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!n.isSupported())return this;this._listeners.engage();m.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(i.listen(this._element,'dragenter',this._onDragEnter.bind(this)),i.listen(this._element,'dragleave',this._onDragLeave.bind(this)),i.listen(this._element,'dragover',this._onDragOver.bind(this)),i.listen(this._element,'drop',(function(q){this._dragEnterCount=0;k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}).bind(this)));this._listeners.addSubscriptions(h.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),h.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;m.removeStatusElement(this._statusElem,'fbWantsDragDrop');k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new l(q.dataTransfer);k.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){k.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){k.addClass(this._statusElem,'fbDropReadyPhotos');}else k.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){i.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=r=='move'||r=='linkMove'?'move':'copy';i.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});f.exports=p;},null);
__d('ReactComposerIDGenerator',['ReactComposerConstants','uniqueID'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={getID:function(){return h.ID_PREFIX+i();},isComposerID:function(k){return !!k&&k.startsWith(h.ID_PREFIX);}};f.exports=j;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);
__d('highlight',['Animation','Style'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n){new h(k).from('background',n||'#fff9d7').to('background',m||'#fff').ease(h.ease.both).duration(2000).ondone(function(){i.set(k,'background','');l&&l();}).go();}f.exports=j;},null);
__d('ProfileTypeaheadContainer.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.createClass({displayName:'ProfileTypeaheadContainer',render:function(){return (h.createElement('div',{className:"_1ceo"},this.props.children));}});f.exports=j;},null);
__d('ReactComposerEvents',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={CHANGE:'change',SELECT_ATTACHMENT:'composer/selectAttachment',FOCUS:'composer/focus',MENTION_INPUT_FOCUS:'composer/mentionInputFocused',POST_STARTED:'composer/postStarted',POST_SUCCEEDED:'composer/postSucceeded'};f.exports=h;},null);