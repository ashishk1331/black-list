import Button from "./Button";
import { formatDistance, subDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header(props) {

    return (
        <header className="flex flex-wrap items-center gap-3 mt-24">
            <Image
                src="https://i.pinimg.com/564x/47/06/6e/47066e5306a4df38d6adfc36e97bd26a.jpg"
                width={520}
                height={520}
                alt="Sasuke"
                className="rounded-full w-48 h-48 aspect-square border-4 border-black bg-purple"
            />
            <div className="flex flex-col order-last w-full sm:w-fit sm:order-none items-left gap-1 mt-auto mb-1">
                <h1 className="text-4xl font-bold tracking-wider text-purple uppercase">
                    Black List
                </h1>
                <p className="text-zinc-600">
                    last edited
                    {" "}
                    {formatDistance(new Date(), new Date(props.last_edited), {
                        addSuffix: true,
                    })}
                </p>
            </div>
        </header>
    );
}
