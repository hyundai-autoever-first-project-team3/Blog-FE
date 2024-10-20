import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

class MyComponent extends React.Component {
  editorRef = React.createRef();

  handleClick = () => {
    this.editorRef.current.getInstance().exec('bold');
  };

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue=""
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>make bold</button>
      </>
    );
  }
}

export default MyComponent;