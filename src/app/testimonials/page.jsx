import React from 'react';
import Testimonial from "@/components/Testimonial";
import HowWorks from "@/components/HowWorks";
import Contacts from "@/components/Contacts";
import { Camp } from '@/components/Camp';

const Page = () => {
    return (
        <>  
            <Camp title={"Testimonial"} />
            <Testimonial/>
            <HowWorks/>
            <Contacts/>
        </>
    );
};

export default Page;