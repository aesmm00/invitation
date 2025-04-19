import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EighteenSection from '..';
import eighteenCandlesBG from '../../../assets/photos/EighteenCandles/eighteenCandlesBG.jpg';
import eighteenSidePhoto from '../../../assets/photos/EighteenCandles/eighteenSidePhoto.jpg';
import { fetchEighteenData } from '../../../redux/eighteens/actions';
import { selectEighteenData, selectEighteenError, selectEighteenLoading } from '../../../redux/eighteens/selectors';
import { useAppDispatch } from '../../../redux/hooks';

const EighteenCandles = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(state => selectEighteenData(state, 'Candles'));
    const error = useSelector(state => selectEighteenError(state, 'Candles'));
    const loading = useSelector(state => selectEighteenLoading(state, 'Candles'));
    
    useEffect(() => {
        dispatch(fetchEighteenData('Candles'));
    }, [dispatch]);

    return (
        <EighteenSection
            backgroundImage={eighteenCandlesBG}
            sideImage={eighteenSidePhoto}
            title="18 Candles"
            subtitle="Illuminating Wishes and Dreams"
            description="Cherished women light the path ahead, each flame carrying wisdom and blessings for the debutante"
            data={data}
            error={error}
            loading={loading}
            imageOnLeft={false}
        />
    );
};

export default EighteenCandles;
