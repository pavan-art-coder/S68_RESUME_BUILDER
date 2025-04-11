import axios from "axios";

export const fetchUserProfile = async (email) => {
    try {
        const response = await axios.get(`http://localhost:5000/auth/profile`, {
            params: { email },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
};
