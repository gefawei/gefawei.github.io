//kissy文档地址是http://docs.kissyui.com/
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo
        Event.on("#nav li","mouseover",function(){
    		DOM.removeClass("#nav li","active");
    		DOM.addClass(this,"active");
    		var a = DOM.attr(this,"qian");
    		DOM.hide("#huhu2 ul");
            DOM.show("."+a);
        });
    });
});