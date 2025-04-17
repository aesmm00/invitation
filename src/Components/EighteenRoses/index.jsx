import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EighteenSection from '../EighteenSection';
import eighteenRosesBG from '../../assets/photos/eighteenRoses/eighteenRosesBG.jpg';
import eighteenSidePhoto from '../../assets/photos/eighteenRoses/eighteenSidePhoto.jpg';

const EighteenRoses = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenRoses`);
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
            backgroundImage={eighteenRosesBG}
            sideImage={eighteenSidePhoto}
            title="18 Roses"
            subtitle="A Dance of Elegance and Grace"
            description="Distinguished gentlemen join the debutante in a waltz, each bearing a rose to honor her grace"
            data={data}
            error={error}
            imageOnLeft={true}
        />
    );
};

export default EighteenRoses;
