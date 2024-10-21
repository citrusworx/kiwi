<?php

/*
* Plugin Name:       Forum REST API
* Description:       REST API for your forums
* Version:           1.0.0
* Author:            Drew Winkles
* Requires at Least: 5.2
* Requires PHP:      7.2
* Author URI:        https://github.com/stinklewinks/bbpress-rest-api
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Tested Up To:      6.6.2
*/

namespace frapi;
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'fra_rest_api_init', function(){

    // Register the route for FORUMS
    register_rest_route('bbpress/v1', '/forums', array(
        'methods' => 'GET',
        'callback' => 'get_forums',
        'permission_callback' => '__return_true' // Allow all users to access the route'
    ));

    // Register route for TOPICS
    register_rest_route('bbpress/v1', '/topics', array(
        'methods' => 'GET',
        'callback' => 'get_topics',
        'permission_callback' => '__return_true' // Allow all users to access the route'
    ));

    // Register route for REPLIES
    register_rest_route('bbpress/v1', '/replies', array(
        'methods' => 'GET',
        'callback' => 'get_replies',
        'permission_callback' => '__return_true' // Allow all users to access the route'
    ));
});

// Get functions for FORUMS


function frapi_get_forums()
{
    $args = array(
        'post_type' => 'forum',
        'posts_per_page' => -1 // Get all forums
    );

    $forums = get_posts( $args);
    return rest_ensure_response($forums);
}

// Get TOPICS
function frapi_get_topics()
{
    $args = array(
        'post_type' => 'topic',
        'posts_per_page' => -1 // Get all topics
    );
    $topics = get_posts( $args);
    return rest_ensure_response($topics);
}

// GET REPLIES
function frapi_get_replies()
{
    $args = array(
        'post_type' => 'reply',
        'posts_per_page' => -1 // Get all replies
    );
    $replies = get_posts( $args);
    return rest_ensure_response($replies);
}