import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from 'valtio';

import state from "../store";
import { CustomButton } from '../components';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";
import { useEffect } from 'react';
const Home = () => {

    const snap = useSnapshot(state);

    useEffect(() => {
    }, [])

    return (
        <>
            <AnimatePresence>
                {
                    snap.intro && (
                        <motion.div className='home' {...slideAnimation('left')}>
                            <motion.header {...slideAnimation("down")}>
                                <img
                                    src='./threejs.png'
                                    alt='logo'
                                    className='w-8 h-8 object-contain'
                                />
                            </motion.header>
                            <motion.div className='home-content' {...headContainerAnimation}>
                                <motion.div {...headTextAnimation}>
                                    <h1 className='head-text'>
                                        Hemen <br className='xl:block hidden' />
                                        Başla.
                                    </h1>
                                </motion.div>

                                <motion.div
                                    {...headContentAnimation}
                                    className='flex flex-col gap-5'
                                >
                                    <p className='max-w-md font-normal text-gray-600 text-base'>
                                        Kendi tişörtünüzü oluşturun.
                                    </p>

                                    <CustomButton
                                        type="filled"
                                        title="Özelleştir"
                                        handleClick={() => state.intro = false}
                                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Home