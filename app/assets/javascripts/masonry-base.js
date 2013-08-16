/**
 * Base js functions for masonry
 */

$(document).ready(function(){
    //Init jQuery Masonry layout
});


// function init_masonry_rewards(){
//     var $container = $('#masonry-container');
//     var gutter = 20;
//     var min_width = 280;
//     $container.imagesLoaded( function(){
//         $container.masonry({
//             itemSelector : '.masonry-box',
//             gutterWidth: gutter,
//             isAnimated: true,
//               columnWidth: function( containerWidth ) {
//                 var num_of_boxes = (containerWidth/min_width | 0);
//                 var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0) ;
//                 if (containerWidth < min_width) {
//                     box_width = containerWidth;
//                 }
//                 $('.masonry-box').width(box_width);
//                 return box_width;
//               }
//         });
//     });
// }



// function init_masonry(container, selector, min_width = 280, gutter = 20){
function init_masonry(container, selector){
    var $container = $(container);

    var gutter = 20;
    var min_width = 280;
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : selector,
            gutterWidth: gutter,
            isAnimated: true,
              columnWidth: function( containerWidth ) {
                var num_of_boxes = (containerWidth/min_width | 0);

                var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0) ;

                if (containerWidth < min_width) {
                    box_width = containerWidth;
                }

                $(selector).width(box_width);

                return box_width;
              }
        });
    });
}