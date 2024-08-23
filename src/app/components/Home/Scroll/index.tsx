import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import "./style.css"

const HeroScrollDemo = () => {
    return (
        <Link href="https://github.com/Krosiber">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-6xl mb-8 -tracking-tighter font-semibold text-black dark:text-white rainbow-text-loop">
                                Github

                            </h1>
                        </>
                    }
                >
                    <Image
                        src="/images/githubp.png"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />


                </ContainerScroll>
            </div></Link>
    );
}

export default HeroScrollDemo