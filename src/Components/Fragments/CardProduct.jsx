import Button from "../Elements/Button";

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        {children}        
       </div>
    )

}

const Body = (props) => { 
    const {children, title} = props ;  
    return  (
        <div className="px-5 pb-5">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight  dark:text-white">
            {title}
          </h5>
          <p className="text-slate-300 mt-2 text-sm">
            {children}
        </p>
        </a>
      </div>
    );  
  
  };


const Image = (props) => {
    const {image} = props
    return (
        <a href="">
          <img
            src={image}
            alt=""
            className="p-8 rounded-t-lg"
          />
        </a>
    )
}  


const Footer = (props) => {
    const {harga} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-3xl font-bold text-white">{harga}</span>
            <Button style="bg-amber-800">Add to cart</Button>
        </div>
    )
}


CardProduct.Body = Body
CardProduct.Image = Image
CardProduct.Footer = Footer

export default CardProduct