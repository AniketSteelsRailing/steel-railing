import { getServiceData } from "@/api-services/get-service-data/get-service-data";
import WindowProject from "@/components/ImageModal/windowImageModel";

const page = async() => {
      const railingData = await getServiceData("windowData");
  
  return <WindowProject windows={railingData} />;
};

export default page;
