import React ,{useState,useEffect} from 'react';
import { FaBriefcase, FaSmile, FaCoffee,FaChartLine} from 'react-icons/fa';
import './Counter.css';

const Counter =()=>{
    const [counts,setCounts]=useState({
        Projects:0,
        Clients:0,
        Coffee:0,
        Experience:0

    });

    const target={
        Projects:10,
        Clients:568,
        Coffee: 478,
        Experience:3
    };

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCounts(preCount=>({
                Projects:Math.min(preCount.Projects+1,target.Projects),
                Clients:Math.min(preCount.Clients+3,target.Clients),
                Coffee:Math.min(preCount.Coffee+2,target.Coffee),
                Experience:Math.min(preCount.Experience+4,target.Experience)
                
            }))
        },20);

        return ()=> clearInterval(interval);
    },[]);

    const items=[

        {icon:FaBriefcase, label:'PROJECTS COMPLETE', value: counts.Projects},
        {icon:FaSmile, label:'HAPPY CLIENTS', value: counts.Clients},
        {icon:FaCoffee, label:'CUPS OF COFFEE', value: counts.Coffee},
        {icon:FaChartLine, label:'EXPERIENCE', value: counts.Experience},
    ];

    return (
        <div className='counter-container'>
            {items.map((item,index)=>(
            <div key={index} className='counter-item'>
                <item.icon className="counter-icon"/>
                <div className='counter-value'>{item.value}</div>
                <div className='counter-label'>{item.label}</div>
            </div>
            ))};
        </div>
    )


}
export default Counter;