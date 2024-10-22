import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import '../styles/Editor.css';
import { useNavigate } from 'react-router-dom';
import color from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import arrow from '../assets/Arrow left.svg';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.editorRef = React.createRef();
    this.previewRef = React.createRef();
  }

  handleEditorChange = () => {
    const editorInstance = this.editorRef.current.getInstance();
    const markdown = editorInstance.getMarkdown();
    this.previewRef.current.getInstance().setMarkdown(markdown);
  };

  handleTitleChange = (event) => {
    const title = event.target.value;
    this.setState({ title });
    this.previewRef.current.getInstance().setMarkdown(`# ${title}`);
  };

  handleGoBack = () => {
    this.props.navigate(-1);
  };

  render() {
    return (
      <div className="flex view">
        <div className="w-1/2 my-3 ml-2 mr-1 editor-container">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="pl-2 m-4 text-4xl font-bold text-gray-900 outline-none"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <div className="flex px-3 m-3 space-x-2">
            <div className="relative w-full">
              <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
                <option value="" disabled selected hidden>
                  SITE
                </option>
                <option>백준</option>
                <option>프로그래머스</option>
                <option>민코딩</option>
              </select>
              <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative w-full">
              <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
                <option value="" disabled selected hidden>
                  언어
                </option>
                <option>C</option>
                <option>JAVA</option>
                <option>PYTHON</option>
              </select>
              <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative w-full">
              <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
                <option value="" disabled selected hidden>
                  알고리즘 유형
                </option>
                <option>BFS</option>
                <option>DFS</option>
                <option></option>
              </select>
              <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="editor-wrapper">
            <Editor
              previewStyle="none"
              height="70vh"
              initialEditType="markdown"
              initialValue=" "
              placeholder="내용을 입력하세요"
              hideModeSwitch={true}
              plugins={[color]}
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
              ]}
              ref={this.editorRef}
              onChange={this.handleEditorChange}
            />
          </div>
          <div className="flex items-center justify-between py-1.5 editor-footer">
          <button
            className="flex items-center px-2 py-2 pl-1 font-bold text-white duration-150 bg-red-500 rounded-2xl hover:bg-red-700"
            onClick={this.handleGoBack}
          >
            <img src={arrow} alt="Arrow left" />
            나가기
          </button>
            <div className="flex space-x-2">
              <button className="px-4 py-2 font-bold text-white duration-150 bg-blue-500 rounded hover:bg-blue-700">
                임시저장
              </button>
              <button className="px-4 py-2 font-bold text-white duration-150 bg-green-500 rounded hover:bg-green-700">
                출간하기
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-5 bg-blue-50 preview-container">
          <Viewer ref={this.previewRef} initialValue={this.state.title} />
        </div>
      </div>
    );
  }
}

const MyComponentWithNavigate = (props) => {
  const navigate = useNavigate();
  return <MyComponent {...props} navigate={navigate} />;
};

export default MyComponentWithNavigate;