//kissy文档地址是http://docs.kissyui.com/
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo
        Event.on("#nei2 li","mouseover",function(){
        	DOM.removeClass("#nei2 li","active");
          DOM.addClass(this,"active");
       		var a= DOM.attr(this,"data-attr");
       		DOM.hide("#four ul");
          DOM.show("."+a);
        });
        Event.on(".inpt1","click",function(){
        	alert("11");
        });
        Event.on(".inpt2","click",function(){
        	alert("22");
        });
        Event.on("#wen li","mouseover",function(){
          DOM.removeClass("#wen li","active");
          DOM.addClass(this,"active");
        	var a = DOM.attr(this,"data-attr");
        	DOM.hide("#suibian a");
        	DOM.show(".jdt"+a);
        });
        Event.on("#nai4 li","mouseover",function(){
        	var a = DOM.attr(this,"data-attr");
          DOM.hide("#ai-1 ul");
          DOM.show("."+a);
        });
        Event.on("#yuan li","mouseover",function(){
           var a = DOM.attr(this,"data-attr"); 
           DOM.hide("#sui a");
           DOM.show(".tupian"+a);
        });
        Event.on("#fang li","mouseover",function(){
           var a = DOM.attr(this,"data"); 
           DOM.hide("#bian a");
           DOM.show(".huhu"+a);
        });
    });
}); 