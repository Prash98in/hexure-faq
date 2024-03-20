import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import InputTag from "../components/Tag-Input/TagInput";

const tilesClass = 'relative px-2 container mx-auto divide-y-2 divide-solid shadow-2xl shadow-blue-900/20' //'bg-blue-100 rounded-2xl pt-3 px-4 lg:px-10 p-0';
//const elementClass = 'max-w-l' //'bg-white rounded-2xl lg:px-5 py-3 border-blue-500 p-0 shadow-xl .border-blue-900';
const ArticleList = ({articles}) => {
    return (
        <div className={tilesClass}>
        {
            articles.map(article => (
                <div className="flex flex-wrap lg:flex-nowrap items-center py-2 hover:shadow-lg shadow-purple-500/40" key={article.name}>
                    <Link className="w-full lg:w-9/12 mb-10 lg:mb-0" key={article.name} to={`/${article.name}`}>
                            <h3 className="font-semibold font-heading mb-1">{article.title}</h3>
                        <p className="text-xs overflow-hidden px-5">{article.content.replace(/(<img\s+[^>]*src="'["'][^>]*>|&lt;|&gt;|&nbsp;|<([^>]+)>)/gi, "").substring(0,200)}...</p>
                    </Link>
                    {/* TODO: Need to check this */}
                    {/* <InputTag toChild={JSON.parse(article.inputTags)==true ? JSON.parse(article.inputTags) : JSON.parse('')} deleteTag='' addTag='' readOnly={true} /> */}
                    <div className="w-full lg:w-auto px-4 ml-auto text-right">
                        <span className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900">
                            <InputTag 
                                toChild={ JSON.parse(article.inputTags)} 
                                deleteTag='' 
                                addTag='' 
                                readOnly={true}
                            />
                        </span>
                    </div>

                </div>
            ))
        }
        </div>
    );
}

export default ArticleList;