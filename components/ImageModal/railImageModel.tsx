import React from 'react';
import SteelImageGallery from './imagemodal'; // Assuming this is the component that receives the 'gates' prop
import { gates } from '@/commonConstant/constant'; // Ensure that this path is correct

// Define the Gate interface to type-check the props being passed

// The Home component that will pass the gates array to SteelImageGallery
export default function SteelGateGallery() {
  return <SteelImageGallery gates={gates} />; // Ensure gates is being passed as a prop
}
