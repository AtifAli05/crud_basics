import { FormControl, FormGroup, Input, InputLabel,Typography,styled, Button} from "@mui/material";
import { useState } from "react";
import {adduser} from '../Service/api'
const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto ;
`
const Div =styled(FormControl)`
margin-top:20px`


const Adduser = () => {
    const defaultValue={
        name:'',
        username:'',
        email:'',
        phone:''
    }
    const [user , setUser]=useState(defaultValue)
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        }
        console.log(user)
    const postData=()=>{
       adduser(user)
       console.log("dsfsdfsdfsdfsdfs")
    }
  return (
    <Container>
        <Typography>Add User from</Typography>
      <Div>
        <InputLabel>Name</InputLabel>

        <Input onChange={(e)=>onValueChange(e)} name="name" />
      </Div>
      <Div>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" />
      </Div>
      <Div>
        {" "}
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" />{" "}
      </Div>
      <Div>
        {" "}
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone" />
      </Div>
      <Div>
        <Button onClick={()=>postData()} variant="contained">Add User</Button>
      </Div>
    </Container>
  );
};
export default Adduser;
