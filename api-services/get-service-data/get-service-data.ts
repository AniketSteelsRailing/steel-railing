export const getServiceData = async (serviceName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search?query=${serviceName}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
        },
      }
    );

    // Check if the response is successful (status 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Expected JSON response, but got something else');
    }
  } catch (error) {
    // Log the error for debugging
    console.error("Error in getServiceData:", error);
    return null; // or you can handle the error accordingly (e.g., return empty data)
  }
};





// export const getServiceData = async (serviceName: string) => {

//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search?query=${serviceName}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
//         },
//       }
//     );
    
//     return response.json();
//   } catch (error) {
//   console.log("testdata error", error);
//     console.error(error);
//   }
// };
