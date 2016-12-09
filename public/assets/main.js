$(document).ready(function(){
  $('body').append('<div class=\'wrap\'></div>');

  for (var i=0; i<4;i++){
    for (var j=0; j<4; j++){
      $('.wrap').append('<div class="item">aaa</div>');
    }
    $('.wrap').append('<br>')
  }

  $('.item').hover(function(){
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
     var colorB = Math.floor((Math.random() * 256));
    $(this).css("background-color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
    console.log('change');
  });

  $(':button').click(function(){
    $('.item').css("background-color", "blue");
    var newRow=prompt("Enter row of the grid :");
    var newCol=prompt("Enter col of the grid :");
    $('.item').remove();
    $('.wrap').remove();
    var width=470*newRow/4;
    console.log(width);
    var height=470*newCol/4;
    console.log(height);
    $('body').append('<div class=\'wrap\'></div>');
    $('.wrap').width(width).height(height);
    var colorr=255;
    var colorb=255;
    var colorg=255;
    var step=26;

    for (var i=0; i<newRow;i++){
      for (var j=0; j<newCol; j++){
        $('.wrap').append('<div class="item">aaa</div>');
      }
      $('.wrap').append('<br>')
    }
    //$('.item').hover(function(){
    //  var colorR = Math.floor((Math.random() * 256));
    //  var colorG = Math.floor((Math.random() * 256));
    //   var colorB = Math.floor((Math.random() * 256));
    //  $(this).css("background-color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
    //  console.log('change');
    //});

    $('.item').click(function(){
      colorr=colorr-step;
      colorg=colorg-step;
      colorb=colorb-step;
      $(this).css("background-color","rgb(" + colorr + "," + colorg + "," + colorb + ")");
      console.log(colorr);
    })

  });




})
