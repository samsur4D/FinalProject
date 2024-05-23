import React from 'react';

const FoodCard = ({item}) => {


    const {image , price , recipe , name } = item;




    return (
        <div className="max-w-96 rounded-md shadow-2xl dark:bg-gray-50 dark:text-gray-800 hover:scale-[1.10] transition-all">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold text-center lg:ml-5 tracking-wide">{name}</h2>
                <p className="dark:text-gray-800">{recipe}</p>
                <p className="dark:text-gray-800">${price}</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600  border border-yellow-700 dark:text-gray-50">Add To Cart</button>
        </div>
    </div>
    );
};

export default FoodCard;