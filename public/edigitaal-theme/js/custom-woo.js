(function ($) {
  "use strict";
  $(document.body).on("added_to_cart", function (event, fragments, cart_hash, $button) {
    var $pid = $button.data("product_id");

    if (typeof wc_add_to_cart_params === "undefined") return false;
    $.ajax({
      type: "POST",
      url: wc_add_to_cart_params.ajax_url,
      data: {
        action: "wc_item_added_signal",
        _wpnonce: myData.my_nonce,
        id: $pid,
      },
      success: function (response) {
        $(".tm-floating-woocart-wrapper").addClass("open");
      },
    });
  });
})(jQuery);
