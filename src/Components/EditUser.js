import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { getUserforEdit } from "../Service/api";
import { editUser ,editUserforDetails} from "../Service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
`;
const Div = styled(FormControl)`
  margin-top: 20px;
`;

const Edituser = () => {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(defaultValue);
  let navigate = useNavigate();
  const { id } = useParams();
  const { name, username, email, phone } = user;
  useEffect(() => {
    loadDetails();
  }, []);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  const editUserDetails = async () => {
    const response = await editUserforDetails(id, user);
    navigate("/all");
  };
  const loadDetails = async () => {
    console.log("id", id);
    let responce = await editUser(id);
    console.log("responce.datadfgdfghd", responce.data);
    setUser(responce.data);
  };

  return (
    <Container>
      <Typography>Edit User from</Typography>
      <Div>
        <InputLabel>Name</InputLabel>

        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </Div>
      <Div>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </Div>
      <Div>
        {" "}
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />{" "}
      </Div>
      <Div>
        {" "}
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </Div>
      <Div>
        <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
      </Div>
    </Container>
  );
};
export default Edituser;
