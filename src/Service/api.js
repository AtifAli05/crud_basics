import axios from 'axios'
const URL='http://localhost:8000';
export const adduser=async(data)=>{
    console.log("dataaaa",data)

    try {
        return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log("Error in uploading data to api ",error)
    }
}

export const getUsers=async()=>{
try {
 return   axios.get(`${URL}/all`)
} catch (error) {
    console.log("Error While getting data",error)
}
}

export const editUser = async (id) => {
    console.log("idinapi",id)
    try{
    return await axios.get(`${URL}/${id}`)}
    catch(error){
     console.log("Edit user hace issues",error)
    }
}
export const editUserforDetails=async(id,user)=>{
    try {
      return await axios.post(`${URL}/${id}`,user)
    } catch (error) {
      console.log("Eroor while calling edit user api  ")
    }
  }

  export const deleteUser=async(id)=>{
    console.log(id,"id for deletion")
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log("error while deleting ")
    }
  }