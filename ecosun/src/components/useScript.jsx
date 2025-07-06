import { useEffect, useState } from "react";

const useScript = (src) => {
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    if (!src) {
      setStatus("idle");
      return;
    }

    // Check if script already exists
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      // Create new script
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      // Event handlers
      const onLoad = () => {
        script.setAttribute("data-status", "ready");
        setStatus("ready");
      };
      const onError = () => {
        script.setAttribute("data-status", "error");
        setStatus("error");
      };

      script.addEventListener("load", onLoad);
      script.addEventListener("error", onError);

      // Cleanup
      return () => {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("error", onError);
        // Optional: remove script if you want dynamic cleanup
        // document.body.removeChild(script);
      };
    } else {
      // If script already exists, get current status
      setStatus(script.getAttribute("data-status") || "ready");
    }
  }, [src]);

  return status;
};

export default useScript;
