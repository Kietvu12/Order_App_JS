import axios from "axios";

const API_URL = "https://ayafood.vn/api/food";

const ApiFood = {
    // Thêm món ăn
    addFood: async (formData) => {
        try {
            const response = await axios.post(`${API_URL}/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response.data;
        } catch (error) {
            console.error("Add Food Error:", error);
            return { success: false, message: "Failed to add food" };
        }
    },


    listFood: async () => {
        try {
            const response = await axios.get(`${API_URL}/list`);
            return response.data;

        } catch (error) {
            console.error("List Food Error:", error);
            return { success: false, message: "Failed to fetch food list" };
        }
    },

    removeFood: async (foodId) => {
        try {
            const response = await axios.post(`${API_URL}/remove`, { id: foodId });
            return response.data;
        } catch (error) {
            console.error("Remove Food Error:", error);
            return { success: false, message: "Failed to remove food" };
        }
    },

    // Tìm kiếm món ăn
    searchFood: async (searchQuery) => {
        try {
            const response = await axios.get(`${API_URL}/search`, {
                params: { name: searchQuery },
            });
            return response.data;
        } catch (error) {
            console.error("Search Food Error:", error);
            return { success: false, message: "Failed to search food" };
        }
    },
};

export default ApiFood;
