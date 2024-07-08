// import { useState } from 'react';
// //import { CopyToClipboard } from 'react-copy-to-clipboard';
// //import RichTextBox from '../components/RichTextBox';
// import QuillEditor from '../components/Quill-TextBox/Quill-Editor';
// import InputTag from "../components/Tag-Input/TagInput";
// import { Textarea } from '@material-tailwind/react';
// const SaveArticlePage = () => {
//   const [articleName, setArticleName] = useState('');
//   const [articleTitle, setArticleTitle] = useState('');
//   const [articleContent, setArticleContent] = useState('');
//   const [articleUrl, setArticleUrl] = useState('');
//   const [tags, setTags] =useState([]); //to store tags


//   const containerCSS = "grid grid-cols-6 gap-4";
//   const labelCSS ="col-span-1 h-10 ";
//   const controlCSS = "col-span-5";
//   const handleSave = () => {
//     const newArticle = {
//       name: articleName,
//       title: articleTitle,
//       content: articleContent,
//       url: articleUrl,
//       tag: JSON.stringify(tags),
//     };

//     const validInput = () => {
//       if(newArticle.name ==='' || 
//         newArticle.title ==='' ||
//         newArticle.content ==='' //||
//         //newArticle.url ==='' ||
//         //newArticle.tag.length ===0
//         )
//       {
//         return false;

//       }
//       else return true;
//     }
// !validInput()? alert('All fields are required'):
//     // Send a POST request to the Node.js server
//     fetch('http://gsrivastava:8182/api/saveQuestions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newArticle),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Article saved successfully');
//           // Optionally, reset the form fields
//           setArticleName('');
//           setArticleTitle('');
//           setArticleContent('');
//           setArticleUrl('');
//         } else {
//           console.error('Error saving article');
//           // Handle error or provide user feedback
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle error or provide user feedback
//       });
//   };

//   const handleDataArticleContent = (data) => {
//     setArticleContent(data);
//   };

//       //change TAGS
//     // Method to delete tag from Array
//     const handleTagDelete = (i) => {
//       setTags(tags.filter((tag, index) => index !== i));
//     };

//     // Method to Add tag into Array
//     const handleTagAddition = (tag) => {
//       setTags([...tags, tag]);
//     };
//   return (
//     <div className='container bg-blue-100 rounded-3xl pt-5 py-5 lg:px-5 max-w-md md:max-w-full'>
//       <h1 className='mb-4 text-2xl md:text-2xl text-coolGray-900 font-bold text-left'>Add a new Article</h1>
//       <div className='bg-white rounded-3xl lg:px-3 py-3 border-blue-500 p-0 shadow-xl .border-blue-900 mb-5 '>
//         <div className={containerCSS}>
//           <div className={labelCSS}>
//             <label className='text-right'>Article Name:&nbsp;&nbsp;</label>
//           </div>
//           <div className={controlCSS}>
//             <input type="text" className='placeholder-white block p-2 py-1 w-72 bg-gray-100 border' value={articleName} onChange={(e) => setArticleName(e.target.value)} autoFocus />
//             </div>
//         </div>
//         <div className={containerCSS}>
//           <div className={labelCSS}>
//             <label className='text-right'>Description:&nbsp;&nbsp;</label>
//           </div>
//           <div className={controlCSS}>
//             {/* <input type="text" className='placeholder-white block px-2 py-1 w-full bg-gray-100 border rounded' value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} /> */}
//             <Textarea
//               placeholder="Enter description here..."
//               rows={4} // Specify the number of rows for multiline
//               size="md" // Set the size (e.g., small, regular, large)
//               value={articleTitle} 
//               onChange={(e) => setArticleTitle(e.target.value)}
//             />
          
//           </div>
//         </div>
//         <div className={containerCSS}>
//           <div className=''>
//             <label className='text-right'>Article Content:&nbsp;&nbsp;</label>
//           </div>
//           <div className='h-screen col-span-5 w-full'> {/*  {` ${{controlCSS}} "h-72"`} */}
//             <QuillEditor sendToParent={handleDataArticleContent} toChild={articleContent} />          
//           </div>
//         </div>
//         <div className={containerCSS}>
//           <div className={labelCSS}>
//             <label className='text-right'>Add Tags:&nbsp;&nbsp;</label>
//           </div>
//           <div className={controlCSS}>
//             <InputTag toChild={tags} deleteTag={handleTagDelete} addTag={handleTagAddition} readOnly={false}/>
//           </div>
//         </div>
//         {/* <div className='col-span-5'>
//           {articleContent}
//         </div> */}
        
//         <div className={containerCSS}>
//           <div className={labelCSS}>
//             <label className='text-right'>Article URL:&nbsp;&nbsp;</label>
//           </div>
//           <div className={controlCSS}>
//             <input type="text"  className='placeholder-white block px-3 py-1 w-72 bg-gray-100 border rounded max-w-md md:max-w-full' value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} />
//           </div>
//           </div>
//         {/* <div>
//       <input type="text" value={props.text} readOnly />
//       <CopyToClipboard text={props.text} onCopy={() => setCopySuccess('Copied!')}>
//         <button>{copySuccess ? copySuccess : 'Copy'}</button>
//       </CopyToClipboard>
//     </div> */}

//       </div>
//       <button className='w-full sm:w-auto text-center h-10 inline-flex items-center justify-center py-2 px-5 rounded-full bg-blue-900 border border-blue-100 shadow font-bold font-heading text-white hover:bg-blue-700' onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default UpdateArticlePage;
import { useState, useEffect } from 'react';
import QuillEditor from '../components/Quill-TextBox/Quill-Editor';
import InputTag from "../components/Tag-Input/TagInput";
import { Textarea } from '@material-tailwind/react';
import { useLocation } from "react-router-dom";

const UpdateArticlePage = () => {

  const location = useLocation();
  const articleToUpdate = location.state ? location.state.articleToUpdate : null;

  const [articleId, setArticleId] = useState(articleToUpdate ? articleToUpdate.QID : null);
  const [articleName, setArticleName] = useState(articleToUpdate ? articleToUpdate.name : '');
  const [articleTitle, setArticleTitle] = useState(articleToUpdate ? articleToUpdate.title : '');
  const [articleContent, setArticleContent] = useState(articleToUpdate ? articleToUpdate.content : '');
  const [articleUrl, setArticleUrl] = useState(articleToUpdate ? articleToUpdate.url : '');
  const [tags, setTags] = useState(articleToUpdate ? articleToUpdate.tags : []);

  const containerCSS = "grid grid-cols-6 gap-4";
  const labelCSS ="col-span-1 h-10 ";
  const controlCSS = "col-span-5";

  const handleSave = () => {
    const newArticle = {
      name: articleName,
      title: articleTitle,
      content: articleContent,
      url: articleUrl,
      tag: JSON.stringify(tags),
    };

    const validInput = () => {
      if(newArticle.name ==='' || 
        newArticle.title ==='' ||
        newArticle.content ==='')
      {
        return false;
      }
      else return true;
    }

    if(!validInput()) {
      alert('All fields are required');
      return;
    }

    const url = articleId
      ? `http://pjha:8000/api/updateQuestions/${articleId}`
      : 'http://pjha:8000/api/saveQuestions';
    const method = articleId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Article saved successfully');
          setArticleName('');
          setArticleTitle('');
          setArticleContent('');
          setArticleUrl('');
          setTags([]);
        } else {
          console.error('Error saving article');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDataArticleContent = (data) => {
    setArticleContent(data);
  };

  const handleTagDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleTagAddition = (tag) => {
    setTags([...tags, tag]);
  };

  return (
    <div className='container bg-blue-100 rounded-3xl pt-5 py-5 lg:px-5 max-w-md md:max-w-full'>
      <h1 className='mb-4 text-2xl md:text-2xl text-coolGray-900 font-bold text-left'>Update Article</h1>
      <div className='bg-white rounded-3xl lg:px-3 py-3 border-blue-500 p-0 shadow-xl .border-blue-900 mb-5 '>
        <div className={containerCSS}>
          <div className={labelCSS}>
            <label className='text-right'>Article Name:&nbsp;&nbsp;</label>
          </div>
          <div className={controlCSS}>
            <input type="text" className='placeholder-white block p-2 py-1 w-72 bg-gray-100 border' value={articleName} onChange={(e) => setArticleName(e.target.value)} autoFocus />
            </div>
        </div>
        <div className={containerCSS}>
          <div className={labelCSS}>
            <label className='text-right'>Description:&nbsp;&nbsp;</label>
          </div>
          <div className={controlCSS}>
            {/* <input type="text" className='placeholder-white block px-2 py-1 w-full bg-gray-100 border rounded' value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} /> */}
            <Textarea
              placeholder="Enter description here..."
              rows={4} // Specify the number of rows for multiline
              size="md" // Set the size (e.g., small, regular, large)
              value={articleTitle} 
              onChange={(e) => setArticleTitle(e.target.value)}
            />
          
          </div>
        </div>
        <div className={containerCSS}>
          <div className=''>
            <label className='text-right'>Article Content:&nbsp;&nbsp;</label>
          </div>
          <div className='h-screen col-span-5 w-full'> {/*  {` ${{controlCSS}} "h-72"`} */}
            <QuillEditor sendToParent={handleDataArticleContent} toChild={articleContent} />          
          </div>
        </div>
        {/* <div className={containerCSS}>
          <div className={labelCSS}>
            <label className='text-right'>Add Tags:&nbsp;&nbsp;</label>
          </div>
          <div className={controlCSS}>
            <InputTag toChild={tags} deleteTag={handleTagDelete} addTag={handleTagAddition} readOnly={false}/>
          </div>
        </div> */}
        {/* <div className='col-span-5'>
          {articleContent}
        </div> */}
        
        {/* <div className={containerCSS}>
          <div className={labelCSS}>
            <label className='text-right'>Article URL:&nbsp;&nbsp;</label>
          </div>
          <div className={controlCSS}>
            <input type="text"  className='placeholder-white block px-3 py-1 w-72 bg-gray-100 border rounded max-w-md md:max-w-full' value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} />
          </div>
          </div> */}
        {/* <div>
      <input type="text" value={props.text} readOnly />
      <CopyToClipboard text={props.text} onCopy={() => setCopySuccess('Copied!')}>
        <button>{copySuccess ? copySuccess : 'Copy'}</button>
      </CopyToClipboard>
    </div> */}

      </div>
      <button className='w-full sm:w-auto text-center h-10 inline-flex items-center justify-center py-2 px-5 rounded-full bg-blue-900 border border-blue-100 shadow font-bold font-heading text-white hover:bg-blue-700' onClick={handleSave}>Update</button>
    </div>
  );
};

export default UpdateArticlePage;