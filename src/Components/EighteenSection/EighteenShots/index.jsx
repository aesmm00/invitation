import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EighteenSection from '../index';
import eighteenShotsBG from '../../../assets/photos/eighteenShots/eighteenShotsBG.jpg';
import eighteenShotsSidePhoto from '../../../assets/photos/eighteenShots/eighteenShotsSidePhoto.jpg';
import { fetchEighteenData } from '../../../redux/eighteens/actions';
import { useAppDispatch } from '../../../redux/hooks';
import { selectEighteenData, selectEighteenError, selectEighteenLoading } from '../../../redux/eighteens/selectors';

const EighteenShots = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(state => selectEighteenData(state, 'Shots'));
    const error = useSelector(state => selectEighteenError(state, 'Shots'));
    const loading = useSelector(state => selectEighteenLoading(state, 'Shots'));
    
    useEffect(() => {
        dispatch(fetchEighteenData('Shots'));
    }, [dispatch]);

    return (
        <EighteenSection
            backgroundImage={eighteenShotsBG}
            sideImage={eighteenShotsSidePhoto}
            title="18 Shots"
            subtitle="A Toast to Growth and Gratitude"
            description="Eighteen heartfelt toasts from cherished people, each shot representing love, wisdom, and the milestones that shaped the debutante’s journey"
            data={data}
            error={error}
            loading={loading}
            imageOnLeft={true}
        />
    );
};

export default EighteenShots;
