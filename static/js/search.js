"use strict";
$(function () {
  var s = "apkpure.search.history:v1";
  $(".search-mask").click(function () {
    $("#nav_new").addClass("searching"),
      setTimeout(function () {
        $("#nav_new .search .autocomplete").focus();
      });
  }),
    $(document).click(function (e) {
      var a = $(".search-input, .search-history, .search-mask");
      a.is(e.target) || a.has(e.target).length || $(e.target).hasClass("search-history-item-delete") || $(e.target).hasClass("icon-search-history-item-delete") || ($(".search-history").hide(), $("#nav_new").removeClass("searching"));
    });
});
