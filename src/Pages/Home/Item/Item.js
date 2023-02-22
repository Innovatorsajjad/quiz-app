import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src={item.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Bit yourself</p>
                    <div className="card-actions justify-end">
                        <Link to={`/${item.id}`} className="btn btn-primary">Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;