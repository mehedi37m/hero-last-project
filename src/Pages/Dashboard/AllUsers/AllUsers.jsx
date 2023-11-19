
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

  
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    const handleDelete = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {           
              axiosSecure.delete(`/users/${user._id}`)
              .then(res => {  
                 refetch();
                if(res.data.deleteCount > 0){  
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                     
                }
              })
            }
          });

    }

    return (
        <div>
            <div className='flex justify-around gap-5'>
                <h1 className='text-3xl font-bold'>All User : </h1>
                <h1 className='text-3xl font-bold'>Total User : {users.length} </h1>
            </div>

            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, index) =>  <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
       { user.role === 'admin' ? 'Admin' : <button onClick={() =>handleMakeAdmin(user)} className="btn btn-lg bg-orange-600">
                    <FaUsers className="text-white text-xl"></FaUsers>
                  </button>}
        </td>
        <td>
        <button onClick={() =>handleDelete(user)} className="btn btn-ghost btn-xs">
                    <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                  </button>
        </td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
            </div>

        </div>
    );
};

export default AllUsers;