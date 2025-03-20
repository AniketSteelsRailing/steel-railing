export const SIGN_UP = "Sign Up";
export const LOGIN = "Log In";
export const Get_Quote = "Get Quote"
import React from 'react';
import { Shield, Users, Award, Clock, AppWindow as Window, PenTool as Tool, Settings } from 'lucide-react';

export const services = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Custom Railing Design',
    description: 'Bespoke railing solutions tailored to your specific needs and style preferences.'
  },
  {
    icon: <Window className="w-12 h-12 text-blue-600" />,
    title: 'Window Installation',
    description: 'Professional window installation services with energy-efficient options.'
  },
  {
    icon: <Tool className="w-12 h-12 text-blue-600" />,
    title: 'Repair Services',
    description: 'Expert repair services for both railings and windows to ensure lasting durability.'
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Maintenance',
    description: 'Regular maintenance services to keep your installations in perfect condition.'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Modern Staircase Railing',
    category: 'railings',
    image: '/Images/HomeImages/glass_rail1.png'
  },
  {
    id: 2,
    title: 'Energy-Efficient Windows',
    category: 'windows',
    image: '/Images/HomeImages/alumwin10.png'
  },
  {
    id: 3,
    title: 'Glass Balcony Railing',
    category: 'railings',
    image: '/Images/HomeImages/glass_rail7.png'
  },
  {
    id: 4,
    title: 'Commercial Windows',
    category: 'windows',
    image: '/Images/HomeImages/alumwin7.png'
  },
  {
    id: 5,
    title: 'Commercial Gates',
    category: 'gates',
    image: '/Images/HomeImages/slide_gate5.png'
  },
  {
    id: 6,
    title: 'Custom Steel Railing',
    category: 'railings',
    image: '/Images/HomeImages/steel_rail4.png'
  },
  {
    id: 7,
    title: 'Custom Sliding Gates',
    category: 'gates',
    image: '/Images/HomeImages/slide_gate1.png'
  },
  {
    id: 8,
    title: 'Residential Windows',
    category: 'windows',
    image: '/Images/HomeImages/grill_win2.png'
  },
  {
    id: 9,
    title: 'Residential Gates',
    category: 'gates',
    image: '/Images/HomeImages/door_gate9.png'
  }
];

export const testimonials = [
  {
    name: 'Rakesh Sharma',
    image: '/Images/boy1.png',
    rating: '⭐⭐⭐⭐⭐',
    feedback: 'Modern steel railing team transformed our home with stunning railings that not only look beautiful but also enhance our safety. The team was professional and attentive to our needs.',
  },
  {
    name: 'Arjun Sing',
    image: '/Images/boy2.png',
    rating: '⭐⭐⭐⭐⭐',
    feedback: 'The window installation service was seamless from start to finish. The new windows have made a huge difference in energy efficiency and appearance. Highly recommend!',
  },
  {
    name: 'Krishna Reddy',
    image: '/Images/boy3.png',
    rating: '⭐⭐⭐⭐⭐',
    feedback: 'Our experience with modern steel railing team was fantastic. They delivered on time and exceeded our expectations with their attention to detail. Our new railings are a perfect blend of functionality and style.',
  },
  {
    name: 'Aahana Kapoor',
    image: '/Images/girl1.png',
    rating: '⭐⭐⭐⭐⭐',
    feedback: 'Working with modern steel railing team was a fantastic experience. They delivered ahead of schedule and their attention to detail was remarkable. The railings are not only stylish but also incredibly sturdy, adding the perfect finishing touch to our home',
  },
  {
    name: 'Ishani Yadav',
    image: '/Images/girl2.png',
    rating: '⭐⭐⭐⭐⭐',
    feedback: 'modern steel railing team truly impressed us with their service. From the initial consultation to the final installation, everything was seamless. The new windows and railings have transformed our home, combining both beauty and durability.',
  }
];

export const galleryItems = [
  {
    title: 'Transform Your Space',
    description: 'Elevate your property with our tailored railing solutions, combining aesthetic appeal with superior safety.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/steel_rail1.png',
  },
  {
    title: 'Unmatched Quality',
    description: 'Our precision window installations are designed to improve energy efficiency while enhancing your property’s visual appeal.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/alumwin1.png',
  },
  {
    title: 'Safety and Durability',
    description: 'Our railings are built with the highest standards of safety and durability, ensuring peace of mind for every homeowner.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/steel_rail4.png',
  },
  {
    title: 'Custom Designs',
    description: 'Bespoke railing designs tailored to fit your unique style and functional needs can transform any space into a statement.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/steel_rail3.png',
  },
  {
    title: 'Elevate Aesthetics',
    description: 'Windows that match your décor and enhance your home’s charm while maintaining energy efficiency are within your reach.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/alumwin2.png',
  },
  {
    title: 'Precision Installation',
    description: 'Our expert team guarantees seamless installations, adhering to the tightest schedules while maintaining the highest standards.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/slide_gate1.png',
  },
  {
    title: 'Inspiring Craftsmanship',
    description: 'Highlighting fine details, each railing and window reflects a commitment to artistry and quality that you can rely on.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/glass_rail1.png',
  },
  {
    title: 'Timeless Appeal',
    description: 'Discover how our premium materials and sleek designs combine to create enduring beauty in your living and workspaces.',
    image: 'https://www.modernsteelrailing.com/Images/otherImages/billboard.png',
  },
];

export const features = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: '20+ Years Experience',
    description: 'Decades of expertise in custom railing and window solutions.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Expert Team',
    description: 'Highly skilled craftsmen and certified installers.'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Quality Guaranteed',
    description: 'Premium materials and industry-leading warranties.'
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'Timely Delivery',
    description: 'On-time project completion and professional installation.'
  }
];

  export const railingServices = [
  'Custom Design and Fabrication', 
  'Installation of Steel Railings', 
  'Repair and Maintenance', 
  'Ornamental Steel Railings', 
  'Safety Compliance', 
  'Glass or Wood Infill Options',
  'Others'
];

  export const windowServices = [
  'Window Installation',
  'Custom Steel Windows',
  'Window Repair and Restoration',
  'Weatherproofing and Insulation',
  'Security Enhancements',
  'Decorative Steel Windows',
  'Commercial and Industrial Steel Windows',
  'Others'
];

  export const gateServices = [
  'Custom Design & Fabrication',
  'Gate Installation',
  'Repairs & Maintenance of Gate', 
  'Security Enhancements',
  'Residential Gates',
  'Commercial and Industrial Steel Gates',
  'Others'
];