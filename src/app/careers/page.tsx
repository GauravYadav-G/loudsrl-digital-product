import type { Metadata } from 'next';
import PortfoliteCareers from '@/views/PortfoliteCareers';

export const metadata: Metadata = {
  title: 'Careers & Engineering Roles',
  description:
    'Join our full-time in-house team in Sector 63, Noida. Opportunities in Next.js development, SEO engineering, UX architecture, and corporate cinema.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers & Engineering Roles | ARKA Technovation',
    description:
      'Build serious digital products and growth engines with ARKA Technovation. Explore full-time roles in Noida HQ.',
    url: '/careers',
    type: 'website',
  },
};

export default function CareersPage() {
  return <PortfoliteCareers />;
}
