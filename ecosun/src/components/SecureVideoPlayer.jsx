import React from "react";

const SecureVideoPlayer = ({ src, poster }) => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Disable right-click
    alert("Download is disabled for this video.");
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <video
        src={src}
        poster={poster}
        controls
        controlsList="nodownload"
        disablePictureInPicture
        onContextMenu={handleContextMenu}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />

      {/* Transparent Overlay to prevent drag & save */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default SecureVideoPlayer;
