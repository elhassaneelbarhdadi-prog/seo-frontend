
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ReferencerEntreprise() {
    const { lang = "fr" } = useParams();

    const title =
        "Annuaire professionnel : faites connaître votre entreprise | Referencia SEO";

    const description =
        "Commerçants, artisans et entreprises : faites connaître votre activité grâce à l'annuaire professionnel Referencia SEO et développez votre visibilité en ligne.";

    const canonical =
        `https://www.referenciaseo.com/${lang}/referencer-mon-entreprise`;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonical} />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content={lang} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
            </Helmet>

            <main className="bg-gray-50 text-gray-900">

                {/* HERO */}
                <section className="bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
                        <div className="max-w-4xl mx-auto text-center">

                            <span className="inline-block mb-5 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-semibold text-sm">
                                🚀 Annuaire professionnel et visibilité en ligne
                            </span>

                            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                                Faites connaître votre entreprise grâce à notre annuaire
                                professionnel
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Vous êtes commerçant, artisan, indépendant ou chef
                                d'entreprise ? Présentez votre activité sur Referencia SEO,
                                faites découvrir vos services et développez votre présence
                                sur Internet grâce à notre annuaire professionnel.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to={`/${lang}/pricing`}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition"
                                >
                                    Référencer mon entreprise
                                </Link>

                                <Link
                                    to={`/${lang}/annuaire`}
                                    className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition"
                                >
                                    Découvrir l'annuaire
                                </Link>
                            </div>

                            <p className="text-sm text-gray-500 mt-5">
                                Pour les commerces, artisans, indépendants et entreprises
                                de tous secteurs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AVANTAGES */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black mb-4">
                                Faites la promotion de votre activité sur Internet
                            </h2>

                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Votre entreprise mérite d'être connue. Un annuaire
                                professionnel vous offre une possibilité supplémentaire
                                de présenter votre activité aux internautes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">

                            <article className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">📢</div>
                                <h3 className="text-xl font-bold mb-3">
                                    Faites connaître votre entreprise
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Présentez votre commerce, vos prestations et votre
                                    savoir-faire afin de faciliter la découverte de votre
                                    activité par de nouveaux clients potentiels.
                                </p>
                            </article>

                            <article className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">📍</div>
                                <h3 className="text-xl font-bold mb-3">
                                    Travaillez votre visibilité locale
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Mettez en avant votre ville, votre secteur d'activité
                                    et vos services pour renforcer votre présence en ligne
                                    auprès des personnes qui recherchent vos prestations.
                                </p>
                            </article>

                            <article className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">🔎</div>
                                <h3 className="text-xl font-bold mb-3">
                                    Développez votre présence en ligne
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Ajoutez une présence professionnelle à votre stratégie
                                    numérique et découvrez les solutions de référencement
                                    proposées par Referencia SEO.
                                </p>
                            </article>

                        </div>
                    </div>
                </section>

                {/* PUBLIC CONCERNÉ */}
                <section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="text-center mb-10">
                            <h2 className="text-3xl lg:text-4xl font-black mb-4">
                                Un annuaire pour tous les professionnels
                            </h2>

                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Quel que soit votre métier, présentez votre entreprise
                                et vos services dans notre annuaire professionnel.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                            {[
                                {
                                    icon: "🛍️",
                                    name: "Commerçants",
                                    text: "Boutiques et magasins",
                                },
                                {
                                    icon: "🔧",
                                    name: "Artisans",
                                    text: "Garages et métiers du bâtiment",
                                },
                                {
                                    icon: "🍽️",
                                    name: "Restaurants",
                                    text: "Restaurants, cafés et commerces de bouche",
                                },
                                {
                                    icon: "💼",
                                    name: "Indépendants",
                                    text: "Conseil et services professionnels",
                                },
                            ].map((item) => (
                                <article
                                    key={item.name}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {item.text}
                                    </p>
                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* ÉTAPES */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black mb-4">
                                Comment référencer votre entreprise ?
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Suivez quelques étapes pour développer votre présence
                                sur Referencia SEO.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">

                            {[
                                {
                                    number: "1",
                                    title: "Choisissez votre offre",
                                    text: "Consultez les abonnements et leurs fonctionnalités.",
                                },
                                {
                                    number: "2",
                                    title: "Créez votre compte",
                                    text: "Inscrivez-vous pour accéder à votre espace professionnel.",
                                },
                                {
                                    number: "3",
                                    title: "Présentez votre activité",
                                    text: "Renseignez les informations de votre entreprise et vos services.",
                                },
                                {
                                    number: "4",
                                    title: "Développez votre présence",
                                    text: "Utilisez votre référencement dans le cadre de votre stratégie en ligne.",
                                },
                            ].map((step) => (
                                <article key={step.number} className="text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-black">
                                        {step.number}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.text}
                                    </p>
                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* SEO LOCAL */}
                <section className="bg-white py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-indigo-50 rounded-3xl p-8 lg:p-12">

                            <h2 className="text-3xl font-black mb-5">
                                Annuaire professionnel et référencement local
                            </h2>

                            <p className="text-gray-700 text-lg leading-relaxed mb-5">
                                Le référencement local aide les internautes à trouver
                                des entreprises proposant des produits ou des services
                                dans leur secteur géographique.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed mb-5">
                                Avec Referencia SEO, vous pouvez présenter votre activité
                                dans notre annuaire professionnel. Les informations
                                disponibles sur votre fiche permettent aux internautes
                                de mieux connaître votre entreprise.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                Avec Referencia SEO, faites connaître votre entreprise
                                et développez votre visibilité sur Internet ! Présentez
                                votre activité, valorisez vos services et donnez à de
                                nouveaux clients potentiels l'occasion de découvrir
                                votre entreprise grâce à notre annuaire professionnel.
                            </p>

                            <div className="mt-7">
                                <Link
                                    to={`/${lang}/annuaire`}
                                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition"
                                >
                                    Explorer l'annuaire →
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gray-900 text-white py-16">
                    <div className="max-w-4xl mx-auto px-6 text-center">

                        <h2 className="text-3xl lg:text-4xl font-black mb-5">
                            Prêt à faire connaître votre entreprise ?
                        </h2>

                        <p className="text-gray-300 text-lg mb-8">
                            Découvrez les abonnements Referencia SEO et choisissez
                            les fonctionnalités adaptées à votre activité.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to={`/${lang}/pricing`}
                                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
                            >
                                Découvrir les abonnements →
                            </Link>

                            <Link
                                to={`/${lang}/annuaire`}
                                className="inline-block border border-gray-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition"
                            >
                                Voir l'annuaire
                            </Link>
                        </div>

                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-6">

                        <h2 className="text-3xl font-black text-center mb-10">
                            Questions fréquentes sur l'annuaire professionnel
                        </h2>

                        <div className="space-y-7">

                            <article>
                                <h3 className="font-bold text-lg mb-2">
                                    Comment faire connaître mon entreprise sur Internet ?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Vous pouvez présenter votre activité dans un annuaire
                                    professionnel, développer votre site Internet et
                                    travailler votre référencement naturel et local.
                                    Referencia SEO propose des outils et un annuaire
                                    pour accompagner votre présence en ligne.
                                </p>
                            </article>

                            <article>
                                <h3 className="font-bold text-lg mb-2">
                                    Quels professionnels peuvent rejoindre l'annuaire ?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Les commerçants, artisans, indépendants, prestataires
                                    de services et entreprises peuvent consulter les
                                    offres disponibles pour présenter leur activité.
                                </p>
                            </article>

                            <article>
                                <h3 className="font-bold text-lg mb-2">
                                    L'inscription à l'annuaire est-elle gratuite ?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Consultez la page des abonnements Referencia SEO
                                    pour connaître les tarifs et les fonctionnalités
                                    proposées dans chaque offre.
                                </p>
                            </article>

                            <article>
                                <h3 className="font-bold text-lg mb-2">
                                    L'annuaire garantit-il une première place sur Google ?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Non. Le référencement dépend de nombreux facteurs.
                                    Une fiche dans un annuaire peut compléter votre
                                    présence en ligne, mais elle ne garantit ni
                                    l'indexation ni une position particulière sur Google.
                                </p>
                            </article>

                            <article>
                                <h3 className="font-bold text-lg mb-2">
                                    Où consulter les entreprises référencées ?
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Vous pouvez parcourir les fiches disponibles depuis
                                    notre annuaire professionnel.
                                </p>
                            </article>

                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}
