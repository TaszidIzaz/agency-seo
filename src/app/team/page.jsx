import React from 'react';
import Team from "@/components/Team";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
import { Camp } from '@/components/Camp';

const Page = () => {
    return (
        <>
            <Camp title={"Team"} />
            <Team/>
            <Contacts/>
            <Brands/>
        </>
    );
};

export default Page;