import { useProductsByCategory } from "../../hooks/useProducts";
import ProductList from "./ProductList";

const CategoriesProduct = ({ category }) => {
  const { data, isLoading, error, isError } = useProductsByCategory(category);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default CategoriesProduct;
