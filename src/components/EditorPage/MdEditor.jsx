import React, { useState } from 'react';
import PostTitle from './PostTitle';
import EditerFooter from './EditorFooter';
import Dropdown from './Dropdown';
import MDEditor from '@uiw/react-md-editor/nohighlight';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import '../../styles/Editor.css';

function MdEditor() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [algorithm, setAlgorithm] = useState("");

  const algorithmOptions = [
    "이진 탐색",
    "다익스트라",
    "너비 우선 탐색",
    "깊이 우선 탐색",
    "동적 계획법",
    "그리디",
    "브루트포스",
    "구현",
    "그래프 탐색",
    "최단 경로"
  ];

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setValue((prevValue) => `${prevValue}\n![image](${imageUrl})`);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="flex h-screen" data-color-mode="light" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <div className="flex flex-col w-full h-full sm:w-1/2">
        <PostTitle title={title} setTitle={setTitle} />
        <div className="flex px-1 m-3 space-x-2">
          <Dropdown options={['백준', '프로그래머스', '민코딩']} placeholder="SITE" />
          <Dropdown options={['C', 'JAVA', 'PYTHON']} placeholder="언어" />
          <Dropdown options={algorithmOptions} placeholder="알고리즘 유형" onChange={setAlgorithm} />
        </div>
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

