import Axios from "./Axios";

// get all categories
export const getCategoriesService = async () => {
    const { data } = await Axios.get("/category");
    return data;
}

/***************** Admin Services *******************/

//create new category
export const createCategoryService = async (title: string, token: string) => {
    const { data } = await Axios.post("/category", title, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data;
}

//delete category
export const deleteCategoryService = async (id: string, token: string) => {
    const { data } = await Axios.delete(`/category/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data;
}

//update category
export const updateCategoryService = async (id: string, title: string, token: string) => {
    const { data } = await Axios.put(`/category/${id}`, title, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data;
}