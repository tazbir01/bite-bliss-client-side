import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import swal from "sweetalert";

const MyCart = () => {
  const addedProducts = useLoaderData()

  const handleRemovebutton = id => {
    console.log(id)
    swal({
      title: "Are you sure?",
      text: "If you remove, you can add this product next time!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://bite-bliss-server-3j7qx5ejq-tazbirs-projects.vercel.app/cart/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.deletedCount > 0) {
                swal("Poof! Your product has been removed from My cart!", {
                  icon: "success",
                });
              }
            })
        }
      });
  }
  return (
    <div className="mt-24">
      <div className="max-w-4xl mx-auto grid  gap-5 mb-10">
        {
          addedProducts.map(product => <div key={product._id} className="flex items-center bg-base-100 shadow-xl">
            <figure><img className="w-96 h-40" src={product.image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>Price: {product.price}TK</p>
              <p>Type: {product.type}</p>
            </div>
            <div className="card-actions md:justify-end mr-3 md:mr-5">
              <button onClick={() => handleRemovebutton(product._id)} className="btn btn-primary">Remove</button>
            </div>
          </div>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;