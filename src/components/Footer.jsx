
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const { pathname } = useLocation();

    // Ne pas afficher le footer dans le tableau de bord privé
    if (pathname.includes("/dashboard")) {
        return null;
    }

    const segments = pathname.split("/").filter(Boolean);
    const supportedLangs = ["fr", "en", "es", "de"];
    const lang = supportedLangs.includes(segments[0])
        ? segments[0]
        : "fr";

    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* IDENTITÉ */}
                    <div>
                        <Link
                            to={`/${lang}`}
                            className="text-white text-xl font-bold"
                        >
                            Referencia SEO
                        </Link>

                        <p className="text-sm leading-relaxed mt-3">
                            Des outils SEO et un annuaire professionnel
                            pour développer votre visibilité en ligne.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h2 className="text-white font-semibold mb-3">
                            Navigation
                        </h2>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to={`/${lang}`} className="hover:text-white">
                                    Accueil
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/${lang}/annuaire`}
                                    className="hover:text-white"
                                >
                                    Annuaire professionnel
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/${lang}/pricing`}
                                    className="hover:text-white"
                                >
                                    Abonnements
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* PROFESSIONNELS */}
                    <div>
                        <h2 className="text-white font-semibold mb-3">
                            Professionnels
                        </h2>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to={`/${lang}/referencer-mon-entreprise`}
                                    className="hover:text-white"
                                >
                                    Référencer mon entreprise
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/${lang}/referencement-local`}
                                    className="hover:text-white"
                                >
                                    Référencement local
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h2 className="text-white font-semibold mb-3">
                            Besoin d'aide ?
                        </h2>

                        <p className="text-sm mb-4">
                            Une question sur nos abonnements ou nos services ?
                            Contactez-nous.
                        </p>

                        <Link
                            to={`/${lang}/contact`}
                            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition"
                        >
                            Nous contacter
                        </Link>

                        <a
                            href="mailto:elhassane.elbarhdadi@gmail.com"
                            className="block mt-3 text-sm hover:text-white break-all"
                        >
                            elhassane.elbarhdadi@gmail.com
                        </a>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    © {new Date().getFullYear()} Referencia SEO.
                    Tous droits réservés.
                </div>

            </div>
        </footer>
    );
}
