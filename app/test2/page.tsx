"use client";
import React from "react";
import { useCurrentLocation } from "../useCurrentLocation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
    const location = useCurrentLocation();
    const router = useRouter();
    const handleBtnClick = () => {
        router.replace("/test1");
    };

    return (
        <div>
            <button onClick={handleBtnClick}>Test 1 Button </button>
            <Link href="/test1">Test 1 Link</Link>
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
