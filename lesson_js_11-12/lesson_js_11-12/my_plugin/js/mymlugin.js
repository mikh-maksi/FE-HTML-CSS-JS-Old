$.fn.myplugin = function(options){
  return this.each(function() {
   $(this).css('color', "red");
   // четные строки
  $(this).css('font-weight', '700');
   // нечетные строки
   });
   };
