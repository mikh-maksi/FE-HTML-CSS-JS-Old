/*Установка
:   <div class="carousel-arrow-left"><span>Влево</span></div>
    <div class="carousel-hider">
    jQuery('.msyst_it_slider').append("<div class='carousel-arrow-left'><span>Влево</span></div>    <div class='carousel-hider'>      <ul class='carousel-list'>        <li class='carousel-element'><img src='img/img_0.png'></li>        <li class='carousel-element'><img src='img/img_1.png'></li>        <li class='carousel-element'><img src='img/img_2.png'></li>        <li class='carousel-element'><img src='img/img_3.png'></li>        <li class='carousel-element'><img src='img/img_4.png'></li>        <li class='carousel-element'><img src='img/img_5.png'></li>        <li class='carousel-element'><img src='img/img_6.png'></li>        <li class='carousel-element'><img src='img/img_7.png'></li>        <li class='carousel-element'><img src='img/img_8.png'></li>        <li class='carousel-element'><img src='img/img_9.png'></li>        <li class='carousel-element'><img src='img/img_10.png'></li>        <li class='carousel-element'><img src='img/img_11.png'></li>        <li class='carousel-element'><img src='img/img_12.png'></li>        <li class='carousel-element'><img src='img/img_13.png'></li>        <li class='carousel-element'><img src='img/img_14.png'></li>      </ul>    </div>    <div class='carousel-arrow-right'><span>Вправо</span></div>    <div style = 'clear:both'></div>    <form>    <ul class='navi'>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>      <li><input type=radio name = i></li>    </ul>  </form>");

*/


jQuery(document).ready(function() {
    var leftUIEl = jQuery('.carousel-arrow-left');
    var rightUIEl = jQuery('.carousel-arrow-right');
    var elementsList = jQuery('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;

    leftUIEl.click(function() {
        currentLeftValue += 610;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });

    rightUIEl.click(function() {
        currentLeftValue -= 610;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });
    jQuery(".carousel-list li").each(function (i)
  {
    console.log(i);
    jQuery(this).attr("n",i);
  })

  var code = [ "3WJlWDrTn9M", "KiZWdgqfJzg","rUkCmNsbRYk","RXC09AFh5sk","81UMuHQ_U_c","eO6W7xrSy3U","7oo4k8J6PqI","F6AQ8sAtB9A","0pjztcteeGc","RwtmqJOoBOE","RwtmqJOoBOE","CViTaBln41A","2ZvKKKC_z8A","e2oR1XfH6-w","4xRuBAxLk3c" ];

    jQuery(":radio").click(function (){
      var index2 = jQuery(":radio").index(this);
      console.log(index2);
      var elementsList = jQuery('.carousel-list');
      var LeftValue = index2 * -610;
      console.log(LeftValue);
      elementsList.animate({ left : LeftValue + "px"}, 1000);
      console.log(jQuery(".navi li").eq(index2));
  //    jQuery(".carousel-element").eq(index2).empty();
      var n, img_in;
      var code_img = "http://www.acadfl.com/wp-content/uploads/2016/05/img"+n+".jpg";

      var ifr = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+code[index2]+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
      n = jQuery(".ifr").attr("n");
      img_in = '<img src="http://www.acadfl.com/wp-content/uploads/2016/05/img_'+n+'.png">';
      jQuery(".carousel-element iframe").replaceWith(img_in);
      jQuery(".ifr").removeClass("ifr");

      jQuery(".carousel-element img").eq(index2).replaceWith(ifr);
      jQuery(".carousel-list li").eq(index2).addClass("ifr");

    })
    jQuery(".carousel-list:first-child").click(function(){
      var ifr = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+code[0]+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';

      jQuery(".carousel-element img").eq(0).replaceWith(ifr);
      jQuery(".carousel-list li").eq(0).addClass("ifr");
      jQuery(".navi li input").eq(0).attr("checked", "true");

    })
  });
//Ставим изображение, а дальше - подменяем на i-frame
//i-frame - стандартый
//Перемещение, в зависимости от отзыва.
//при нажатии кнопки влево-вправо изменяется checked
