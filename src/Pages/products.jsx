import CardProduct from "../Components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex items-center justify-center h-screen py-5">
      <CardProduct>
        <CardProduct.Image image="/public/image/shoes1.jpg"></CardProduct.Image>
        <CardProduct.Body title="Sepatu baru">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          magni quia error dolores architecto unde, excepturi vitae asperiores
          dolorum dicta!
        </CardProduct.Body>
        <CardProduct.Footer harga="Rp. 200.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
