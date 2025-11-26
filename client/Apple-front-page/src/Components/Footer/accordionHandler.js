import $ from "jquery";

export default function accordionHandler() {
  $(function () {
    function handleAccordion() {
      if ($(window).width() <= 768) {
        $(".footer-links-wrapper h3")
          .off("click")
          .on("click", function () {
            const ul = $(this).next("ul");
            ul.slideToggle();
            $(this).toggleClass("iconToggler");
          });
      } else {
        $(".footer-links-wrapper h3").off("click");
        $(".footer-links-wrapper ul").removeAttr("style");
        $(".footer-links-wrapper h3").removeClass("iconToggler");
      }
    }

    handleAccordion();
    $(window).on("resize", handleAccordion);
  });
}
