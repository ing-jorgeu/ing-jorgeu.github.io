$("#today").text(moment().format('LLLL'));
$('#leftbar,#content').height(function (i,h){return h - 51;});
$('#content').width(function (i,w){return w - 60;});



$(window).on('resize', function(e) {
    var height = $(this).height();
    var width = $(this).width();
    $('#leftbar,#content').height(function (i,h){return height - 51;});
    $('#content,#calendar').width(function (i,w){return width - 60;})
});

setTimeout(function() {
    $(window).resize();
},500);
