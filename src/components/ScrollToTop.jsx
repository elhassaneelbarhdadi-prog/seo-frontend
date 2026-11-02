
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        console.log("ROUTE MODIFIÉE :", pathname);

        window.scrollTo(0, 0);

        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            console.log("POSITION :", window.scrollY);
        });
    }, [pathname, search]);

    return null;
}