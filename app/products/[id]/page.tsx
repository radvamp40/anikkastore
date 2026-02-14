import ProductDetails from "@/app/components/shop/product/ProductDetails";
import { ProductDetailsI } from "@/types/product.types";

async function getProductDetailsById(
  id: string,
): Promise<ProductDetailsI | null> {
  const resp = await fetch(`https://dummyjson.com/products/${id}`);

  if (!resp.ok) {
    return null;
  }

  return resp.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const pdpParams = await params;
  const productId = pdpParams.id;
  const productDetails = await getProductDetailsById(productId);

  if (!productDetails) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${productDetails.title} | Twinkle Threads`,
    description: productDetails.description,
    openGraph: {
      title: productDetails.title,
      description: productDetails.description,
      images: [productDetails.thumbnail],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const pdpParams = await params;
  const productId = pdpParams.id;
  const productDetails = await getProductDetailsById(productId);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ProductDetails product={productDetails} />
    </div>
  );
}
