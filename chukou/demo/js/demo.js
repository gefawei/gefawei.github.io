//kissy文档地址是http://docs.kissyui.com/
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo
        Event.on("#shuzi li","mouseover",function(){
        	DOM.removeClass("#shuzi li","active");
       		DOM.addClass(this,"active");
			var a = DOM.attr(this,"hu");
        	DOM.hide("#sui a");
        	DOM.show(".jdt"+a);
        });
    });
});