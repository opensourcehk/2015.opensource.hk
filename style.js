$('.navbar').affix({
      offset: {
        top: $('.jumbotron').height()+$('.navbar').height()
      }
}); 



$("#navbar-collapse-button").click(function() {
	$("#navbar").toggleClass("nav-dark");
});