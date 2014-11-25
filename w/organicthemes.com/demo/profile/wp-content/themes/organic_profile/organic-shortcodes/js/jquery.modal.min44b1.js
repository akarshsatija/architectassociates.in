/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.5.1
*/
(function(a){var c=null;a.modal=function(b,f){var e,d;this.$body=a("body");this.options=a.extend({},a.modal.defaults,f);if(b.is("a"))if(d=b.attr("href"),/^#/.test(d)){this.$elm=a(d);if(1!==this.$elm.length)return null;this.open()}else this.$elm=a("<div>"),this.$body.append(this.$elm),e=function(a,b){b.elm.remove()},this.showSpinner(),b.trigger(a.modal.AJAX_SEND),a.get(d).done(function(d){c&&(b.trigger(a.modal.AJAX_SUCCESS),c.$elm.empty().append(d).on(a.modal.CLOSE,e),c.hideSpinner(),c.open(),b.trigger(a.modal.AJAX_COMPLETE))}).fail(function(){b.trigger(a.modal.AJAX_FAIL);
c.hideSpinner();b.trigger(a.modal.AJAX_COMPLETE)});else this.$elm=b,this.open()};a.modal.prototype={constructor:a.modal,open:function(){this.block();this.show();if(this.options.escapeClose)a(document).on("keydown.modal",function(b){27==b.which&&a.modal.close()});this.options.clickClose&&this.blocker.click(a.modal.close)},close:function(){this.unblock();this.hide();a(document).off("keydown.modal")},block:function(){this.$elm.trigger(a.modal.BEFORE_BLOCK,[this._ctx()]);this.blocker=a('<div class="jquery-modal blocker"></div>').css({top:0,
right:0,bottom:0,left:0,width:"100%",height:"100%",position:"fixed",zIndex:this.options.zIndex,background:this.options.overlay,opacity:this.options.opacity});this.$body.append(this.blocker);this.$elm.trigger(a.modal.BLOCK,[this._ctx()])},unblock:function(){this.blocker.remove()},show:function(){this.$elm.trigger(a.modal.BEFORE_OPEN,[this._ctx()]);this.options.showClose&&(this.closeButton=a('<a href="#close-modal" rel="modal:close" class="close-modal">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton));
this.$elm.addClass(this.options.modalClass+" current");this.center();this.$elm.show().trigger(a.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(a.modal.BEFORE_CLOSE,[this._ctx()]);this.closeButton&&this.closeButton.remove();this.$elm.removeClass("current").hide();this.$elm.trigger(a.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||a('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),
this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},center:function(){this.$elm.css({position:"fixed",top:"50%",left:"50%",marginTop:-(this.$elm.outerHeight()/2),marginLeft:-(this.$elm.outerWidth()/2),zIndex:this.options.zIndex+1})},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}};a.modal.prototype.resize=a.modal.prototype.center;a.modal.close=function(a){c&&(a&&a.preventDefault(),c.close(),c=null)};a.modal.resize=function(){c&&c.resize()};
a.modal.defaults={overlay:"#000",opacity:0.75,zIndex:1,escapeClose:!0,clickClose:!0,closeText:"Close",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0};a.modal.BEFORE_BLOCK="modal:before-block";a.modal.BLOCK="modal:block";a.modal.BEFORE_OPEN="modal:before-open";a.modal.OPEN="modal:open";a.modal.BEFORE_CLOSE="modal:before-close";a.modal.CLOSE="modal:close";a.modal.AJAX_SEND="modal:ajax:send";a.modal.AJAX_SUCCESS="modal:ajax:success";a.modal.AJAX_FAIL="modal:ajax:fail";a.modal.AJAX_COMPLETE=
"modal:ajax:complete";a.fn.modal=function(b){1===this.length&&(c=new a.modal(this,b));return this};a(document).on("click",'a[rel="modal:close"]',a.modal.close);a(document).on("click",'a[rel="modal:open"]',function(b){b.preventDefault();a(this).modal()})})(jQuery);