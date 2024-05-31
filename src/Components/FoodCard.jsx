import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
  const { _id, image, price, recipe, name } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure  = useAxiosSecure();
  const  [ ,  refetch] = useCart();

  const handelAddToCArt = () => {
    if (user && user.email) {
      // sewd catcollection
    //   console.log(user.email, food);
      const cartItem = {
        menuItemID: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          let timerInterval;
          Swal.fire({
            title: `${name}-Successfully Add In the CART`,
            //   html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        //   refetch the cart
        refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please to login to add to the Cart 👻",
        text: "You Are not Logged In",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes ! Login 🎈",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="max-w-96 rounded-md shadow-2xl dark:bg-gray-50 dark:text-gray-800 hover:scale-[1.10] transition-all">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-center lg:ml-5 tracking-wide">
            {name}
          </h2>
          <p className="dark:text-gray-800">{recipe}</p>
          <p className="dark:text-gray-800">${price}</p>
        </div>
        <button
          onClick={handelAddToCArt}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600  border border-yellow-700 dark:text-gray-50"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
