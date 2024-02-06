import { useState } from 'react';
//import { CopyToClipboard } from 'react-copy-to-clipboard';
//import RichTextBox from '../components/RichTextBox';
import QuillEditor from '../components/Quill-TextBox/Quill-Editor';
import InputTag from "../components/Tag-Input/TagInput";

const SaveArticlePage = () => {
  const [articleName, setArticleName] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [tags, setTags] =useState([]); //to store tags

  const handleSave = () => {
    const newArticle = {
      name: articleName,
      title: articleTitle,
      content: articleContent,
      url: articleUrl,
      tag: JSON.stringify(tags),
    };

    // Send a POST request to the Node.js server
    fetch('http://localhost:8000/api/saveQuestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Article saved successfully');
          // Optionally, reset the form fields
          setArticleName('');
          setArticleTitle('');
          setArticleContent('');
          setArticleUrl('');
        } else {
          console.error('Error saving article');
          // Handle error or provide user feedback
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error or provide user feedback
      });
  };

  const handleDataArticleContent = (data) => {
    setArticleContent(data);
  };

      //change TAGS
    // Method to delete tag from Array
    const handleTagDelete = (i) => {
      setTags(tags.filter((tag, index) => index !== i));
    };

    // Method to Add tag into Array
    const handleTagAddition = (tag) => {
      setTags([...tags, tag]);
    };
  return (
    <div className='container bg-blue-100 rounded-3xl pt-5 py-5 lg:px-5 max-w-md md:max-w-full'>
      <h1 className='mb-4 text-2xl md:text-2xl text-coolGray-900 font-bold text-left'>Save Article</h1>
      <div className='bg-white rounded-3xl lg:px-3 py-3 border-blue-500 p-0 shadow-xl .border-blue-900 mb-5 '>
        <div className='flex grid grid-cols-5 gap-4'>
          <div className='flex py-2'>
            <label className='text-right'>Article Name:&nbsp;&nbsp;</label>
          </div>
          <div className='flex py-2 col-span-4'>
            <input type="text" className='placeholder-white block p-2 py-1 bg-gray-100 border' value={articleName} onChange={(e) => setArticleName(e.target.value)} autoFocus />
          </div>
        </div>
        <div className='flex grid grid-cols-5 gap-4'>
          <div className='flex py-2'>
            <label className='text-right'>Article Title:&nbsp;&nbsp;</label>
          </div>
          <div className='flex py-2 col-span-4 max-w-md md:max-w-3xl'>
            <input type="text" className='placeholder-white block px-2 py-1 bg-gray-100 border rounded' value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
          </div>
        </div>
        <div className='flex grid grid-cols-5 gap-4 min-h-screen overflow-x-hidden'>
          <div className='flex py-2  h-full'>
            <label className='text-right'>Article Content:&nbsp;&nbsp;</label>
          </div>
          <div className='flex flex-col py-2 col-span-4 h-full justify-content: space-between'>
            {/* <RichTextBox className="flex-1 overflow-y-auto  h-full" sendToParent={handleDataArticleContent} toChild={articleContent} /> */}
            <QuillEditor sendToParent={handleDataArticleContent} toChild={articleContent} />          
          </div>
        </div>
        <div className='flex grid grid-cols-5'>
        <div className='flex py-2'>
            <label className='text-right'>Add Tags:&nbsp;&nbsp;</label>
          </div>
          <div className='flex py-2 col-span-4 max-w-md md:max-w-3xl'>
            {/* <RichTextBox className="flex-1 overflow-y-auto  h-full" sendToParent={handleDataArticleContent} toChild={articleContent} /> */}
            {/* <QuillEditor sendToParent={handleDataArticleContent} toChild={articleContent} />           */}
            <InputTag toChild={tags} deleteTag={handleTagDelete} addTag={handleTagAddition} readOnly={false}/>
          </div>
        </div>
        <div className='col-span-5'>
          {articleContent}
        </div>
        <div className='flex grid grid-cols-5 gap-4'>
          <div className='flex py-2'>
            <label className='text-right'>Article URL:&nbsp;&nbsp;</label>
          </div>
          <div className='flex py-2 col-span-4'>
            <input type="text"  className='placeholder-white block px-3 py-1 bg-gray-100 border rounded max-w-md md:max-w-full' value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} />
          </div>
        </div>

        {/* <div>
      <input type="text" value={props.text} readOnly />
      <CopyToClipboard text={props.text} onCopy={() => setCopySuccess('Copied!')}>
        <button>{copySuccess ? copySuccess : 'Copy'}</button>
      </CopyToClipboard>
    </div> */}

      </div>
      <button className='w-full sm:w-auto text-center h-10 inline-flex items-center justify-center py-2 px-5 rounded-full bg-blue-900 border border-blue-100 shadow font-bold font-heading text-white hover:bg-blue-700' onClick={handleSave}>Save</button>
    </div>
  );
};

export default SaveArticlePage;