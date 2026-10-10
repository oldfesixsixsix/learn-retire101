/* 記錄每一課是否完成，存在這台裝置的瀏覽器裡 */
(function(){
  var KEY='xuetang.v1';
  function read(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ return {}; } }
  function mark(id){
    try{ var d=read(); d['l'+id]=true; localStorage.setItem(KEY,JSON.stringify(d)); }catch(e){}
  }
  window.XT={read:read,mark:mark};

  var id=document.body.getAttribute('data-lesson');
  if(!id || id==='t') return;
  var steps=document.querySelectorAll('.step');
  if(!steps.length) return;
  var last=steps[steps.length-1];
  if(last.classList.contains('on')) mark(id);
  new MutationObserver(function(){
    if(last.classList.contains('on')) mark(id);
  }).observe(last,{attributes:true,attributeFilter:['class']});
})();
