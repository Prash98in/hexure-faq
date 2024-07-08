//import {useState} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./Quill-ToolBar";
import "react-quill/dist/quill.snow.css";   
//import "./styles.css";


export const QuillEditor = (props) => {
  
  //const [state, setState] = useState({ value: null });
  const handleChange = content => {
    props.sendToParent(content);
  };
  return (
    <div className='text-editor h-full overflow-y-auto  '>
      <div className='position: absolute; top: 0;left:0;right:0'>
        <EditorToolbar />
      </div>
      <div className="position:relative;margin-top:5em; h-full">
        <ReactQuill
          theme="snow"
          value={props.toChild}
          onChange={handleChange}
          placeholder={"Write description here..."}
          modules={modules}
          formats={formats}
          className="text-editor h-full overflow-y-auto"
        />
      </div>
    </div>
  );
};

export default QuillEditor;