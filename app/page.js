"use client"
import { useState } from 'react';
import Box from './Box.js';
import Count_color from './Count_color.js';
import Color_button from './Color_button.js'

const Page= () => {
    const [color_data, setColor_data] = useState([
        {
            color_name:'red',
            color_count:0
        },
        {
            color_name:'green',
            color_count:0
        },
        {
            color_name:'blue',
            color_count:0
        },
        {
            color_name:'yellow',
            color_count:0
        }
    ]);

    const [color, setColor] = useState('white')
    
    const handleChangeColor = (color_n) =>{
        setColor(color_n)
        const newArray=[...color_data]
        const color_object = newArray.find((item) => item.color_name==color_n);
        color_object.color_count+=1
        setColor_data(newArray)  
    };
      
    return (
      <>
         <Box pgcolor={color}/>
         
         <div className='color_count1'>
            {color_data.map((color) => (
                <Count_color 
            	    data={color} 
                />
            ))}	
         </div>
         
         <div className='color_button1'>
            {color_data.map((color) => (
                <Color_button 
                    data = {color} 
            	    handleChangeColor = {() => handleChangeColor(color.color_name)}
                />
            ))}
         </div>
         
      </>
      
    );
      
};
export default Page;
