$(function() {
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 10    
        }, 600);

    });

    // $("[data-modal]").on("click", function(event){
    //     event.preventDefault();

    //     $("modal_cv").addClass('show');

    // });

    // $(modal_cv).on("click", function() {
    //     $(modal_cv).removeClass('show');
    // });
});