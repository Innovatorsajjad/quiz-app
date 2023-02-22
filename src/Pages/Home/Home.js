import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from './Item/Item';

const Home = () => {
    const items = useLoaderData()
    
    return (
        <div className='itemsContainer container mx-auto '>
            <h1 className="text-center text-3xl text-white">All Items are here</h1>
            <div className="itemFetch grid grid-cols-4 gap-10 mt-40">
            {
                items?.data?.map(item =><Item
                key={item.id}
                item={item}
                ></Item>)
            }
            </div>
        </div>
    );
};

export default Home;