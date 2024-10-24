import React, { useEffect, useState } from "react";
import PostTitle from "./PostTitle";
import EditerFooter from "./EditorFooter";
import Dropdown from "./Dropdown";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../../styles/Editor.css";
import { getAlgorithms, postTIL } from "../../api/detail";
import { useNavigate } from "react-router-dom";

function MdEditor() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    language: "",
    site: "",
    algorithmId: null,
    title: "",
    tag: "",
    link: "",
    codeContent: "",
    content: "",
  });
  const [algorithmOptions, setAlgorithmOptions] = useState([]);
  const algorithmNames = algorithmOptions.map((item) => item.korClassification);

  const handlePostData = () => {
    postTIL(postData).then((res) => navigate(`/posts/${res.data.id}`));
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setPostData((prev) => `${prev}\n![image](${imageUrl})`);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    getAlgorithms().then((res) => setAlgorithmOptions(res.data.algorithmList));
  }, []);

  return (
    <div
      className="flex h-screen"
      data-color-mode="light"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="flex flex-col w-full h-full sm:w-1/2">
        <PostTitle
          title={postData?.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <div className="flex px-1 m-3 space-x-2">
          <Dropdown
            name="site"
            value={postData?.site}
            options={["백준", "Programmers", "SWEA", "민코딩"]}
            placeholder="사이트"
            onChange={(e) => setPostData({ ...postData, site: e.target.value })}
          />
          <Dropdown
            name="language"
            value={postData?.language}
            options={["C", "Java", "Python"]}
            placeholder="언어"
            onChange={(e) =>
              setPostData({ ...postData, language: e.target.value })
            }
          />
          <Dropdown
            name="algorithm"
            value={algorithmNames[postData.algorithmId - 1]}
            options={algorithmNames}
            placeholder="알고리즘"
            onChange={(e) =>
              setPostData({ ...postData, algorithmId: Number(e.target.value) })
            }
          />
        </div>
        <MDEditor
          height="100%"
          value={postData?.content}
          onChange={(value) => setPostData({ ...postData, content: value })}
          preview="edit"
          textareaProps={{
            placeholder: "내용을 입력하세요.",
          }}
        />
        <EditerFooter handlePostData={handlePostData} />
      </div>
      <div className="flex-col hidden w-1/2 h-full p-3 overflow-auto sm:flex bg-sky-50">
        <div className="preview-content">
          <MDEditor.Markdown
            source={`# ${postData.title}\n${postData.content}`}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MdEditor;
