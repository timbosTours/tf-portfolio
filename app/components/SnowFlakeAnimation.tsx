'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { BsSnow, BsSnow2, BsSnow3 } from 'react-icons/bs'
import { FaSnowflake, FaRegSnowflake } from 'react-icons/fa';
import { IoIosSnow, IoMdSnow } from 'react-icons/io'
import { IoSnow, IoSnowOutline, IoSnowSharp } from 'react-icons/io5'

export default function SnowFlakeAnimation() {
    const [animationKey, setAnimationKey] = useState(0)
    const { theme } = useTheme()
    const snowflakes = [BsSnow, BsSnow2, BsSnow3, FaSnowflake, FaRegSnowflake, IoIosSnow, IoMdSnow, IoSnow, IoSnowOutline, IoSnowSharp];

    const snowflakeStyles = Array.from({ length: 10 }, () => ({
        delay: Math.random() * 5,
        left: `${10 + Math.random() * 80}%`,
    }));

    useEffect(() => {
        if (theme === 'dark') {
            setAnimationKey((prevKey) => prevKey + 1);
        }
    }, [theme])

    return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, pointerEvents: 'none' }}>
        {Array.from({ length: 10 }, (_, index) => {
            const SnowFlakeIcon = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            const delay = Math.random() * 5; 
            const duration = 10 + Math.random() * 10; 

            return (
                <motion.div
                key={`${index}-${animationKey}`}
                custom={{ delay, duration }}
                variants={variants}
                initial="hidden"
                animate="visible"
                style={{
                    position: 'absolute',
                    left: `${10 + Math.random() * 80}%`, 
                    zIndex: 1000,
                }}
                >
                <div className="bg-gradient-to-t from-white via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent" style={{ color: '#d0ecfc', fontSize: '64px' }}>
                    <SnowFlakeIcon />
                </div>
                </motion.div>
            );
        })}
        </div>
    );
};
    
    const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: (custom: { delay: number; duration: number }) => ({
        opacity: 1,
        y: window.innerHeight,
        transition: {
        delay: custom.delay,
        duration: custom.duration,
        repeat: 1,
        repeatType: 'loop' as const,
        ease: "linear",    
        },
    }),
};