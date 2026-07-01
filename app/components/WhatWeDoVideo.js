import { assetPath } from "../../lib/assetPath";

export default function WhatWeDoVideo() {
  return (
    <div className="whatwedo-media">
      <img
        className="whatwedo-image"
        src={assetPath("/whatwedo.png")}
        alt=""
      />
    </div>
  );
}
