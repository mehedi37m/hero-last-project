import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-7 my-14">
            <SectionTitle heading={'Featured Item'} subHeading={'check it out'}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-10 px-36">
               <div>
               <img src={img} alt="" />
               </div>
               <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, recusandae nostrum illum magnam libero sit doloremque, vero possimus nisi eveniet nam laboriosam! Consequatur, blanditiis fugit itaque perspiciatis maxime, fugiat, quisquam excepturi et aut non assumenda? Culpa, impedit! Autem veritatis saepe error nesciunt, illo expedita consectetur recusandae, inventore possimus molestias dignissimos. </p>
                <button className="btn btn-outline border-0 border-b-4 mt-6">Order Now</button>
               </div>
            </div>
        </div>
    );
};

export default Featured;