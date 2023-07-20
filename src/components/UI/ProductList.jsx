const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </>
  );
};

export default ProductList;
