function EditorModal() {
  return (  
    <div className="modal fade modal-lg" id="editormodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editormodalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editormodalLabel">Editor Modal</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Modal Body
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorModal;