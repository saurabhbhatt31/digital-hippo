'use client'
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { NavNew } from "./NavNew";

const NavItems = () => {

    const [activeIndex, SetActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null
    const navRef = useRef<HTMLDivElement | null>(null)
    useOnClickOutside(navRef, () => SetActiveIndex(null))

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                SetActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)
        return () => removeEventListener('keydown', handler)

    }, [])

    return (
        <>

            <div className="flex gap-4 h-full" ref={navRef}>

                {PRODUCT_CATEGORIES.map((category, index) => {

                    const handleOpen = () => {
                        if (activeIndex == index) {
                            SetActiveIndex(null)
                        } else {
                            SetActiveIndex(index)
                        }
                    }

                    const isOpen = index == activeIndex
                    return (
                        <NavItem
                            category={category}
                            handleOpen={handleOpen}
                            isOpen={isOpen}
                            key={category.value}
                            isAnyOpen={isAnyOpen}
                            close={() => close()} />
                    )

                })}
                <NavNew>

                </NavNew>
            </div>
        </>
    )

}

export default NavItems;