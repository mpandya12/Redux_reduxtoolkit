
import React from 'react';
import { useSelector } from 'react-redux';

function ItemList() {
  const items = useSelector((state) => state.items.items);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
            <>
             <li key={index}>{item.name}</li>
          <li key={index}>{item.username}</li>
          <li key={index}>{item.phone}</li>
         
            </>
         
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
