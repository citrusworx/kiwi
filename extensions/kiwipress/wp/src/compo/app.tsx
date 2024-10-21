import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllPosts from './posts/all-posts/all-posts'
import SinglePostId from './posts/single-post/single-post-id';
import SinglePostSlug from './posts/single-post/single-post-slug';
import SimpleTwoColumn from './menus/simple/simple-two-column'
import SingleProductSlug from './products/single-product-slug';

function App() {
    return (
        <Router>
            <SimpleTwoColumn />
            <Routes>
                <Route path="/" element={<AllPosts />} />
                <Route path="/post/:postId" element={<SinglePostId />} />
                <Route path="/posts/:slug" element={<SinglePostSlug />} />
                <Route path="/products/:slug" element={<SingleProductSlug />} />
            </Routes>
        </Router>
    );
}

export default App;