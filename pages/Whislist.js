import Headers from '@/components/Headers'
import WhislistBody from '@/components/smallPice/WhislistBody';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PleaseLoginPage from './PleaseLoginPage';
import { GetWhislist } from '@/ReduxStore/GetWhislistProduct';

const Whislist = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { whislistdata } = useSelector(state => state.whislistdata)

    useEffect(() => {
        dispatch(GetWhislist(user?.user?._id));
    }, [user])

    return (
        <div className=''>
            <Headers whislistdata={whislistdata}/>
            {user.success ?
                <WhislistBody whislistdata={whislistdata}/>
                : <PleaseLoginPage/>
            }
        </div>
    )
}

export default Whislist