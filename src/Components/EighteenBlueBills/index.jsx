import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EighteenSection from '../EighteenSection';
import eighteenBlueBillsBG from '../../assets/photos/eighteenBlueBills/eighteenBlueBillsBG.jpg';
import eighteenBlueBillsSidePhoto from '../../assets/photos/eighteenBlueBills/eighteenBlueBillsSidePhoto.jpg';

const EighteenBlueBills = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenBlueBills`);
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
            backgroundImage={eighteenBlueBillsBG}
            sideImage={eighteenBlueBillsSidePhoto}
            title="18 Blue Bills"
            subtitle="A Tribute to Prosperity"
            description="Honored guests present their wishes for abundance and success through the symbolic blue bill"
            data={data}
            error={error}
            imageOnLeft={true}
        />
    );
};

export default EighteenBlueBills;
