$(function(){
  if (history && history.pushState) {
    alert("teste")
    $("input#search").keyup(function() {
        $.get($("#products_search").attr("action"), $("#products_search").serialize(), null, "script");
        history.replaceState(null, document.title, $("#products_search").attr("action") + "?" + $("#products_search").serialize());
        return false;
    });  
  
    $("#products th a, #products .pagination a").live("click", function() {
      $.getScript(this.href);
      history.pushState(null, document.title, this.href);
      e.preventDefault();
      return false;
    });
  
    $(window).bind("popstate", function() {
      $.getScript(location.href);
    });
  }
})