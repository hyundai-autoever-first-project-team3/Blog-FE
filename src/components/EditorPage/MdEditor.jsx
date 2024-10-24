import React, { useState } from 'react';
import PostTitle from './PostTitle';
import EditerFooter from './EditorFooter';
import MDEditor from '@uiw/react-md-editor/nohighlight';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import '../../styles/Editor.css';

function MdEditor() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex h-screen" data-color-mode="light">
      <div className="flex flex-col w-full h-full sm:w-1/2">
        <PostTitle title={title} setTitle={setTitle} />
        <MDEditor
          height="100%"
          value={value}
          onChange={handleEditorChange}
          preview="edit"
          textareaProps={{
            placeholder: "내용을 입력하세요.",
          }}
        />
        <EditerFooter />
      </div>
      <div className="flex-col hidden w-1/2 h-full p-3 overflow-auto sm:flex bg-sky-50">
        <div className="preview-content">
          <MDEditor.Markdown
            source={`# ${title}\n${value}`}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MdEditor;