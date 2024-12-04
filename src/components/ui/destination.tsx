'use client';

import type { DestinationTypes } from '@components/types';
import Image from 'next/image';
import Link from 'next/link';

export default function DestinationCard({ thumbnail, slug, name, location }: DestinationTypes) {
  return (
    <Link
      href={slug}
      className="group/item 4xl:h-[500px] relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] 2xl:h-[420px]"
    >
      <Image
        src={thumbnail}
        alt="destination"
        fill
        sizes="(min-width: 320) 100vw, 100vw"
        className="bg-gray-lighter relative z-0 rounded-xl object-cover transition-all duration-500 group-hover/item:scale-110"
      />
      <div className="from-gray-dark/90 to-gray-dark/0 3xl:from-gray-dark/60 absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t transition-all duration-500 group-hover/item:h-1/2"></div>
      <div className="3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12 relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7">
        <h3 className="3xl:text-2xl text-xl font-bold leading-7 text-white">{name}</h3>
        <p className="3xl:pt-1.5 4xl:text-lg text-sm font-normal leading-7 text-white lg:text-base">{location}</p>
      </div>
    </Link>
  );
}
