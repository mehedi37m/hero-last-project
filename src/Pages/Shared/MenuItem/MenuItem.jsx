

const MenuItem = ({item}) => {
   
    const {name, price, image, recipe} = item;

    return (
        <div className="flex space-x-5">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}-------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;