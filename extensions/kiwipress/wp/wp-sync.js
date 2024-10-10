// import WPAuth from "./wp-auth";

async function fetch_protocol(url, user, pass)
{
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${user}:${pass}`)
        }
    });

    if(!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    else
    {
        const data = await response.json();
        console.info('Success.')
        return data;
    }   
}

class WPSync {
    
    static wp_posts;
    static wp_terms;
    static wp_pages;
    static wp_media;
    static wp_users;
    static wp_comments;
    static wp_options;
    static wp_categories;
    static wp_tags;
    static wp_custom;
    static wp_custom_taxonomies;
    static wp_custom_post_types;
    static wp_custom_post_statuses;
    static wp_custom_post_formats;
    static wp_custom_post_revisions;
    static wp_url;
    // Get plugins
    static plugins;
    static plugins_active;
    static plugins_inactive;
    // Add plugins
    static activate_plugins;
    static deactivate_plugins;
    


    constructor(){
        // const h2o = new h2o(h2oOptions);
    }

    // Create a function that gets the status of a plugin to see if it needs to update. Maybe cache the response every 3 days?
    static get_plugin_status(plugin){
        // Get plugin status
    }

    static deactivate_plugins(plugins){
        //
        plugins.forEach(plugin => {
            // Deactivate API Call
        });
    }

    // Post Methods
    // TODO: Get Post Content
    // TODO: Get Post Author and Bio
    // TODO: Get Comments

    async get_posts(url){
        // Get posts
        fetch_protocol(url).then(data => {
            data.forEach(post => {
                console.log(post.title.rendered);
            });
        });
    }

    async get_published_posts(url, user, pass)
    {
        fetch_protocol(url, user, pass)
        .then(data => {
            data.forEach(post => {
                console.log(post.title.rendered);
            })
        })
    }

    async get_post_content(url, post_id){
        // Get post
        fetch_protocol(url + '/' + post_id).then(data => {
            console.log(data.content.rendered);
        });
    }

    async get_post_title(url, post_id){
        // Get post title
        fetch_protocol(url + '/' + post_id).then(data => {
            // Filter the published posts
            const published_posts = data.filter(post => post.status === 'publish');
            console.log(published_posts.title.rendered);
        });
    }

    // Page Methods
    async get_pages(url){
        // Get pages
        fetch_protocol(url).then(data => {
            data.forEach(page => {
                console.log(page.title.rendered);
            });
        });
    }

    // Get menus
    get_menus(url, user, pass)
    {
        fetch_protocol(url, user, pass)
        .then(data => {
            data.forEach(menu => {
                console.log(menu.name);
            });
        });
    }

    // User Methods
    async get_users(url){
        // Get users
        fetch_protocol(url)
        .then(data => {
            data.forEach(user => {
                console.log(user.name);
            });
        });
    }

    // Product Methods (WooCommerce)
    get_products(){
        // Get products
    }

}

export default WPSync;