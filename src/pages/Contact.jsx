
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Contact() {
    const { lang = "fr" } = useParams();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "Question sur un abonnement",
        message: "",
    });

    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
        ) {
            setError("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            form.email.trim()
        );

        if (!emailIsValid) {
            setError("Veuillez saisir une adresse e-mail valide.");
            return;
        }

        const body = [
            "Nouvelle demande de contact - Referencia SEO",
            "",
            `Nom : ${form.name.trim()}`,
            `E-mail : ${form.email.trim()}`,
            `Sujet : ${form.subject}`,
            "",
            "Message :",
            form.message.trim(),
        ].join("\n");

        const mailtoUrl =
            `mailto:elhassane.elbarhdadi@gmail.com` +
            `?subject=${encodeURIComponent(
                `[Referencia SEO] ${form.subject}`
            )}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    }

    return (
        <>
            <Helmet>
                <title>Contact | Referencia SEO</title>

                <meta
                    name="description"
                    content="Contactez Referencia SEO pour toute question concernant nos abonnements, notre annuaire professionnel et nos solutions de référencement SEO."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href={`https://www.referenciaseo.com/${lang}/contact`}
                />
            </Helmet>

            <main className="min-h-screen bg-gray-50">

                {/* HERO */}
                <section className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-14 lg:py-20 text-center">

                        <span className="inline-block mb-5 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm">
                            ✉️ Nous sommes à votre écoute
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                            Contactez Referencia SEO
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Une question sur nos abonnements, notre annuaire
                            professionnel ou nos outils SEO ? Envoyez-nous
                            votre demande. Nous serons heureux de vous aider.
                        </p>

                    </div>
                </section>

                {/* CONTACT CONTENT */}
                <section className="py-14">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

                        {/* INFORMATIONS */}
                        <aside className="space-y-6">

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                                <div className="text-3xl mb-4">📩</div>

                                <h2 className="text-xl font-bold mb-3">
                                    Écrivez-nous
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Notre adresse e-mail est à votre disposition
                                    pour vos questions et demandes d'information.
                                </p>

                                <a
                                    href="mailto:elhassane.elbarhdadi@gmail.com"
                                    className="text-indigo-700 font-semibold break-all hover:underline"
                                >
                                    elhassane.elbarhdadi@gmail.com
                                </a>
                            </div>

                            <div className="bg-indigo-50 rounded-2xl p-7">
                                <h2 className="text-xl font-bold mb-3">
                                    Vous êtes professionnel ?
                                </h2>

                                <p className="text-gray-700 leading-relaxed mb-5">
                                    Découvrez comment présenter votre activité
                                    dans notre annuaire professionnel et renforcer
                                    votre présence en ligne.
                                </p>

                                <Link
                                    to={`/${lang}/referencer-mon-entreprise`}
                                    className="inline-block font-bold text-indigo-700 hover:underline"
                                >
                                    Référencer mon entreprise →
                                </Link>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 p-7">
                                <h2 className="text-xl font-bold mb-3">
                                    Consultez nos offres
                                </h2>

                                <p className="text-gray-600 mb-4">
                                    Découvrez les abonnements et les fonctionnalités
                                    proposés par Referencia SEO.
                                </p>

                                <Link
                                    to={`/${lang}/pricing`}
                                    className="font-bold text-indigo-700 hover:underline"
                                >
                                    Voir les abonnements →
                                </Link>
                            </div>

                        </aside>

                        {/* FORMULAIRE */}
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-9">

                            <h2 className="text-2xl font-black mb-2">
                                Envoyez-nous un message
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Remplissez le formulaire ci-dessous. Les champs
                                marqués d'un astérisque sont obligatoires.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block font-semibold mb-2"
                                    >
                                        Votre nom *
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={100}
                                        placeholder="Votre nom et prénom"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block font-semibold mb-2"
                                    >
                                        Votre adresse e-mail *
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={254}
                                        placeholder="vous@exemple.fr"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block font-semibold mb-2"
                                    >
                                        Objet de votre demande *
                                    </label>

                                    <select
                                        id="subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option>Question sur un abonnement</option>
                                        <option>Inscription dans l'annuaire</option>
                                        <option>Question sur le référencement SEO</option>
                                        <option>Problème technique</option>
                                        <option>Autre demande</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block font-semibold mb-2"
                                    >
                                        Votre message *
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        minLength={5}
                                        maxLength={5000}
                                        rows={6}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {error && (
                                    <p role="alert" className="text-red-600 font-medium">
                                        {error}
                                    </p>
                                )}

                                <p className="text-sm text-gray-500">
                                    En cliquant sur le bouton, votre application
                                    de messagerie s'ouvrira pour préparer votre
                                    e-mail. Vous pourrez vérifier le message avant
                                    de l'envoyer.
                                </p>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition"
                                >
                                    Préparer mon message →
                                </button>

                            </form>
                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}
