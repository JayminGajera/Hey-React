import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data}) => {

    const [showItems,setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);        
    }

    return(
        <div className="categories">
            {/* Header */}
            <div className="categories-header">

                <div className="category-title" onClick={handleClick}>
                    <span><b>{data?.title} ({data?.itemCards?.length})</b></span>
                    <span>▽</span>
                </div>

                 {/* Accordian Body */}
                 {
                    showItems && <ItemList items={data?.itemCards}/>
                 }
                
            </div>
        </div>
    );
}

export default RestaurantCategory;