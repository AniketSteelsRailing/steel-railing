import { getServiceData } from "@/api-services/get-service-data/get-service-data";
import RailingProject from "@/components/ImageModal/railImageModel";

const page = async() => {
    const railingData = await getServiceData("railingData");
  
  return <RailingProject railings={railingData} />;
};

export default page;