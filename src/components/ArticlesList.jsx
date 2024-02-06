import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import InputTag from "../components/Tag-Input/TagInput";

const tilesClass ='bg-blue-100 rounded-2xl pt-3 px-4 lg:px-10 p-0';
const elementClass ='bg-white rounded-2xl lg:px-5 py-3 border-blue-500 p-0 shadow-xl .border-blue-900';
const ArticleList = ({articles}) => {
    return (
        <div className={tilesClass}>
        {
            articles.map(article => (
                <div className="p-2 py-3" key={article.name}>
                    <Link className="hover:border-blue-900" key={article.name} to={`/${article.name}`}>
                        <div className={elementClass}>
                            <h3 className="text-m font-bold font-heading mb-1 underline">{article.title}</h3>
                        <p className="py-5">{article.content.substring(0,500).replace(/(<([^>]+)>)/gi, "")}...</p>
                        </div>
                    </Link>
                    {/* TODO: Need to heck this */}
                    {/* <InputTag toChild={JSON.parse(article.inputTags)==true ? JSON.parse(article.inputTags) : JSON.parse('')} deleteTag='' addTag='' readOnly={true} /> */}
                    <InputTag 
                        toChild={ JSON.parse(article.inputTags)} 
                        deleteTag='' 
                        addTag='' 
                        readOnly={true}
                    />

                </div>
            ))
        }
        </div>
    );
}

export default ArticleList;