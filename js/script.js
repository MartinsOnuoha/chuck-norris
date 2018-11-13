(function ($) {
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(4000);
	});

  $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  });
  
  $(document).ready(function(){
    $('.modal').modal();
  });
}(jQuery));

document.addEventListener("DOMContentLoaded", function () {
  getData();
  showTip();
});

function getData() { 
  fetch("https://api.icndb.com/jokes/random/10")
  .then(res => res.json()).then(data =>  {
    
    if (data.type == "success") {

      let source = document.getElementById("entry-template").innerHTML;
      let template = Handlebars.compile(source);

      var context = {
        jokes: data.value
      } 
      
      let html = template(context);
      $('#render_here').html(html);

    } else if (!data || (response.status != 200)) {
      $('#failure').show();
    }
  });
}

function reloadJokes() {
  getData();
  window.scrollTo(0, 0);
}

function showTip() {
  $('.tap-target').tapTarget();
  $('.tap-target').tapTarget('open');
}

function lmfao(_id) {
  // Cache awesome stuff here.
  $(`#${_id}`).addClass('disabled');
  M.toast({html: 'Fucking hillarious!'});
}

