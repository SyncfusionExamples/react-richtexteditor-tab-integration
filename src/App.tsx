import { useRef } from 'react';
import {TabComponent,TabItemDirective,TabItemsDirective} from '@syncfusion/ej2-react-navigations';
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar,Table,PasteCleanup,Audio, Video, EmojiPicker,} from '@syncfusion/ej2-react-richtexteditor';

function App() {
  const editorRef1 = useRef(null);
  const editorRef2 = useRef(null);
  const headerText = [{ text: 'Text Formatting' }, { text: 'Insert Media Options' }];
  const tools1 = { items: [ 'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'BackgroundColor', 'FontColor', 'FontName'] };
  const tools2 = { items: ['Undo', 'Redo', '|', 'Image', 'Video', 'Audio', 'EmojiPicker'] };
  const content1 = () => {
    return (
      <div>
        <RichTextEditorComponent ref={editorRef1} toolbarSettings={tools1}>
          <Inject services={[ Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup ]} />
        </RichTextEditorComponent>
      </div>
    );
  };

  const content2 = () => {
    return (
      <div>
        <RichTextEditorComponent ref={editorRef2} toolbarSettings={tools2} >
          <Inject services={[ Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup, Audio,Video,EmojiPicker]} />
        </RichTextEditorComponent>
      </div>
    );
  };

  return (<div>
       <TabComponent>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={content1} />
          <TabItemDirective header={headerText[1]} content={content2} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}
export default App;