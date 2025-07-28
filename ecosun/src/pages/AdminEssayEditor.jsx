import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminEssayEditor = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    const newEssay = {
      title,
      content,
      date: new Date().toISOString(),
    };

    // Convert the essay data to JSON
    const json = JSON.stringify(newEssay, null, 2); // Pretty print with 2 spaces

    // Create a Blob from the JSON string
    const blob = new Blob([json], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title || "essay"}.json`; // Use title or default to "essay.json"

    // Append to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);

    alert("مقاله ذخیره شد!");
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>افزودن مقاله جدید</h2>
      <input
        type="text"
        placeholder="عنوان مقاله"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
      />
      <h5>عکس</h5>
      <input
        type="file"
        placeholder="عنوان مقاله"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        style={{ height: "300px", marginBottom: "20px" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        ذخیره مقاله
      </button>
    </div>
  );
};

export default AdminEssayEditor;
