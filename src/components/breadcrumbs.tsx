import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathname = location.pathname;

  const pathnames = pathname
    .split("")
    .map((item) => (item === "-" ? " " : item))
    .join("")
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ")
    .slice(1)
    .split("/");

  const lastIndexPathname = pathnames[pathnames.length - 1];

  return (
    <div className="flex justify-center items-center space-x-5 w-fit font-semibold">
      <Link to="/" className="text-semiMedium font-semibold">
        Home
      </Link>
      <img src="/images/arrow-right.svg" alt="arrow right" />
      {pathnames.slice(0, pathnames.length - 1).map((item, index) => (
        <Fragment key={index + 1}>
          <Link to={`/${item}`} className="text-semiMedium font-semibold">
            {item[0].toUpperCase() + item.slice(1)}
          </Link>
          <img src="/images/arrow-right.svg" alt="arrow right" />
        </Fragment>
      ))}
      <Link
        to={`/${pathname.slice(1).split("/").join("/")}`}
        className="text-semiMedium font-semibold"
      >
        {lastIndexPathname[0].toUpperCase() + lastIndexPathname.slice(1)}
      </Link>
    </div>
  );
}
