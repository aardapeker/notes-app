
import EditorModal from "./components/EditorModal"
import Card from "./components/Card"
import Masonry from "react-masonry-css"
function App() {
  const dummyNotes = [ 
    {title: 'Header1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium.consectetur adipiscing elit. Maecenas volutpat egestas pretium.consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 1}, 
    {title: 'Header2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 2}, 
    {title: 'Header3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 3}, 
    {title: 'Header4', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 4}, 
    {title: 'Header5', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 5}, 
    {title: 'Header6', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 6}, 
  ] 
  
  return (
    <>
      <EditorModal />
      <div className="container text-center mt-5">
        <Masonry breakpointCols={{ default: 3, 1200: 2, 768: 1 }} className="my-masonry-grid d-flex" columnClassName="my-masonry-grid_column"> 
          {dummyNotes.map((note) => { 
            return <Card title={note.title} body={note.body} idx={note.id} key={note.id}/> 
          })} 
        </Masonry>
      </div>
      <div className="position-fixed bottom-0 end-0 m-4 z-2">
        <button className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#editormodal">
          <span className="pe-2">
            New Note
          </span>
          <i className="bi bi-journal-plus fs-2"></i>
        </button>
      </div>
    </>
  )
}

export default App
