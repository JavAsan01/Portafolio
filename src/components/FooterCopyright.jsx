import React from "react";

function FooterCopyright() {
  return (
    <div className="flex justify-center items-center text-center">
      <div>&copy; {new Date().getFullYear()} JavDev</div>
    </div>
  );
}

export default FooterCopyright;
