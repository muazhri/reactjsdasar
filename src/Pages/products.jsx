import CardProduct from "../Components/Fragments/CardProduct";

const Products = [
  {
    id: 1,
    image: "/public/image/shoes1.jpg",
    name: "Sepatu baru",
    harga: "Rp. 200.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quia error dolores architecto unde, excepturi vitae asperiores dolorum dicta!",
  },
  {
    id: 2,
    image: "/public/image/shoes2.jpg",
    name: "Sepatu Biru",
    harga: "Rp. 500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quia error dolores architecto unde, excepturi vitae asperiores dolorum dicta!",
  },  
];

const ProductPage = () => {
  return (
    <div className="flex items-center justify-center h-screen py-5">
      {Products.map((product) => (
        <CardProduct>
          <CardProduct.Image image={product.image}></CardProduct.Image>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer harga={product.harga}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
