import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EighteenSection from '..';
import eighteenBlueBillsBG from '../../../assets/photos/eighteenBlueBills/eighteenBlueBillsBG.jpg';
import eighteenBlueBillsSidePhoto from '../../../assets/photos/eighteenBlueBills/eighteenBlueBillsSidePhoto.jpg';
import { fetchEighteenData } from '../../../redux/eighteens/actions';
import { selectEighteenData, selectEighteenError, selectEighteenLoading } from '../../../redux/eighteens/selectors';
import { useAppDispatch } from '../../../redux/hooks';

const EighteenBlueBills = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(state => selectEighteenData(state, 'BlueBills'));
    const error = useSelector(state => selectEighteenError(state, 'BlueBills'));
    const loading = useSelector(state => selectEighteenLoading(state, 'BlueBills'));
    
    useEffect(() => {
        dispatch(fetchEighteenData('BlueBills'));
    }, [dispatch]);

    return (
        <EighteenSection
            backgroundImage={eighteenBlueBillsBG}
            sideImage={eighteenBlueBillsSidePhoto}
            title="18 Blue Bills"
            subtitle="A Tribute to Prosperity"
            description="Honored guests present their wishes for abundance and success through the symbolic blue bill"
            data={data}
            error={error}
            loading={loading}
            imageOnLeft={true}
        />
    );
};

export default EighteenBlueBills;
