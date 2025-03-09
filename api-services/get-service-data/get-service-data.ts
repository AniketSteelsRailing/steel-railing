interface RequestPayload {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  serviceType: string;
  serviceDetails: string;
  message: string;
}

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
    
    return response.json();
  } catch (error) {
  console.log("testdata error", error);
    console.error(error);
  }
};
