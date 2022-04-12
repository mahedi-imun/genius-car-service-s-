import React from 'react';
import expert1 from '../../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const experts =[ 
    {id:1,name:"Jack",img:expert1},
    {id:2,name:"Grayson",img:expert2},
    {id:3,name:"Scarlett",img:expert3},
    {id:4,name:"Hazel",img:expert4},
    {id:5,name:"Hudson",img:expert5},
    {id:6,name:"Willow",img:expert6},
]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h4 className='mt-5 mb-5 text-center text-primary'>Our  Experts</h4>
            <div className='row mx-auto g-5'>
            {
                experts.map(expert =><Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }

            </div>
        </div>
    );
};

export default Experts;