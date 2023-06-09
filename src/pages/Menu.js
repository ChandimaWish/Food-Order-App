import React from 'react'
import {Data} from '../Data/data';
import MenuItem from '../componenets/MenuItem';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
              {Data.map((menuItem,key)=>{
                return(<MenuItem
                   key={key}
                    image={menuItem.image} 
                    name={menuItem.name}
                    price={menuItem.price}
                    />
                    );
              })}
            </div>
        

    </div>
  )
}

export default Menu
