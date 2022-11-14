import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;
const Tabs = styled(Link)`
  font-size: 20px;
  margin-right: 20px;
  color:inherit;
text-decoration:none
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs  to="/">
          {" "}
         Crud of node js
        </Tabs>
        <Tabs  to="all">
          {" "}
          All user 
        </Tabs>
        <Tabs  to="add">
          {" "}
          Add user
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
