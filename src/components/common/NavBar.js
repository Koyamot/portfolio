import { useState } from "react";
import { Link } from "react-router-dom";


export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Me", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">i am kyla.</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
