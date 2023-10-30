import ContentModal from "./ContentModal";

function Card({title, body, idx}) {
  return (  
    <div className="mx-2 mb-3">
      <div className="card">
        <div className="ms-auto z-2">
          <button className="btn btn-sm btn-outline-danger d-flex align-items-center mt-2 me-3">
            <span className="pe-1">Delete</span>
            <i className="bi bi-trash3 fs-6"></i>
          </button>
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <p>{body}</p>
          <a type="button" className="stretched-link" data-bs-toggle="modal" data-bs-target={"#note" + idx}></a>
        </div>
      </div>
      <ContentModal title={title} body={body} idx={idx} />
    </div>
  );
}

export default Card;