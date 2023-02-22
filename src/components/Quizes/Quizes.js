import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Quizes = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(data => setData(data?.data))
    }, [id]);


    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className="max-w-sm mx-auto mb-10">
                    <img className='w-40 mx-auto mb-2' src={data?.logo} alt={data?.name} />
                    <h2 className="text-2xl font-semibold text-white text-center">{data?.name}</h2>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        data?.questions?.map(qt => <div className='bg-gray-600 text-white rounded-md p-4'
                        >
                            <div>
                                <h2 className='text-xl font-semibold mb-3'>{qt?.question}</h2>
                                <div className='grid grid-cols-2 gap-5'>
                                    {
                                        qt?.options?.map(op => <span className='bg-gray-400 p-2 rounded-sm'>{op}</span>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizes;