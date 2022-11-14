import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";
const Alluser = () => {
  useEffect(() => {
    getAllUser();
  }, []);
  const [person, setPerson] = useState([]);
  const getAllUser = async () => {
    let responce = await getUsers();
    console.log("responce", responce.data);
    setPerson(responce.data);
  };
  const deleAction = async (id) => {
    let responce = await deleteUser(id);
    getAllUser();
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> Id </TableCell>
          <TableCell> Name </TableCell>
          <TableCell> User_Name </TableCell>
          <TableCell> Email </TableCell>
          <TableCell> Phone </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {person.map((el, index) => {
          return (
            <TableRow>
              <TableCell>{el._id}</TableCell>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.username}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.phone}</TableCell>
              <TableCell>
                <Button
                  varient="contained"
                  component={Link}
                  to={`/edit/${el._id}`}
                >
                  {" "}
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button varient="contained" onClick={() => deleAction(el._id)}>
                  {" "}
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default Alluser;
