import React from 'react';
import AllProject from "@/components/AllProject";
import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import { Camp } from '@/components/Camp';

const Page = () => {
    return (
        <>
            <Camp title={"Projects"} />
            <AllProject/>
            <Brands/>
            <Contacts/>
        </>
    );
};

export default Page;