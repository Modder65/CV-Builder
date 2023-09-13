import "../styles/App.css";

function EditSide() {
  return (
    <div className="edit-side">
      <Sidebar />
      <div className="form-container"></div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <img src="" alt="" />
        <p>Content</p>
      </button>
      <button>
        <img src="" alt="" />
        <p>Customize</p>
      </button>
    </div>
  );
}

export default EditSide;
