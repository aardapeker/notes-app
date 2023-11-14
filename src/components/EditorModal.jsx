import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "./EditorContext";

function EditorModal({onSave}) {
  const {initEditor} = useContext(EditorContext)
  const editorRef = useRef(null)

  useEffect(() => {
    if (!editorRef.current) {
      initEditor()
      editorRef.current = true
    }
  },[])
  return (  
    <div className="modal fade modal-lg" id="editormodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editormodalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editormodalLabel">Editor Modal</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div id="editorjs"></div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSave}>Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorModal;