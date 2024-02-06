import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Function to fetch article data
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/articles/${articleId}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error("Error fetching article:", error.message);
                // Handle error, e.g., redirect to an error page
            }
        };

        // Call the fetchArticle function when the component mounts
        fetchArticle();
    }, [articleId]);

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            {Array.isArray(article) && article.length > 0 ? (
                <>
                    <h1 className="mb-5 text-2xl md:text-2xl text-coolGray-900 font-bold text-left mt-4">{article[0].title}</h1>
                    <div className="mb-10 text-m md:text-m text-coolGray-900 font-normal text-left mr-10 ql-bubble" >
                        {/* <p dangerouslySetInnerHTML={{__html:'<p>'+ article[0].content + '</p>   '}} /> */}
                        <ReactQuill
                        theme="bubble"
                                value={article[0].content} 
                                readOnly={true}
                        />
                    </div>
                    <a
                        href={article[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="block mt-5 underline bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 text-center rounded"
                        style={{width:"180px"}}
                    >
                        Open Document &gt;
                    </a>
                </>
            ) : (
                <NotFoundPage />
            )}
        </>
    );
};

export default ArticlePage;