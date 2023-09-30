import React from 'react';
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
import { Camp } from '@/components/Camp';

const Page = () => {
    return (
        <>
            <Camp title={"Services"} />
            <Services/>
            <Contacts/>
            <Brands/>
        </>
    );
};

export default Page;