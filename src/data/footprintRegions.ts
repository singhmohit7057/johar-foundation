export interface FootprintRegion {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const footprintRegions: FootprintRegion[] = [
  {
    id: 'JH',
    name: 'Jharkhand',
    tagline: 'Core Operational Hub',
    description: 'Our primary base running extensive Self-Help Group (SHG) networks, sports academies, and deep-root cultural heritage protection setups.',
    highlights: ['15+ Districts Engaged', '350+ Active SHGs', 'Digital Training Labs'],
  },
  {
    id: 'OR',
    name: 'Odisha',
    tagline: 'Eco-Tourism & Livelihoods',
    description: 'Focusing on sustainable community-owned tourism modules across coastal and tribal belts coupled with specialized artisanal trade development.',
    highlights: ['Artisanal Clusters', 'Maternal Care Outposts', 'Tourism Cooperatives'],
  },
  {
    id: 'WB',
    name: 'West Bengal',
    tagline: 'Youth Leadership Foundations',
    description: 'Empowering rural and semi-urban communities via tech literacy programs, primary health camps, and structured sports advancement tracks.',
    highlights: ['Border-block Outreach', 'Vocational Hubs', 'Community Clinics'],
  },
  {
    id: 'BR',
    name: 'Bihar',
    tagline: 'Health & Capacity Elevation',
    description: 'Deploying grassroots family welfare workshops, basic educational pathways, and alternative micro-livelihoods frameworks for women.',
    highlights: ['Rural Literacy Centers', 'Health Awareness Camps', 'Skill Modules'],
  },
  {
    id: 'CG',
    name: 'Chhattisgarh',
    tagline: 'Tribal Advocacy & Resilience',
    description: 'Partnering closely with indigenous pockets to map forest rights assets, preserve generational craftsmanship, and introduce localized farming methods.',
    highlights: ['5 Indigenous Belts', 'Forest Produce Collectives', 'Rights Workshops'],
  },
];
