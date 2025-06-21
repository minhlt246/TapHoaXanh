// app/(main)/category/[slug]/page.tsx
import { Metadata } from 'next';
import CategoryProducts from '@/components/category/CategoryProducts';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Danh mục ${params.slug} - Tạp Hóa Xanh`,
    description: `Danh sách sản phẩm thuộc danh mục ${params.slug}`,
  };
}

export default function CategoryPage({ params }: Props) {
  return (
    <div className="container">
      <CategoryProducts slug={params.slug} />
    </div>
  );
}
