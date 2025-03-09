import { getServiceData } from "@/api-services/get-service-data/get-service-data";
import GateProject from "@/components/ImageModal/gateImageModel";

const page = async () => {
  const gateData = await getServiceData("gateData");

  return <GateProject gates={gateData} />;
};

export default page;
