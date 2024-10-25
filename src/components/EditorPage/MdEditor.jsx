import React, { useEffect, useState } from "react";
import PostTitle from "./PostTitle";
import EditerFooter from "./EditorFooter";
import Dropdown from "./Dropdown";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../../styles/Editor.css";
import { getAlgorithms, postTIL, putTIL } from "../../api/detail";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ThumbnailModal from "./ThumbnailModal";
import { postImageUpload } from "../../api/write";
import { useGetTILDetail } from "../../hooks/useGetTILDetail";

function MdEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { postId } = useParams();
  const isEdit = location.pathname.includes("/edit");
  const { data } = useGetTILDetail({ postId: postId });
  const [postData, setPostData] = useState({
    language: isEdit ? data?.til.language : "",
    site: isEdit ? data?.til.language : "",
    algorithmId: isEdit ? data?.til.algorithmId : null,
    title: isEdit ? data?.til.title : "",
    link: isEdit ? data?.til.link : "",
    codeContent: isEdit ? data?.til.codeContent : "",
    content: isEdit ? data?.til.content : "",
    thumbnail: isEdit ? data?.til.thumbnailImage : "",
  });
  const [algorithmOptions, setAlgorithmOptions] = useState([]);
  const algorithmNames = algorithmOptions.map((item) => item.korClassification);

  const handlePostData = (data) => {
    if (isEdit) {
      putTIL({ tilId: postId, tilData: data }).then((res) =>
        navigate(`/posts/${res.data.id}`)
      );
    } else {
      postTIL(data).then((res) => navigate(`/posts/${res.data.id}`));
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      try {
        const formData = new FormData();
        formData.append("img", file);
        const response = await postImageUpload(formData);
        const imageUrl = response.data.uploadedUrl;
        setPostData((prev) => ({
          ...prev,
          content: `${prev.content}\n![image](${imageUrl})`,
        }));
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };

  const handleModalSave = (thumbnail) => {
    postImageUpload({ img: thumbnail }).then((res) => {
      const addedPostData = {
        ...postData,
        thumbnailImage: res.data.uploadedUrl,
      };
      handlePostData(addedPostData);
      setIsModalOpen(false);
    });
  };

  useEffect(() => {
    setPostData({
      language: isEdit ? data?.til.language : "",
      site: isEdit ? data?.til.language : "",
      algorithmId: isEdit ? data?.til.algorithmId : null,
      title: isEdit ? data?.til.title : "",
      link: isEdit ? data?.til.link : "",
      codeContent: isEdit ? data?.til.codeContent : "",
      content: isEdit ? data?.til.content : "",
      thumbnail: isEdit ? data?.til.thumbnailImage : "",
    });
    getAlgorithms().then((res) => setAlgorithmOptions(res.data.algorithmList));
  }, [isEdit, data]);

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
