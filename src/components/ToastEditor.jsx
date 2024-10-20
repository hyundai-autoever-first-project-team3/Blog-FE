import React, { useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../styles/Editor.css';

const ToastEditor = () => {
  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      usageStatistics: false,
      hideModeSwitch: true,
      initialValue: ' ',
      placeholder: 'Please enter the contents',
    });
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default ToastEditor;
