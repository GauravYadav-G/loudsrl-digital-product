import PortfoliteServiceDetail from '@/views/PortfoliteServiceDetail';
import { SERVICES } from '@/lib/data';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} | ARKA Technovation` : 'Service | ARKA Technovation',
    description: service?.short || 'Enterprise digital engineering and growth.',
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PortfoliteServiceDetail initialSlug={slug} />;
}
