$(function() {
setTimeout(function(){
      var filter_words = [
         'Olympic Games',
         'Winter Games',
         'winter games',
         'olympic games',
         'Olympic',
         'olympic',
         'olympics',
         'Olympics',
         'sochi',
         'Sochi',
         '#Sochi2014',
         '#sochi2014',
         '@Sochi2014',
         '@sochi2014'
      ];


      var elements = [
         'span',
         'p',
         'h1',
         'h2',
         'h3',
         'h4',
         'h5',
         'i',
         'b',
         'div'
         ];
      for (var i = 0; i < filter_words.length; i++) {
         var word = filter_words[i];
         console.log(word);
         redact(word);
      };

   });

function redact2(word, el) {
         var re = new RegExp(word, 'g');
         $(el + ':contains('+word+')', document.body).each(function() {
            var newHTML = $(this).html().replace(
               re,
               '<span class="hideTheThingThatShouldBeHidden">'+word+'</span>'
            );

            if (newHTML) {
               $(this).html(newHTML);
            }
         });
}

function getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], whitespace = /^\s*$/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}


function redact_TextNodes(word) {
  var nodes = getTextNodesIn(document.getElementsByTagName('body')[0]);
  for (idx in nodes) {
    var node = nodes[idx];
    //node.nodeValue = node.nodeValue.replace(/[^\s]/g, '█');
    var re = new RegExp(word, 'g');
    node.nodeValue = node.nodeValue.replace(re, '███████');
  }
}


function redact_inputs(word) {
  var elements = document.getElementsByTagName('input');
  for (idx in elements) {
    var e = elements[idx];
    if (typeof(e.value) != 'string') {
      continue;
    }
    e.value = e.value.replace(/[^\s]/g, '█');
  }
}


function redact(word) {
  redact_TextNodes(word);
  //redact_inputs();
}
/*
   var re = new RegExp(filter_words[i], 'g');
   var replace_str = $('body').html().replace(re,'<span class="hideTheThingThatShouldBeHidden">'+filter_words[i]+'</span>');
   $('body').html(replace_str);

   $('*:contains('+filter_words[i]+')').each(function(){
   if($(this).children().length < 1) {
//$(this).html('XXXX');
$(this).css("color","black").css("background-color", "black");
}
});
*/
}, 1500);
