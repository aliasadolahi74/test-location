"use client";
import React from "react";
import { useCurrentLocation } from "../useCurrentLocation";
import { useRouter } from "next/navigation";

const Page = () => {
    const location = useCurrentLocation();
    const router = useRouter();
    const handleBtnClick = () => {
        router.replace("/test2");
    };

    return (
        <div>
            <button onClick={handleBtnClick}>Test 2</button>
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
