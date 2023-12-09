

const ItemList = ({ items }) => {
  console.log("items of categories ", items);

  return (
    <div>
      {items?.map((item) => (
        <div key={item?.card?.info?.id} className="category-item">
          <div className="category-item-name">
            <div className="category-item-ti">
                <span>{item?.card?.info?.name}</span>
                <span>{item?.card?.info?.price ? `₹${item?.card?.info?.price/100}` : `₹${item?.card?.info?.defaultPrice/100}`}</span>
                <p className="category-item-desc">{item?.card?.info?.description}</p>
            </div>
            <div>
                <div className="cate-btn">
                    <div className="add-btn">Add +</div>
                </div>
                <img className="category-item-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item?.card?.info?.imageId}`}/>
                
            </div>
                
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
