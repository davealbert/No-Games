var filter_words = [ 'Olympic Games', 'Winter Games', 'winter games', 'olympic games', 'Olympic', 'olympic', 'olympics', 'Olympics', 'sochi', 'Sochi' ];
for (var i = 0; i < filter_words.length; i++) {
   //var re = new RegExp(filter_words[i], 'g');
   //var replace_str = $('body').html().replace(re,'<span class="hideTheThingThatShouldBeHidden">'+filter_words[i]+'</span>');
   //$('body').html(replace_str);

   //$('*:contains('+filter_words[i]+')').each(function(){
      //if($(this).children().length < 1) {
            ////$(this).html('XXXX');
            //$(this).css("color","black").css("background-color", "black");
      //}
   //});

$('*:contains('+filter_words[i]+')', document.body).each(function(){
  $(this).html($(this).html().replace(
        new RegExp(filter_words[i], 'g'), '<span class=hideTheThingThatShouldBeHidden>'+filter_words[i]+'</span>'
  ));
});
};
$('.hideTheThingThatShouldBeHidden').css("color","black").css("background-color", "black");
