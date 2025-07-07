import React from "react";

function FooterCopyright() {
  return (
    <div className="flex justify-center items-center text-center">
      <div>&copy; {new Date().getFullYear()} JavDev | FISEI</div>
    </div>
  );
}

export default FooterCopyright;
