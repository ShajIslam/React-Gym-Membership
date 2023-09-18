
import Feature from '../PriceOptions/Feature/Feature';


const PriceOption = ({priceOption}) => {
    

    const {category, description, price, features} = priceOption;
    

    return (
        <div>
           <div className=" bg-lime-300 p-5 flex flex-col w-80 mx-auto">
           
           <div>
           <span className="text-5xl text-center">{price}<span className="text-sm">/mon</span></span>
            <h1 className="text-2xl font-bold mt-2">{category}</h1>
            <p className="mt-5 font-bold">{description}</p>
           </div>
            
            <div className="mt-5 flex-grow">
                {
                    features.map((feature, idx) =><Feature key={idx} feature ={feature}></Feature>)
                }
            </div>
            <button className="btn btn-success w-full mt-5 text-white hover:bg-lime-500">Select</button>
            
           </div>
        </div>
    );
};

export default PriceOption;