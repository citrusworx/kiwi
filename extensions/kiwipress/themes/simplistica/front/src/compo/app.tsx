import { useState, useEffect, ReactNode } from 'react';

interface Post {
    id: number;
    title: {
        rendered: string;

    }
    content: {
        rendered: string;
    }
}


function App() {
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
                console.log(data);
                setPosts(data)
                
            }
            catch(error)
            {
                console.error(error);
            }
        }
        fetch_protocol();
    }, []);

    return (
        <div>
            {posts.map((post, index) => 
                <div key={index}>
                <h2 className="lobster">
                    {post.title.rendered}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
                
            )}
        </div>
            )
}

export default App