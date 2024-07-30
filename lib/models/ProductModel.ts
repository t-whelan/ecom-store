export type Product = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  price: number;
  brand: string;
  description: string;
  catergory: string;
  rating: number;
  numReviews: number;
  countInStock?: number;
  colors?: [];
  sizes?: [];
};
