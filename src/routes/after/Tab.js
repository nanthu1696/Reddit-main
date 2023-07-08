import React, { useState } from "react";
import { Form, useNavigate, useLocation } from "react-router-dom";

function NewPost() {
  let navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname;
  let user = path.split("/");
  function returnMain(e) {
    e.preventDefault();
    navigate(`/${user[1]}`);
  }
  return (
    <div id="newPostContainer">
      <Form method="post">
        <input placeholder="Title" name="title" />
        <textarea placeholder="Text(optional)" name="description" />
        <div className="butContainer">
          <button onClick={returnMain}>Cancel</button>
          <button type="submit">Post</button>
        </div>
      </Form>
    </div>
  );
}
function NewImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  let navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname;
  let user = path.split("/");
  function returnMain(e) {
    e.preventDefault();
    navigate(`/${user[1]}`);
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div id="newImageContainer">
      <Form method="post">
        <input placeholder="Title" name="title" />
        <div id="imageHolder">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            name="image"
          />
          {previewUrl && (
            <div>
              <img
                src={previewUrl}
                alt="Preview"
                style={{ maxWidth: "400px", maxHeight: "300px" }}
              />
            </div>
          )}
        </div>
        <div className="butContainer">
          <button onClick={returnMain}>Cancel</button>
          <button>Post</button>
        </div>
      </Form>
    </div>
  );
}

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id="tabContainer">
      <div className="tab-buttons">
        <button
          className={activeTab === 0 ? "act" : ""}
          onClick={() => handleTabClick(0)}
        >
          <box-icon name="detail"></box-icon>Post
        </button>
        <button
          className={activeTab === 1 ? "act" : ""}
          onClick={() => handleTabClick(1)}
        >
          <box-icon name="image-alt"></box-icon>Image
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 0 && <NewPost />}
        {activeTab === 1 && <NewImage />}
      </div>
    </div>
  );
};

export default Tab;
