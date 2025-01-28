'use client';
import Image from "next/image";
import React from "react";
import {motion} from 'motion/react'

const Skill =({directionLeft})=>{
    return(
        <div className="group relative flex cursor-pointer">
            {/* <motion.div
                initial={{
                     x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}>
                <Image/>
            </motion.div>

            sjill        */}

        </div>
    );
};

export default Skill;



