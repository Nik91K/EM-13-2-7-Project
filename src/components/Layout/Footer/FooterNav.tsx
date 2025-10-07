import React from "react";
import { FOOTER_NAV } from "../../../fixtures";
import type { FooterNavProps } from "../../../types/Footer";
import { Link } from "react-router-dom";

const FooterNav:React.FC<FooterNavProps> = () => {
    const columns = [
        { title: 'Information', link: FOOTER_NAV.information },
        { title: 'PC Parts', link: FOOTER_NAV.pcParts },
        { title: 'Desktop PCs', link: FOOTER_NAV.desktopPcs },
        { title: 'Laptops', link: FOOTER_NAV.laptops },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {columns.map((column) => (
                <div key={column.title}>
                    <h3 className="text-[var(--text-color-second)]">{column.title}</h3>
                    <ul>
                        {column.link.map((links) => (
                            <li>
                                <Link 
                                    to={links.path}
                                    className="text-white  hover:underline text-sm"
                                >
                                    {links.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )

}

export default FooterNav
