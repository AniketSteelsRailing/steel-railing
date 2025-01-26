interface RequestPayload {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  serviceInterestedIn: string;
}

export const serviceRequestForm = async (payload: RequestPayload) => {
  try {
    const response = await fetch("service-form/api", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
