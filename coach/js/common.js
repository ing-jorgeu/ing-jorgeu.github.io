var fencers = [
  {id:0, value: "Jorge Urbina",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:1, value: "Tai Duffel",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:2, value: "Lelah Scarbrough",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:3, value: "Janis Balsamo",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:4, value: "Arden Beech",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:5, value: "Etha Trees",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:6, value: "Alessandra Near",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:7, value: "Jeraldine Saechao",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:8, value: "Nakia Gainer",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:9, value: "Erline Elsass",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:10, value: "Chung Rocker",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:11, value: "Heidi Azar",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:12, value: "Brigid Clowers",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:13, value: "Toby Pellegren",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:14, value: "Armanda Crossley",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:15, value: "Vi Petteway",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:16, value: "Aundrea Seawright",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:17, value: "Norine Maloy",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:18, value: "Phyliss Pilson",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:19, value: "Nicolas Elzy",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:20, value: "Veronique Grunewald",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:21, value: "Toya Balcom",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:22, value: "Felicita Laverriere",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:23, value: "Gwenda Neblett",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:24, value: "Rudolf Kellems",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:25, value: "Emmanuel Mckean",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:26, value: "Tobie Rehman",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:27, value: "Portia Mcmurray",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:28, value: "Aracely Wagoner",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:29, value: "Mckinley Lorentzen",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:30, value: "Marchelle Blanton",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:31, value: "Nu Bly",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:32, value: "Lashonda Shadwick",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:33, value: "Hester Strack",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:34, value: "Jade Lindley",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:35, value: "Debbie Frisch",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:36, value: "Blanch Strouth",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:37, value: "Tamica Kissinger",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:38, value: "Annalee Cousino",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:39, value: "Toi Loflin",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:40, value: "Taisha Makris",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:41, value: "Richie Ye",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:42, value: "Eneida Corey",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:43, value: "Renna Morneau",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:44, value: "Twanda Lant",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:45, value: "Todd Musso",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:46, value: "Gregory Deakins",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:47, value: "Reynalda Collingwood",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:48, value: "Loretta Cartier",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:49, value: "Roseanna Hannold",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:50, value: "Ali Procopio",img: "https://ing-jorgeu.github.io/img/profile.png"},
  {id:51, value: "Yannick Schmidli",img: "https://ing-jorgeu.github.io/coach/img/fencer1.jpg"},
  {id:52, value: "Nicki Schmidli",img: "https://ing-jorgeu.github.io/coach/img/fencer2.jpg"}
];

$("#today").text(moment().format('LLLL'));
$('#leftbar,#content').height(function (i,h){return h - 51;});
$('#content').width(function (i,w){return w - 60;});



$(window).on('resize', function(e) {
    var height = $(this).height();
    var width = $(this).width();
    $('#leftbar,#content,#fencers-container,.grow-container').height(function (i,h){return height - 51;});
    $('#content,#calendar').width(function (i,w){return width - 60;})
});

setTimeout(function() {
    $(window).resize();
},500);

setTimeout(function() {
    $(window).resize();
},2000);
