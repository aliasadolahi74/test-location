"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {useCurrentLocationEnergy} from "@/app/useCurrentLocationEnergy";

const Page = () => {
    const {location} = useCurrentLocationEnergy({latitude: 0, longitude: 0});
    const router = useRouter();
    const handleBtnClick = () => {
        router.replace("/test3");
    };

    return (
        <div>
            <button onClick={handleBtnClick}>Test 3 button</button>
            <Link href="/test3">Test 3 Link</Link>
            <div>
                <span>Latitude</span>
                <span>{location?.latitude}</span>
            </div>
            <div>
                <span>Longitude</span>
                <span>{location?.longitude}</span>
            </div>
        </div>
    );
};

export default Page;
