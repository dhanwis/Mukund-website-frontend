import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


//login

// get product
export const allproductAPI=async(reqheader)=>{
    return await commonAPI(`GET`,`${BASE_URL}/product/all-product`,"",reqheader)
}










