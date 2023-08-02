import Headers from '@/components/Headers'
import WhislistBody from '@/components/smallPice/WhislistBody';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PleaseLoginPage from './PleaseLoginPage';
import Loading from './Loading';
import { GetWhislist } from '@/ReduxStore/GetWhislistProduct';


const Whislist = () => {
    const { user } = useSelector((state) => state.user);
    const { whislistdata, whislistStatus } = useSelector(state => state.whislistdata)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetWhislist(user?.user?._id));
    },[]);

    if (whislistStatus === 'loading') {
        return <Loading />
    }
    return (
        <div className=''>
            <Headers  />
            {user.success ?
                <WhislistBody whislistdata={whislistdata} />
                : <PleaseLoginPage />
            }
        </div>
    )
}

export default Whislist