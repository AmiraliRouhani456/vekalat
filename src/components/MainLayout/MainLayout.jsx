import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="site-bg bg-[#d75c99] min-h-screen">
      <div className="container w-[955px]  mx-auto">{children}</div>
    </div>
  );
}
