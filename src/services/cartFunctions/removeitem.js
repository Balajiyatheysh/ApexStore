import axios from "axios";

export const removeCartItems = async (id,user) =>{
    try{
        const {data} =await axios.delete(`/api/user/cart/${id}`, 
        {headers:{
            authorization:user.tokenVal
            }
        }
        )
        return data
    }
    catch(error){
        console.error("Oops caught cart error!!",error);
    }
}