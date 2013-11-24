/** Random Color Generator
 *  @author Allison Yee | Hanna Lee | Christian Le */

$(document).ready(function () {
    randomColor();
    $('body').css('background', color);
    $('#box1').css('background', color1);
    $('#box2').css('background', color2);
    $('#box3').css('background', color3);
    $('#box4').css('background', color4);
    $('#box5').css('background', color5);
    $('#box6').css('background', color6);
    $('#box7').css('background', color7);
    $('#box8').css('background', color8);
    $('#boxorig').css('background', color);
    var stringDisplay = hexcolor + '\n' + color;
    var escaped = $('<div>').text(stringDisplay).text();
    $('#colortext').html(escaped.replace(/\n/g, '<br />'));
});

$(document).ready(function(){
    $('#generate').click(function() {
        location.reload();
    });
});

$(document).ready(function(){
     $("#box1").mouseover(function(){
         $("body").css("background", color1);
         var stringDisplay = hexcolor1 + '\n' + color1;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box2").mouseover(function(){
         $("body").css("background", color2);
         var stringDisplay = hexcolor2 + '\n' + color2;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box3").mouseover(function(){
         $("body").css("background", color3);
         var stringDisplay = hexcolor3 + '\n' + color3;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box4").mouseover(function(){
         $("body").css("background", color4);
         var stringDisplay = hexcolor4 + '\n' + color4;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box5").mouseover(function(){
         $("body").css("background", color5);
         var stringDisplay = hexcolor5 + '\n' + color5;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box6").mouseover(function(){
         $("body").css("background", color6);
         var stringDisplay = hexcolor6 + '\n' + color6;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box7").mouseover(function(){
         $("body").css("background", color7);
         var stringDisplay = hexcolor7 + '\n' + color7;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#box8").mouseover(function(){
         $("body").css("background", color8);
         var stringDisplay = hexcolor8 + '\n' + color8;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});
$(document).ready(function(){
     $("#boxorig").mouseover(function(){
         $("body").css("background", color);
         var stringDisplay = hexcolor + '\n' + color;
         var escaped = $('<div>').text(stringDisplay).text();
         $('#colortext').html(escaped.replace(/\n/g, '<br />'));
     });
});

// orig
var red = 150;
var green = 150;
var blue = 150;
var color = 'rgb(150,150,150)';
var hexcolor = '#ffffff';
//box1
var red1 = 150;
var green1 = 150;
var blue1 = 150;
var color = 'rgb(150,150,150)';
var hexcolor1 = '#ffffff';
//box2
var red2 = 150;
var green2 = 150;
var blue2 = 150;
var color2 = 'rgb(150,150,150)';
var hexcolor2 = '#ffffff';
//box3
var red3 = 150;
var green3 = 150;
var blue3 = 150;
var color3 = 'rgb(150,150,150)';
var hexcolor3 = '#ffffff';
//box4
var red4 = 150;
var green4 = 150;
var blue4 = 150;
var color4 = 'rgb(150,150,150)';
var hexcolor4 = '#ffffff';
//box5
var red5 = 150;
var green5 = 150;
var blue5 = 150;
var color5 = 'rgb(150,150,150)';
var hexcolor5 = '#ffffff';
//box6
var red6 = 150;
var green6 = 150;
var blue6 = 150;
var color6 = 'rgb(150,150,150)';
var hexcolor6 = '#ffffff';
//box7
var red7 = 150;
var green7 = 150;
var blue7 = 150;
var color7 = 'rgb(150,150,150)';
var hexcolor7 = '#ffffff';
//box8
var red8 = 150;
var green8 = 150;
var blue8 = 150;
var color8 = 'rgb(150,150,150)';
var hexcolor8 = '#ffffff';

function randomColor() {
    //orig
    red = (Math.floor(Math.random() * 256));
    green = (Math.floor(Math.random() * 256));
    blue = (Math.floor(Math.random() * 256));
    color = 'rgb(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ')';
    hexcolor = rgb2hex(red, green, blue);
    //box1
    red1 = red + 15;
    green1 = green + 15;
    blue1 = blue + 15;
    if (red1 > 255) {
        red1 = 255;
    }
    if (green1 > 255) {
        green1 = 255;
    }
    if (blue1 > 255) {
        blue1 = 255;
    }
    color1 = 'rgb(' + red1.toString() + ',' + green1.toString() + ',' + blue1.toString() + ')';
    hexcolor1 = rgb2hex(red1, green1, blue1);
    //box2
    red2 = red - 30;
    green2 = green - 30;
    blue2 = blue - 30;
    if (red2 < 0) {
        red2 = 0;
    }
    if (green2 < 0) {
        green2 = 0;
    }
    if (blue2 < 0) {
        blue2 = 0;
    }
    color2 = 'rgb(' + red2.toString() + ',' + green2.toString() + ',' + blue2.toString() + ')';
    hexcolor2 = rgb2hex(red2, green2, blue2);
    //box3
    red3 = red - 45;
    green3 = green - 45;
    blue3 = blue - 45;
    if (red3 < 0) {
        red3 = 0;
    }
    if (green3 < 0) {
        green3 = 0;
    }
    if (blue3 < 0) {
        blue3 = 0;
    }
    color3 = 'rgb(' + red3.toString() + ',' + green3.toString() + ',' + blue3.toString() + ')';
    hexcolor3 = rgb2hex(red3, green3, blue3);
    //box4
    red4 = red + 30;
    green4 = green + 30;
    blue4 = blue + 30;
    if (red4 > 255) {
        red4 = 255;
    }
    if (green4 > 255) {
        green4 = 255;
    }
    if (blue4 > 255) {
        blue4 = 255;
    }
    color4 = 'rgb(' + red4.toString() + ',' + green4.toString() + ',' + blue4.toString() + ')';
    hexcolor4 = rgb2hex(red4, green4, blue4);
    //box5
    red5 = red - 15;
    green5 = green - 15;
    blue5 = blue - 15;
    if (red5 < 0) {
        red5 = 0;
    }
    if (green5 < 0) {
        green5 = 0;
    }
    if (blue5 < 0) {
        blue5 = 0;
    }
    color5 = 'rgb(' + red5.toString() + ',' + green5.toString() + ',' + blue5.toString() + ')';
    hexcolor5 = rgb2hex(red5, green5, blue5);
    //box6
    red6 = red - 60;
    green6 = green - 60;
    blue6 = blue - 60;
    if (red6 < 0) {
        red6 = 0;
    }
    if (green6 < 0) {
        green6 = 0;
    }
    if (blue6 < 0) {
        blue6 = 0;
    }
    color6 = 'rgb(' + red6.toString() + ',' + green6.toString() + ',' + blue6.toString() + ')';
    hexcolor6 = rgb2hex(red6, green6, blue6);
    //box7
    red7 = red + 60;
    green7 = green + 60;
    blue7 = blue + 60;
    if (red7 > 255) {
        red7 = 255;
    }
    if (green7 > 255) {
        green7 = 255;
    }
    if (blue7 > 255) {
        blue7 = 255;
    }
    color7 = 'rgb(' + red7.toString() + ',' + green7.toString() + ',' + blue7.toString() + ')';
    hexcolor7 = rgb2hex(red7, green7, blue7);
    //box8
    red8 = red + 45;
    green8 = green + 45;
    blue8 = blue + 45;
    if (red8 > 255) {
        red8 = 255;
    }
    if (green8 > 255) {
        green8 = 255;
    }
    if (blue8 > 255) {
        blue8 = 255;
    }
    color8 = 'rgb(' + red8.toString() + ',' + green8.toString() + ',' + blue8.toString() + ')';
    hexcolor8 = rgb2hex(red8, green8, blue8);
}

function rgb2hex(r, g, b) {
    return "#" + (65536 * r + 256 * g + b).toString(16);
}
