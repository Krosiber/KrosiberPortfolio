import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";

interface Section {
  type: string;
  img: string;
}

interface ProjectsData {
  title: string;
  net: string;
  resparoto: string;
  aerialvrtlpagesdev: string;
  sections: Section[];
}

const Projelerim: React.FC<ProjectsData> = ({ title, net, resparoto, aerialvrtlpagesdev, sections }) => {
  return (
    <section>
      <div id='projelerim'>
        <div className="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden mb-[10rem]">
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <button>{title}</button>
            </h1>
          </div>
        </div>

        <section className='flex flex-wrap gap-10 justify-center'>
          {sections.map((section, index) => {
            const linkHref =
              section.type === 'resparoto'
                ? `https://${resparoto}`
                : section.type === 'nettasec'
                  ? `https://${net}`
                  : `https://${aerialvrtlpagesdev}`;

            return (
              <Link href={linkHref} target='_blank' key={index}>
                <CardContainer className="inter-var w-[20rem] h-[13rem]">
                  <CardBody className="bg2 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      <h1 className='text-gray-200'>
                        {section.type === 'resparoto'
                          ? resparoto
                          : section.type === 'nettasec'
                            ? net
                            : aerialvrtlpagesdev}
                      </h1>
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={section.img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Link>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Projelerim;