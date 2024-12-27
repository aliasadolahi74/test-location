"use client";
import {useEffect, useState} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCurrentLocationEnergy = (initialLocation: any) => {
    const AzadiSquareLocation = {latitude: 35.6997331, longitude: 51.3380361};
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(initialLocation);

    const handleSuccess = (position: GeolocationPosition) => {
        setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
    };

    const handleError = (error: GeolocationPositionError) => {
        if (error.code === 1) {
            alert("دسترسی به موقعیت مکانی نیاز می‌باشد.");
        }
        if (error.code === 2) {
            alert("خطایی رخ داده است لطفا بعدا تلاش کنید.");
        }
        if (error.code === 3) {
            alert("در حال حاضر موقعیت مکانی شما یافت نشد.")
        }
        setLocation(AzadiSquareLocation);
    };

    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            return await new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        handleSuccess(position);
                        resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
                    },
                    (error) => {
                        handleError(error);
                        resolve(AzadiSquareLocation);
                    },
                    {timeout: 2000},
                );
            });
        } else {
            alert("موقعیت مکانی در این دستگاه پشتیبانی نمی‌شود.")
            return AzadiSquareLocation;
        }
    };

    const getWatchLocation = async () => {
        if (navigator.geolocation) {
            return await new Promise((resolve) => {
                const id = navigator.geolocation.watchPosition(
                    (position) => {
                        handleSuccess(position);
                        resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
                        navigator.geolocation.clearWatch(id);
                    },
                    (error) => {
                        handleError(error);
                        resolve(AzadiSquareLocation);
                    },
                    {timeout: 2000},
                );
            });
        } else {
            alert("موقعیت مکانی در این دستگاه پشتیبانی نمی‌شود.")
            return AzadiSquareLocation;
        }
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return {location, getCurrentLocation, getWatchLocation};
};
