import { useState } from "react";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://seo-tool-api-lo6k.onrender.com";

export default function Annuaire() {

    const [search, setSearch] = useState("");
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadBusinesses = async () => {

        if (!search.trim()) {
            setBusinesses([]);
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/business-profile?search=${encodeURIComponent(search)}`
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            const data = await response.json();

            console.log(
                "✅ BUSINESSES:",
                data
            );

            setBusinesses(
                data.businesses || []
            );

        } catch (err) {

            console.error(
                "❌ LOAD BUSINESSES ERROR:",
                err
            );

            setBusinesses([]);

        } finally {

            setLoading(false);

        }
    };

    return (
        <div>

            <h1>Annuaire SEO</h1>

            <input
                type="text"
                placeholder="Rechercher une activité..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <button
                onClick={loadBusinesses}
                disabled={loading}
            >
                {loading
                    ? "Chargement..."
                    : "Rechercher"}
            </button>

            <div>

                {businesses.length === 0 &&
                    !loading && (
                        <p>
                            Aucun résultat
                        </p>
                    )}

                {businesses.map(
                    (business, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "12px",
                                marginBottom: "10px",
                                border:
                                    "1px solid #ddd",
                                borderRadius:
                                    "8px"
                            }}
                        >
                            <h3>
                                {business.name}
                            </h3>

                            <p>
                                {business.city}
                            </p>

                            <p>
                                {business.category}
                            </p>
                        </div>
                    )
                )}

            </div>

        </div>
    );
}