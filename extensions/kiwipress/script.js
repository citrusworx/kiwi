import WPSync from "./wp/wp-sync.js";
import dotenv from "dotenv";
const wp = new WPSync();
dotenv.config();

wp.get_users(`${process.env.WP_USERS}`);
wp.get_published_posts(`${process.env.WP_POSTS}`);