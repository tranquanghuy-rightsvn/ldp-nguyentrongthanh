jQuery( document ).ready( function(){
    jQuery( '.js-uap-prba-request-payout' ).on( 'click', function( e ){
        jQuery.ajax({
            type : "post",
            url : decodeURI(ajax_url), // decodeURI( window.ihc_site_url ) + '/wp-admin/admin-ajax.php',
            data : {
                       action         : 'uap_prba_request_payout'
            },
            success: function (response) {
                window.location.href = jQuery('.uap-prba-js-current-url').attr('data-url');
                //location.reload();
            }
        });
    });
});
