
import { Project, Service } from './types';

export const CONTACT_CONFIG = {
  name: 'Aesthetic Design & Development Consultant',
  fullName: 'MD Mishel Engineering',
  initial: 'M',
  email: 'mishelm825@gmail.com', 
  phone: '+8801708682650',
  location: '352/2,Mollahbari,Naddapara, Dhakshinkhan, Dhaka-1230',
  linkedin: '#',
  instagram: '#',
  twitter: '#',
  github: '#',
  tools: [
    { name: 'AutoCAD/3D', level: 'Expert', icon: 'fa-pencil-ruler' },
    { name: 'STAAD.Pro', level: 'Expert', icon: 'fa-cube' },
    { name: 'ETABS', level: 'Advanced', icon: 'fa-calculator' },
    { name: 'Project Mgmt', level: 'Senior', icon: 'fa-tasks' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Multi-Residential Working Plan',
    category: 'Structural Engineering',
    description: 'High-precision 1st to 2nd-floor working plans executed at 1:100 scale. Features optimized spatial distribution for multi-family residential complexes with a focus on load-bearing masonry and structural symmetry.',
    imageUrl: '/assets/plan.jpg', 
    details: ['Scale 1:100 Accuracy', 'Seismic Reinforcement', 'Spatial Optimization', 'BIM Integration']
  },
  {
    id: 'p2',
    title: 'Advanced MEP Schematic Legend',
    category: 'Systems Engineering',
    description: 'A comprehensive electrical fixture and MEP system legend. Includes detailed symbology for power distribution, HVAC controls, and emergency lighting systems integrated into modern commercial architectures.',
    imageUrl: '/assets/electrical.jpg', 
    details: ['Electrical Fixture Code', 'Load Balancing', 'HVAC Schematic', 'Global Safety Specs']
  },
  {
    id: 'p3',
    title: 'Urban Residential Front Elevation',
    category: 'Architectural Engineering',
    description: 'Modern front elevation rendering at 1:100 scale. Focuses on facade material science, structural verticality, and aesthetic modernism for multi-story residential units.',
    imageUrl: '/assets/elevation.jpg', 
    details: ['Facade Engineering', 'Material Palette', '1:100 Rendering', 'Vertical Load Calcs']
  }
];

export const SERVICES: Service[] = [
  {
    icon: 'fa-drafting-table',
    title: 'Structural Integrity',
    description: 'Precision-engineered blueprints and load analysis for high-rise and multi-family residential developments.'
  },
  {
    icon: 'fa-plug-circle-bolt',
    title: 'MEP Integration',
    description: 'Advanced Mechanical, Electrical, and Plumbing layouts designed for maximum utility and safety compliance.'
  },
  {
    icon: 'fa-vector-square',
    title: 'BIM & CAD Solutions',
    description: 'Digital twinning and detailed technical drawings utilizing state-of-the-art AutoCAD and Revit workflows.'
  },
  {
    icon: 'fa-vial-circle-check',
    title: 'Project Auditing',
    description: 'Comprehensive structural health monitoring and feasibility audits for existing and upcoming infrastructure.'
  }
];
