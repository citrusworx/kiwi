import { Link } from 'react-router-dom'
import './simple-two-column.css'

function SimpleTwoColumn() {
    return (
        <div>
        <nav
            className="flex between w:75 h:8"
        >
            <h2 className="ml:rel:10">Logo</h2>
            <ul className="flex gap:1 list:none">
                <li className="grange-extended bold-italic text:md">
                    <Link to="/">Home</Link>
                </li>
                <li className="grange-extended bold-italic text:md">
                    <Link to="/post/127">Post with ID</Link>
                </li>
                <li className="grange-extended bold-italic text:md">
                    <Link to="/posts/thine-blog-is-live">Post with Slug</Link>
                </li>
                <li className="grange-extended bold-italic text:md">
                    <Link  to="/products/overnight-duffle">Product with Slug</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default SimpleTwoColumn