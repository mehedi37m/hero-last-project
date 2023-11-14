import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

 const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
        console.log(result.user)
    })
    .catch(errors => {
        console.log(errors)
    })
 }

 console.log(watch("example"))

    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign UP Now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name="name" {...register("name",{ required: true })}
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
                 {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email" {...register("email",{ required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                 {errors.email && <span className="text-red-600 font-bold">email is required</span>}
              </div>
              <div className="form-control"> 
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password" {...register("password",{ required: true,
                     minLength:6,
                      maxLength:20,
                      pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

                     })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                 {errors.password?.type === 'required' && <span className="text-red-600 font-bold">Password required</span>}
                 {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold">Password must be 6 </span>}
                 {errors.password?.type === 'maxLength' && <span className="text-red-600 font-bold">Password less then 20 </span>}
                 {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold">Password uppercase , lowercase and number and special keyword </span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign UP" />
              </div>
            </form>
            <p><small>New Here? <Link to='/login'>Already an Account</Link></small></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;