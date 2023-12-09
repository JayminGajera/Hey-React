import ItemList from "./ItemList";
import {useState} from "react";
import {IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    // const [showItems,setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);     
        setShowIndex();   
    }

    return(
        <div className="categories">
            {/* Header */}
            <div className="categories-header">

                <div className="category-title" onClick={handleClick}>
                    <span><b>{data?.title} ({data?.itemCards?.length})</b></span>
                    <span className="drop-icon">{!showItems ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
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