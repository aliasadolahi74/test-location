"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const AzadiSquareLocation = { latitude: 35.6997331, longitude: 51.3380361 };

export const useCurrentLocation = () => {
    const pathname = usePathname();
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            return await new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                        resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                    },
                    () => {
                        setLocation(AzadiSquareLocation);
                        resolve(AzadiSquareLocation);
                    },
                    { timeout: 2000 },
                );
            });
        } else {
            setLocation(AzadiSquareLocation);
            return AzadiSquareLocation;
        }
    };

    useEffect(() => {
        getCurrentLocation();
    }, [pathname]);
    return location;
};
