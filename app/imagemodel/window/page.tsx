import { getServiceData } from "@/api-services/get-service-data/get-service-data";
import WindowProject from "@/components/ImageModal/windowImageModel";

const page = async() => {
      const windowData = await getServiceData("windowData");
  
  return <WindowProject windows={windowData} />;
};

export default page;
