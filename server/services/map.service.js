import axios from 'axios';
export const GetAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    console.log("API Key:", apiKey);
    console.log("Address being used:", address);
    console.log("URL being used:", url);

    try {
        const response = await axios.get(url);
        console.log("API Response:", response.data);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Google Maps API error: ${response.data.status}`);
        }
    } catch (error) {
        console.error("Error in GetAddressCoordinates:", error.message);
        throw error;
    }
};
