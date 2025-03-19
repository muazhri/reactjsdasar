import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";

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

const email = localStorage.getItem("email");

const HandleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductPage = () => {
  return (
    <div>
        <div className="flex justify-end items-center px-10 py-5 bg-gray-800 text-white shadow-lg">
            <h3>{email}</h3>
            <Button style="bg-amber-800 ml-5" onClick={HandleLogout}>Logout</Button>
        </div>
      <div className="flex items-center justify-center h-screen py-5">
        {Products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Image image={product.image}></CardProduct.Image>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer harga={product.harga}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
