import { useState, useEffect } from 'react';
import './all-posts.css';

// Setup Post interface
interface Post {
    id: number;
    title: {
        rendered: string;

    }
    content: {
        rendered: string;
    }
    excerpt: {
        rendered: string;
    }
}


function AllPosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetch_protocol = async () => {
            try
            {
                const res = await fetch(`${process.env.POSTS}`);
                if(!res.ok){
                    throw new Error('Failed to fetch posts');
                }
                const data: Post[] = await res.json();
                setPosts(data)
                
            }
            catch(error)
            {
                console.error(error);
            }
        }
        fetch_protocol();
        
    }, [posts]);

    return (
        <div>
            {posts.map((post, index) => 
                <div 
                    key={index}
                    className="m:auto w:min:65 h:min:25 h:max:45 flex col items:center gap:1 ds:sm mt:5 p:rel:10"
                >
                    <h2 className="lobster text:xxlg">
                        {post.title.rendered}
                    </h2>
                    <p
                        className="ballinger text:sm"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                    />
                </div>
                
            )}
        </div>
            )
}

export default AllPosts