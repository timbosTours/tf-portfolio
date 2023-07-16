'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    const [percent, setPercent] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
    const interval = setInterval(() => {
        setPercent((prevPercent) => (prevPercent >= 100 ? 100 : prevPercent + 1));
        }, 20);

        if (percent >= 99) {
        clearInterval(interval);
        setIsLoadingComplete(true);
        }

        return () => clearInterval(interval);
    }, [percent]);

    const getLoadingMessage = (percent: number) => {
        if (percent < 15) return "Initializing...";
        else if (percent < 35) return "JSX...";
        else if (percent < 55) return "Assets...";
        else if (percent < 75) return "Good Vibes...";
        else if (percent < 99) return "Animations";
        else return "Almost There!";
    };

    return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
            <div className="flex items-center w-96">
                <div className="h-9 flex-grow bg-zinc-800 border border-amber-100 relative">
                    <div className="absolute top-0 left-0 h-full w-full p-0.5">
                        <motion.div
                        className="bg-amber-100 h-full"
                        style={{ width: `${percent}%` }}
                        transition={{ duration: 2 }}
                        />
                    </div>
                </div>
                <div className="ml-4 text-amber-100 text-2xl">
                    {percent}%
                </div>
            </div>
            <div className="mt-2 text-amber-100 text-xl w-96 text-left">
                {getLoadingMessage(percent)}
            </div>
        </div>
    );
}
