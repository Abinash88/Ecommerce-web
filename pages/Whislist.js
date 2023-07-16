import Headers from '@/components/Headers'
import WhislistBody from '@/components/smallPice/WhislistBody';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PleaseLoginPage from './PleaseLoginPage';
import { GetWhislist } from '@/ReduxStore/GetWhislistProduct';
import Loading from './Loading';
import { getUser } from '@/ReduxStore/UserSlice';

const Whislist = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { whislistdata, whislistStatus } = useSelector(state => state.whislistdata)


   useEffect(() => {
        dispatch(GetWhislist(user?.user?._id))
   },[])

    if (whislistStatus === 'loading') {
        return <Loading />
    }

    return (
        <div className=''>
            <Headers whislistdata={whislistdata} />
            {user.success ?
                <WhislistBody whislistdata={whislistdata} />
                : <PleaseLoginPage />
            }
        </div>
    )
}

export default Whislist