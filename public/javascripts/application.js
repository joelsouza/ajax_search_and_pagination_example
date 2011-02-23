$(function(){
  var history_state = (history && history.pushState);
  
  $("input#search").keyup(function() {
    $.get($("#products_search").attr("action"), $("#products_search").serialize(), null, "script");
    if(history_state)
      history.replaceState(null, document.title, $("#products_search").attr("action") + "?" + $("#products_search").serialize());
    return false;
  });  

  $("#products th a, #products .pagination a").live("click", function() {
    $.getScript(this.href);
    if(history_state)
      history.pushState(null, document.title, this.href);
    return false;
  });
  
  if(history_state){
    $(window).bind("popstate", function() {
      $.getScript(location.href);
    });
  }
  
})