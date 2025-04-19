import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EighteenSection from '..';
import eighteenRosesBG from '../../../assets/photos/eighteenRoses/eighteenRosesBG.jpg';
import eighteenSidePhoto from '../../../assets/photos/eighteenRoses/eighteenSidePhoto.jpg';
import { fetchEighteenData } from '../../../redux/eighteens/actions';
import { selectEighteenData, selectEighteenError, selectEighteenLoading } from '../../../redux/eighteens/selectors';
import { useAppDispatch } from '../../../redux/hooks';

const EighteenRoses = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(state => selectEighteenData(state, 'Roses'));
    const error = useSelector(state => selectEighteenError(state, 'Roses'));
    const loading = useSelector(state => selectEighteenLoading(state, 'Roses'));
    
    useEffect(() => {
        dispatch(fetchEighteenData('Roses'));
    }, [dispatch]);

    return (
        <EighteenSection
            backgroundImage={eighteenRosesBG}
            sideImage={eighteenSidePhoto}
            title="18 Roses"
            subtitle="A Dance of Elegance and Grace"
            description="Distinguished gentlemen join the debutante in a waltz, each bearing a rose to honor her grace"
            data={data}
            error={error}
            loading={loading}
            imageOnLeft={true}
        />
    );
};

export default EighteenRoses;
