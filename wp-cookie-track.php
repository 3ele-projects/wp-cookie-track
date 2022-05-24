<?php
/**
 * Plugin Name:     Wp Cookie Track
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     wp-cookie-track
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wp_Cookie_Track
 */

// Your code starts here.


if(!function_exists('get_post_id')){
    function get_post_id() {
        global $post;
        $deps = array('jquery');
        $version= '1.0'; 
        $in_footer = true;
        wp_enqueue_script('wp-cookie-track', plugins_url( '/js/wp-cookie-track.js', __FILE__ ), array('jquery'), '', true);
        wp_localize_script('wp-cookie-track', 'my_script_vars', array(
                'postID' => $post->ID
            )
        );
    }
}
add_action('wp_enqueue_scripts', 'get_post_id');

add_shortcode('ordendergsi_secret', 'ordendergsi_secret');

function ordendergsi_secret($atts = array(), $content = null, $tag = '' ){
    $atts = array_change_key_case( (array) $atts, CASE_LOWER );
 
    // override default attributes with user attributes
    $args = shortcode_atts(
    array(
        'lvl' => '0',
    ), $atts, $tag
);

$output = '<div style="display:none;" class="secret_'.$args['lvl'].'">'.$content.'</div>';
	return $output;

}

