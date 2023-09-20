import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export default function Breadcrumbs() {
  const location = useLocation();
  let crumbLink = "";
  const crumbPath = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((crumb) => {
      crumbLink += `/${crumb}`;
      return (
        <CLink to={crumbLink} key={crumb}>
          {crumb}
        </CLink>
      );
    });

  return <p>Bio Markt - {crumbPath}</p>;
}

const CLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
