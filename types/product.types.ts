export interface ProductCategoryI {
  slug: string;
  name: string;
  url: string;
}

export interface ProductDetailsI {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: ReviewI[]
  returnPolicy: string
  minimumOrderQuantity: number
  images: string[]
  thumbnail: string
}

export interface ReviewI {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}