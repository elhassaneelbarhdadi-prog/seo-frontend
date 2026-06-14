
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const { lang = "fr" } = useParams();

    return (

        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">

                <h1 className="text-5xl font-bold mb-6">
                    🚀 TEST HOMEPAGE SEO
                </h1>

                <p className="text-xl max-w-3xl mx-auto mb-8">
                    Cette version sert à vérifier que Vercel affiche bien le bon composant.
                </p>

                <button
                    onClick={() => navigate(`/${lang}/dashboard/keywords`)}
                    className="bg-black text-white px-8 py-4 rounded-xl"
                >
                    Tester maintenant
                </button>

            </section>

            {/* SECTION UNIQUE */}
            <section className="py-24 text-center">

                <h2 className="text-4xl font-bold mb-10">
                    TEST VERCEL 99999
                </h2>

                <p className="text-lg text-gray-600">
                    Si tu vois ce texte, alors Home.jsx est bien celui qui est affiché.
                </p>

            </section>

        </div>

    );

}