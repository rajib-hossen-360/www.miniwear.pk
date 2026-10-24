import { notFound } from 'next/navigation';
import CollectionListing from '@/components/collection-listing';
import { collections } from '@/lib/collections';

export function generateStaticParams() {
  return collections.map(({ slug }) => ({ slug }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections.find(({ slug }) => slug === params.slug);

  if (!collection) {
    notFound();
  }

  return <CollectionListing collection={collection} />;
}
