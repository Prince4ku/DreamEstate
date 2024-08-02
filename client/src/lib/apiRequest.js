import axios from "axios";

// Create an Axios instance with a custom configuration
const apiRequest = axios.create({
    baseURL: "http://localhost:8800/api", // The base URL for the API
    withCredentials: true, // Allow credentials such as cookies to be sent with cross-origin requests
});

// Export the Axios instance for use in other parts of the application
export default apiRequest;
