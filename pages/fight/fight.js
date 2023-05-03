import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../helpers/api/db";
const AddFight = () => {
    const router = useRouter();
    const [eventYear, setEventYear] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventName, setEventName] = useState("");
    const [category, setCategory] = useState("");
    const [weightCat, setWeightCat] = useState("");
    const [fighter1Id, setFighter1Id] = useState("");
    const [fighter2Id, setFighter2Id] = useState("");
    const [winnerId, setWinnerId] = useState("");
    const [fighters, setFighters] = useState([]);

    useEffect(() => {
        const fetchFighters = async () => {
            const fightersList = await db.Fighter.find();
            setFighters(fightersList);
        };

        fetchFighters();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Enregistrez les données du combat dans la base de données
        const fight = new db.Fight({
            eventyear: Number(eventYear),
            eventtype: eventType,
            eventname: eventName,
            category: category,
            weightcat: Number(weightCat),
            fighter1_id: fighter1Id,
            fighter2_id: fighter2Id,
            winner_id: winnerId,
        });
        await fight.save();

        // Redirigez vers la page des combats
        router.push("/fights");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventYear">Année de l'événement :</label>
                <input
                    type="number"
                    id="eventYear"
                    value={eventYear}
                    onChange={(event) => setEventYear(event.target.value)}
                />

                <label htmlFor="eventType">Type d'événement :</label>
                <input
                    type="text"
                    id="eventType"
                    value={eventType}
                    onChange={(event) => setEventType(event.target.value)}
                />

                <label htmlFor="eventName">Nom de l'événement :</label>
                <input
                    type="text"
                    id="eventName"
                    value={eventName}
                    onChange={(event) => setEventName(event.target.value)}
                />

                <label htmlFor="category">Catégorie :</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <label htmlFor="weightCat">Catégorie de poids :</label>
                <input
                    type="number"
                    id="weightCat"
                    value={weightCat}
                    onChange={(event) => setWeightCat(event.target.value)}
                />

                <label htmlFor="fighter1Id">Combattant 1 :</label>
                <select
                    id="fighter1Id"
                    value={fighter1Id}
                    onChange={(event) => setFighter1Id(event.target.value)}
                >
                    <option value="">Sélectionnez un combattant</option>
                    {fighters.map((fighter) => (
                        <option key={fighter._id} value={fighter._id}>
                            {fighter.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="fighter2Id">Combattant 2 :</label>
                <select
                    id="fighter2Id"
                    value={fighter2Id}
                    onChange={(event) => setFighter2Id(event.target.value)}
                >
                    <option value="">Sélectionnez un combattant</option>
                    {fighters.map((fighter) => (
                        <option key={fighter._id} value={fighter._id}>
                            {fighter.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="winnerId">Gagnant :</label>
                <select
                    id="winnerId"
                    value={winnerId}
                    onChange={(event) => setWinnerId(event.target.value)}
                >
                    <option value="">Sélectionnez un combattant</option>
                    {fighters.map((fighter) => (
                        <option key={fighter._id} value={fighter._id}>
                            {fighter.name}
                        </option>
                    ))}
                </select>

                <button type="submit">Ajouter le combat</button>
            </form>
        </div>
    );
};

export default AddFight;
