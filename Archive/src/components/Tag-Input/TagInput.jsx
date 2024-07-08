import { WithContext as ReactTags } from "react-tag-input";
import './TagInput.css';
// Specifies which characters should terminate tags input. An array of character codes.
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const InputTag = (props) => {
//   const [tags, setTags] = React.useState([]);

  // Method to delete tag from Array
  const handleDelete = (i) => {
    props.deleteTag(i);
  };

  // Method to Add tag into Array
  const handleAddition = (i) => {
    props.addTag(i);
  };
  return (
    <div id="tags" className="flex align-left">
      <ReactTags
        tags={props.toChild}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="inline"
        autocomplete
        placeholder="Please enter tags to add"
        allowDragDrop={false}
        readOnly={props.readOnly}
        autofocus={false}
      />
    </div>
  );
};

export default InputTag;