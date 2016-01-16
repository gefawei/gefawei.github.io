//kissy文档地址是http://docs.kissyui.com/
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo
        Event.on("#sui li","mouseover",function(){
        	DOM.removeClass("#sui li","active");
          	DOM.addClass(this,"active");
          	var a=DOM.attr(this,"a");
          	DOM.hide("#four ul");
            DOM.show("."+a);
        });
        Event.on("#wenzi li","mouseover",function(){
            DOM.removeClass("#wenzi li","active");
            DOM.addClass(this,"active");
            var a=DOM.attr(this,"data-attr");
            DOM.hide("#pian a");
            DOM.show("."+a);
        });
        Event.on("#abc li","mouseover",function(){
            DOM.removeClass("#abc li", "active");
            DOM.addClass(this,"active");
            var a=DOM.attr(this,"data-attr");
            DOM.hide("#abcd ul");
            DOM.show("."+a);
        });
        Event.on("#yuan li","mouseover",function(){
            var a=DOM.attr(this,"data-attr");
            DOM.hide("#huhu a");
            DOM.show("."+a);
        });
        Event.on("#yuan1 li","mouseover",function(){
            var a=DOM.attr(this,"data-attr");
            DOM.hide("#huhu1 a");
            DOM.show("."+a);
        });
        Event.on("#yuan3 li","mouseover",function(){
            var a=DOM.attr(this,"data-attr");
            DOM.hide("#huhu3 a");
            DOM.show("."+a);
        });
    });
});