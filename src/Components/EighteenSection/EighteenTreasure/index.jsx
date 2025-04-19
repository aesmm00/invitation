import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EighteenSection from '..';
import eighteenTreasureBG from '../../../assets/photos/eighteenTreasure/eighteenTreasureBG.jpg';
import eighteenTreasureSidePhoto from '../../../assets/photos/eighteenTreasure/eighteenTreasureSidePhoto.jpg';
import { fetchEighteenData } from '../../../redux/eighteens/actions';
import { selectEighteenData, selectEighteenError, selectEighteenLoading } from '../../../redux/eighteens/selectors';
import { useAppDispatch } from '../../../redux/hooks';

const EighteenTreasure = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(state => selectEighteenData(state, 'Treasures'));
    const error = useSelector(state => selectEighteenError(state, 'Treasures'));
    const loading = useSelector(state => selectEighteenLoading(state, 'Treasures'));
    
    useEffect(() => {
        dispatch(fetchEighteenData('Treasures'));
    }, [dispatch]);

    return (
        <EighteenSection
            backgroundImage={eighteenTreasureBG}
            sideImage={eighteenTreasureSidePhoto}
            title="18 Treasure"
            subtitle="Gifts of Wisdom and Fortune"
            description="Esteemed guests present meaningful treasures, each symbolizing blessings and guidance for the debutante's journey ahead"
            data={data}
            error={error}
            loading={loading}
            imageOnLeft={false}
        />
    );
};

export default EighteenTreasure;
