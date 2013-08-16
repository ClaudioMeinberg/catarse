(function ($) {
  $.fn.readmore = function (settings) {

    var defaults = {
      substr_len: 220,
      split_word: false,
      ellipses: '&#8230;',
      // more_link: '<a class="readm-more">Read&nbsp;More</a>',
      less_link: '<a class="readm-less">Read&nbsp;Less</a>',
      more_clzz: 'readm-more',
      less_clzz: 'readm-less',
      ellipse_clzz: 'readm-continue',
      hidden_clzz: 'readm-hidden'
    };

    var opts =  $.extend({}, defaults, settings);

    this.each(function () {
      var $this = $(this);
      if ($this.html().length > opts.substr_len) {
        abridge($this);
        linkage($this);
        $this.children().not(":first-child").hide();
      }
    });

    function linkage(elem) {
      // elem.append(opts.more_link);
      elem.append(opts.less_link);
      $('.readm-less').hide();
      // On 'Read Less'
      elem.find('.' + opts.less_clzz).click( function () {
        // Hide Read Less and show Read More
        $(this).hide();
        $(this).parent().children().children( ".readm-more" ).show();
        elem.find('.' + opts.hidden_clzz).hide();
        elem.find('.' + opts.ellipse_clzz).show();
        $(this).parent().children().not(":first-child").hide();
        $(window).trigger('resize');
      });
      // On 'Read More'
      elem.find('.' + opts.more_clzz).click( function () {
        // Hide ... and Read More
        elem.find('.' + opts.ellipse_clzz).hide();
        $(this).hide();
        // Show Read Less and all other paragraphs
        $(this).parent().children('.readm-hidden').show();
        $(this).parent().parent().children().slideDown("slow");
        $(window).trigger('resize');
      });

    }

    function abridge(elem) {
      var txt = elem.html();
      var dots = "<span class='" + opts.ellipse_clzz + "'>" + opts.ellipses + "</span><a class='readm-more'>Read&nbsp;More</a>";
      var shown = txt.substring(0, (opts.split_word ? opts.substr_len : txt.indexOf(' ', opts.substr_len))) + dots;
      var hidden =
        '<span class="' + opts.hidden_clzz + '" style="display:none;">' +
          txt.substring((opts.split_word ? opts.substr_len : txt.indexOf(' ', opts.substr_len)), txt.length) +
        '</span>';
      elem.html(shown + hidden);
    }    
    return this;
  };
})(jQuery);