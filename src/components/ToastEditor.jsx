import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

class MyComponent extends React.Component {
  editorRef = React.createRef();

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="80vh"
          initialEditType="markdown"
          initialValue=" "
          placeholder="내용을 입력하세요"
          hideModeSwitch = {true}
          ref={this.editorRef}
        />
        <button>나가기</button>
      </>
    );
  }
}

export default MyComponent;