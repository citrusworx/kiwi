import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams

interface SinglePostInterface {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    author: number;
}

interface AuthorInterface {
    name: string;
    description: string;
}

function SinglePostId() {
    const { postId } = useParams<{ postId: string }>();  // Extract postId from the URL params
    const [post, setPost] = useState<SinglePostInterface | null>(null);
    const [author, setAuthor] = useState<AuthorInterface | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostAndAuthor = async () => {
            setIsLoading(true);
            try {
                // Fetch the post
                const postRes = await fetch(`${process.env.POSTS}/${postId}`);
                if (!postRes.ok) {
                    throw new Error('Failed to fetch post');
                }
                const postData: SinglePostInterface = await postRes.json();
                setPost(postData);

                // Fetch the author data
                const authorId = postData.author;
                const authorRes = await fetch(`${process.env.AUTHOR_BASE}/${authorId}`);
                if (!authorRes.ok) {
                    throw new Error('Failed to fetch author bio');
                }
                const authorData: AuthorInterface = await authorRes.json().then(res => res[0]);
                setAuthor({
                    name: authorData.name,
                    description: authorData.description,
                });
            } catch (error) {
                setError(String(error));
            } finally {
                setIsLoading(false);
            }
        };

        if (postId) {
            fetchPostAndAuthor();
        }
    }, [postId]);  // Add postId to the dependency array

    if (isLoading) {
        return <div><h2>Loading...</h2></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w:75 m:auto flex col items:center gap:1">
            <div 
                id="heading-container"
                className="text:lg"
            >
                <h2>{post?.title.rendered}</h2>
            </div>
            <p className="" dangerouslySetInnerHTML={{ __html: post!.content.rendered }} />
            <div 
                id="author-bio"
                className="mt:10"
            >
                <p 
                    dangerouslySetInnerHTML={{ __html: author?.name || '' }}
                    className="korolev-light"
                />
                <p 
                    dangerouslySetInnerHTML={{ __html: author?.description || '' }}
                    className="bold"
                />
            </div>
        </div>
    );
}

export default SinglePostId;
