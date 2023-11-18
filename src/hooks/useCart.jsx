import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    // tan stack queries
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data:cart = []} = useQuery({
         queryKey:['cart', user?.email],
         queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
         }
    })
    return[cart, refetch];
};

export default useCart;