import Headers from '@/components/Headers'
import WhislistBody from '@/components/smallPice/WhislistBody';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PleaseLoginPage from './PleaseLoginPage';

const Whislist = () => {
    const [whislist, setwhislist]   = useState();
    const { user } = useSelector((state) => state.user);

    const GetWhislistItem = async() => {
        try{
            const res = await fetch('/api/FindWhislistItem',{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                }
            });

            const data = await res.json();
            if(!data.success) console.log(data.message);
            setwhislist(data.whislist);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        GetWhislistItem();
    }, [])

    return (
        <div className=''>
            <Headers whislist={whislist}/>
            {user.success ?
                <WhislistBody/>
                : <PleaseLoginPage/>
            }
        </div>
    )
}

export default Whislist