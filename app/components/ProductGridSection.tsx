import * as React from "react";
import ProductCard, { IProductCardProps } from "./ProductCard";

interface IProductGridSectionProps {}

const ProductGridSection: React.FunctionComponent<
  IProductGridSectionProps
> = async (props) => {
  const data = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest"
  );
  const response = await data.json();
  console.log(response);
  const products = response.data.map((product) => ({
    id: product.product_id,
    name: product.name,
    colors: product.colors,
    images: product.images.map((image) => ({
      color: image.color,
      imageUrl: image.image_url,
    })),
    inventory: product.inventory.map((inventoryOption) => ({
      color: inventoryOption.color,
      listPrice: inventoryOption.list_price,
      salePrice: inventoryOption.sale_price,
      isInStock: inventoryOption.sold < inventoryOption.stock,
    })),
  }));

  console.log(products);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1 className="font-semibold text-2xl text-neutral-900">
          Latest Arrivals
        </h1>
        <button className="flex justify-center items-center gap-1.5 bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 gap-x-8 my-8 tablet:grid-cols-2 desktop:grid-cols-4">
        {products.map((product: IProductCardProps) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            colors={product.colors}
            images={product.images}
            inventory={product.inventory}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGridSection;
