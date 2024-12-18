import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="110" r="111" />
    <rect x="0" y="236" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="277" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="377" rx="10" ry="10" width="97" height="30" />
    <rect x="133" y="374" rx="10" ry="10" width="147" height="30" />
  </ContentLoader>
);

export default Skeleton;
