// import WPAuth from "./wp-auth";

async function fetch_protocol(url, user, pass)
{
    const response = await fetch(url);

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
    
    static wpurl = {
        posts: '',
        pages: '',
        menus: '',
        users: '',
        products: '',
        forums: ''
    };


    constructor(){
        // const h2o = new h2o(h2oOptions);
    }

    // Post Methods
    // TODO: Get Post Author and Bio
    // TODO: Get Comments

    async get_posts(url){
        // Get posts
        fetch_protocol(url).then(data => {
            data.forEach(post => {
                return (post.title.rendered);
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
            return data.content.rendered;
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
    // Perhaps create a method that returns data that we can send into UI components.
    get_products(url){
        // Get products
        fetch_protocol(url)
        .then(data => {
            data.forEach(product => {
                console.log('Success!')
                console.log(product.title.rendered);
                return product.title.rendered;
            });
        });
    }

    // bbPress Forum Methods
    get_forums(url){
        // Get forums
        fetch_protocol(url)
        .then(data => {
            data.forEach(forum => {
                console.log(forum.post_title);
            });
        });
    }

    get_forum(url, id){
        // Get forum
        fetch_protocol(url + '/' + id)
        .then(data => {
            console.log(data.post_title);
        });
    }

}

export { WPSync, fetch_protocol };