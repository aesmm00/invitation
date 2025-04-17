import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EighteenSection from '../EighteenSection';
import eighteenTreasureBG from '../../assets/photos/eighteenTreasure/eighteenTreasureBG.jpg';
import eighteenTreasureSidePhoto from '../../assets/photos/eighteenTreasure/eighteenTreasureSidePhoto.jpg';

const EighteenTreasure = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenTreasure`);
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setData(response.data);
                    setError("");
                }
            } catch (error) {
                setError("Error fetching data");
            }
        };

        fetchData();
    }, []);

    return (
        <EighteenSection
            backgroundImage={eighteenTreasureBG}
            sideImage={eighteenTreasureSidePhoto}
            title="18 Treasure"
            subtitle="Gifts of Wisdom and Fortune"
            description="Esteemed guests present meaningful treasures, each symbolizing blessings and guidance for the debutante's journey ahead"
            data={data}
            error={error}
            imageOnLeft={false}
        />
    );
};

export default EighteenTreasure;
