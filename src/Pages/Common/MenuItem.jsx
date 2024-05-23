

const MenuItem = ({item}) => {

const {image , price , recipe , name } = item;



    return (
        <div className="flex  gap-3 mb-3">
           <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] rounded-2xl h-16" src={image} alt="" /> 
           <div>
            <h3 className="uppercase font-samu  text-xl ">{name}---------------</h3>
            <h3 className="font-samu">{recipe}</h3>
           </div>
           <div>
            <p className="font-samu text-yellow-600 text-lg ">${price}</p>
           </div>
        </div>
    );
};

export default MenuItem;