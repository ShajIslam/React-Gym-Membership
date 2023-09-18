import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
          {
            "id": 1,
            "category": "Basic Membership",
            "description": "Access to basic gym facilities and equipment",
            "price": 29.99,
            "features": [
              "Access to cardio machines",
              "Access to weightlifting equipment",
              "Locker room access"
            ]
          },
          {
            "id": 2,
            "category": "Standard Membership",
            "description": "Access to gym facilities, equipment, and group classes",
            "price": 49.99,
            "features": [
              "Access to cardio machines",
              "Access to weightlifting equipment",
              "Access to group fitness classes",
              "Locker room access"
            ]
          },
          {
            "id": 3,
            "category": "Premium Membership",
            "description": "Access to all gym facilities, equipment, group classes, and personal trainer sessions",
            "price": 79.99,
            "features": [
              "Access to cardio machines",
              "Access to weightlifting equipment",
              "Access to group fitness classes",
              "Access to personal trainer sessions",
              "Locker room access",
              "Nutritional guidance"
            ]
          },
          
        ]
      
      
    
      
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
              priceOptions.map(option => <PriceOption key={option.id} priceOption={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;