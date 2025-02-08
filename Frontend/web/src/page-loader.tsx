import React from "react";

export const PageLoader: React.FC = () => {
  const loadingImg: string = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
