//kissy文档地址是http://docs.kissyui.com/
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo
        Event.on("#shuzi li","mouseover",function(){
        	DOM.removeClass("#shuzi li","jihuo");
          	DOM.addClass(this,"jihuo");
			var a = DOM.attr(this,"data");
			DOM.hide("#sui a");
            DOM.show(".zhong_nei_m_j"+a);
        });
        Event.on("#love li","mouseover",function(){
        	DOM.removeClass("#love li","active");
          	DOM.addClass(this,"active");


        });
    });
});