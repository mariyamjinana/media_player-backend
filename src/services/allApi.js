import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// Api to add videos
export const addVideoApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// Api to get videos
export const getVideoApi = async () => {
    return await commonApi('GET', `${serverUrl}/videos`, "")
}
//Api to remove video
export const removeVideo = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`, {})
}

//Api to add video to history
export const addHistoryApi = async (reqBody) =>
{
    return await commonApi('POST' , `${serverUrl}/history` , reqBody )
}
//Api to get all video from history
export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}
//Api to delete history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//Api to add category
export const addCategoryApi = async(reqBody) =>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//Api to get all category
export const getCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}

//Api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//Api to update category
export const updateCategoryApi = async(categoryid,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${categoryid}`,reqBody)
}