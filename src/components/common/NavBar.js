import { useState } from "react";
import { Link } from "react-router-dom";


export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/wordhoax" },

  ];

  return (
    <div className="navbar flex-wrap mx-auto lg:justify-between content-center bg-base-100 lg:w-4/5">
        <a className="btn btn-ghost lg:mx-0 sm:mx-auto normal-case lg:text-xl sm:text-l">i am kyla.</a>

      <div className="lg:flex-none sm:flex sm:items-center">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item, idx) => {
            return (
              <li className="lg:text-base sm:text-xs" key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
