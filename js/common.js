$("#today").text(moment().format('LLLL'));
$('#leftbar').height(function (i,h){return h - 51;})

$(window).on('resize', function(e) {
    var height = $(this).height();
    $('#leftbar').height(function (i,h){return height - 51;})
});
