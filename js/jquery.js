var priceData = {
camembert: 18,
tomme: 19,
morbier: 9
}

$(document).ready(function() {
$('#buttonDiv input:submit').hide();
$('<a href=#>Submit Order</a>').appendTo("#buttonDiv").attr("href", "http://oracletone.com/")
.addClass("button").click(function() {
  $('form').submit();
  e.preventDefault();
}).hover(function(e){
var elem = $('#buttonDiv a')
if (e.type == "mouseenter") {
elem.addClass("buttonHover");
} else {
elem.removeClass("buttonHover");
}
});
$('.latent').show();

$('input').bind("change keyup", function() {
var subtotal = $(this).val() * priceData[this.name];
$(this).siblings("span").children("span").text(subtotal)
calculateTotal();
})
$('form').attr("action", "/shipping");
})

function calculateTotal() {
var total = 0;
$('span.subtotal span').not('#total').each(function(index, elem) {
total += Number($(elem).text());
})
$('#total').text("$" + total);
}
