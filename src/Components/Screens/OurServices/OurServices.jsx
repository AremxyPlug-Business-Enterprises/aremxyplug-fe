import React from 'react';
import OurServiceHeader from './OurServiceHeader';
import OurServiceCard from './OurServiceCard';
import bgImage from './images/bgImage.avif'
import { ourServiceDetails } from './data/data';

const OurServices = () => {
  return (
    <div>
        <div className='w-full px-[5%] pt-[15%] lg:pt-[5%] md:pt-[5%]'>
            <OurServiceHeader/>
        </div>
        <div className="w-full flex flex-col py-10 lg:gap-[60px] gap-[20px] 
        px-[5%] bg-cover bg-center bg-no-repeat"
         style={{backgroundImage:`url(${bgImage})`}}>
          
                
                    {ourServiceDetails.map((data) => (
                        <OurServiceCard key={data.id} cardDetails={data}/>
                    ))}
                    {/* check the data file for the names used to link each of the service page links on explore */}
                
            
        </div>
    </div>
  );
}

export default OurServices;
