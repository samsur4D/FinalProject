import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PiListNumbersFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handelMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is Admin Now 💙`,
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };

  const handelDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[#3498db] p-10 rounded-xl">
      <div className="flex justify-evenly my-4  underline ">
        <h2 className="text-2xl font-bold">All Users </h2>
        <h2 className="text-2xl font-bold">Total Users : {users.length} </h2>
      </div>
      {/* ------------- */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>
                <PiListNumbersFill className="text-lg" />
              </th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Role</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody className="mt-5">
            {/* row 1 */}
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handelMakeAdmin(user)}>
                      <HiUserGroup className="text-lg " />
                    </button>
                  )}
                </td>
                <td onClick={() => handelDeleteUser(user)}>
                  <RiDeleteBin5Fill className="text-lg text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ------------- */}
    </div>
  );
};

export default AllUsers;
