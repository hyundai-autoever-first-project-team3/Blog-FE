// import React, { useState, useRef } from 'react';
// import { ReactSVG } from 'react-svg';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor, Viewer } from '@toast-ui/react-editor';
// import '../styles/Editor.css';
// import { useNavigate } from 'react-router-dom';
// import color from '@toast-ui/editor-plugin-color-syntax';
// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import arrow from '../assets/Arrow left.svg';
// import Arrowdown from '../assets/Arrow down.svg';

// const MyComponent = (props) => {
//   const [title, setTitle] = useState(''); // 제목 상태 추가
//   const [content, setContent] = useState(''); // 본문 상태 추가
//   const editorRef = useRef();
//   const previewRef = useRef();
//   const navigate = useNavigate();

//   const handleEditorChange = () => {
//     const editorInstance = editorRef.current.getInstance();
//     const markdown = editorInstance.getMarkdown();
//     setContent(markdown); // 본문 상태 업데이트
//     previewRef.current.getInstance().setMarkdown(`# ${title}\n\n${markdown}`); // 제목과 본문을 함께 업데이트
//   };

//   const handleTitleChange = (event) => {
//     const title = event.target.value;
//     setTitle(title); // 제목 상태 업데이트
//     previewRef.current.getInstance().setMarkdown(`# ${title}\n\n${content}`); // 제목과 본문을 함께 업데이트
//   };

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="flex view">
//       <div className="w-1/2 my-3 ml-2 mr-1 editor-container">
//         <input
//           type="text"
//           placeholder="제목을 입력하세요"
//           className="pl-2 m-4 text-2xl font-bold text-gray-900 outline-none"
//           value={title}
//           onChange={handleTitleChange} // 제목 변경 핸들러 추가
//         />
//         <div className="flex px-3 m-3 space-x-2">
//           <div className="relative w-full">
//             <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
//               <option value="" disabled selected hidden>
//                 SITE
//               </option>
//               <option>백준</option>
//               <option>프로그래머스</option>
//               <option>민코딩</option>
//             </select>
//             <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
//               <ReactSVG
//                 src={Arrowdown}
//                 beforeInjection={(svg) => {
//                   svg.classList.add('text-gray-700');
//                   svg.setAttribute('style', 'fill: currentColor');
//                 }}
//               />
//             </div>
//           </div>
//           <div className="relative w-full">
//             <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
//               <option value="" disabled selected hidden>
//                 언어
//               </option>
//               <option>C</option>
//               <option>JAVA</option>
//               <option>PYTHON</option>
//             </select>
//             <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
//               <ReactSVG
//                 src={Arrowdown}
//                 beforeInjection={(svg) => {
//                   svg.classList.add('text-gray-700');
//                   svg.setAttribute('style', 'fill: currentColor');
//                 }}
//               />
//             </div>
//           </div>
//           <div className="relative w-full">
//             <select className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200">
//               <option value="" disabled selected hidden>
//                 알고리즘 유형
//               </option>
//               <option>BFS</option>
//               <option>DFS</option>
//               <option></option>
//             </select>
//             <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
//               <ReactSVG
//                 src={Arrowdown}
//                 beforeInjection={(svg) => {
//                   svg.classList.add('text-gray-700');
//                   svg.setAttribute('style', 'fill: currentColor');
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="editor-wrapper">
//           <Editor
//             previewStyle="none"
//             height="70vh"
//             initialEditType="markdown"
//             initialValue=" "
//             placeholder="내용을 입력하세요"
//             hideModeSwitch={true}
//             plugins={[color]}
//             toolbarItems={[
//               ["heading", "bold", "italic", "strike"],
//               ["hr", "quote"],
//               ["ul", "ol", "task", "indent", "outdent"],
//               ["table", "image", "link"],
//               ["code", "codeblock"],
//             ]}
//             ref={editorRef}
//             onChange={handleEditorChange} // 본문 변경 핸들러 추가
//           />
//         </div>
//         <div className="flex items-center justify-between py-1.5 editor-footer">
//           <button
//             className="flex items-center px-2 py-2 font-bold text-gray-400 duration-150 rounded-xl hover:bg-red-500 hover:text-white"
//             onClick={handleGoBack}
//           >
//             나가기
//           </button>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 font-bold text-green-400 duration-150 rounded hover:text-green-600">
//               임시저장
//             </button>
//             <button className="px-4 py-2 font-bold text-white duration-150 bg-green-500 rounded hover:bg-green-700">
//               출간하기
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/2 p-5 bg-blue-50 preview-container">
//         <Viewer ref={previewRef} initialValue={``} /> 
//       </div>
//     </div>
//   );
// };

// export default MyComponent;