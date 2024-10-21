import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams

interface SingleProductInterface {
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
    featured_media: number;
    product_cat: string;
    category: {
        id: number; // Might need to fetch another endpoint here
        name: string;
    },
    productImage: {
        id: number;
        src: string;
    },
    productCat?: {
        id: number;
        name: string; // Need to fetch the tag from another API endpoint
    },
    class_list: {
        name: string[]; // Will need to filter through an array to create a class lidt
    }
}

interface AuthorInterface {
    name: string;
    description: string;
}

function SingleProductSlug() {
    const { slug } = useParams<{ slug: string }>();  // Extract postId from the URL params
    const [product, setProduct] = useState<SingleProductInterface | null>(null);
    const [] = [];
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                // Fetch the product
                console.log(`${slug}`);
                const response = await fetch(`${process.env.WP_WOO}` + '/' + `${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data: SingleProductInterface = await response.json().then(res => res[0]);
                setProduct(data);

                // Get product image by abstracting the featured_media id and fetch that img src
                const featuredMediaId = data.featured_media;
                
                if (featuredMediaId) { // Ensure the featured_media ID exists
                    try {
                        // Fetch the featured media data
                        const featuredMediaRes = await fetch(`${process.env.WP_MEDIA}/${featuredMediaId}`);
                        
                        if (!featuredMediaRes.ok) {
                            throw new Error('Failed to fetch featured media');
                        }
                    
                        const featuredMediaData = await featuredMediaRes.json();
                    
                        // Log the fetched media data to inspect its structure
                        console.log('Featured Media Data:', featuredMediaData);
                    
                        // Use 'source_url' for the image URL (standard field in WP API for images)
                        setProduct(prevProduct => ({
                            ...prevProduct!,
                            productImage: {
                                id: featuredMediaData.id,
                                src: featuredMediaData.source_url // Correct field for image URL
                            }
                        }));

        // Fetch the product category by the getting the cat ID from product data
        const productId = data.product_cat[0];
        
        if(productId){
            try {
                console.log('Product ID:', productId);
                const productCatRes = await fetch(`${process.env.WP_CATEGORIES}` + `?id=${productId}`);
                if (!productCatRes.ok) {
                    throw new Error('Failed to fetch product category');
                }
                const productCatData = await productCatRes.json().then(res => res[0]);
                console.log('Product Category Data:', productCatData);
                setProduct(prevProduct => ({
                    ...prevProduct!,
                    productCat: {
                        id: productCatData.id,
                        name: productCatData.name
                    }
                }));
            }
            catch (error) {
                console.error('Error fetching product category:', error);
            }
        }

    } catch (error) {
        console.error('Error fetching featured media:', error);
    }
} else {
    console.error('No featured_media ID found');
}

            
            } catch (error) {
                setError(String(error));
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) {
            fetchProduct();
        }
    }, [slug]);  // Add postId to the dependency array

    if (isLoading) {
        return <div><h2>Loading...</h2></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w:65 m:auto flex col items:center gap:1 mt:10">
            <div className="flex items:center space:between gap:3">
            <img src={product?.productImage.src} height='30%' width="30%" alt={product?.title.rendered + " featured image"}></img>
                <div className="flex col items:center gap:1">
                    <h2 className="text:xxlg">{product?.title.rendered}</h2>
                    <span
                        dangerouslySetInnerHTML={{ __html: product!.productCat?.name || '' }}
                        className="italic tc-black-200"
                    />
                    <span dangerouslySetInnerHTML={{ __html: product?.excerpt.rendered || '' }} />
                    <div className="flex items:center gap:1 space:around">
                        <button className="btn btn:flat bgc-black-900 tc-white-100 w:10 h:5">Buy Now</button>
                        <button className="btn btn:flat bgc-black-300 tc-white-100 w:10 h:5">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text:xxlg">Product Description</h2>
                <hr className="" />
                <p
                    dangerouslySetInnerHTML={{ __html: product?.content.rendered || '' }}
                    className="text:md flex col gap:1 mt:10"
                />
            </div>"
        </div>
    );
}
export default SingleProductSlug;
