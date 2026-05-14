"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {

    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                ${isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-black"
                }
            `}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;