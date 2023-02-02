import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApiData } from './ApiThunkSlice';
const ApiThunk = () => {
    const [searchTerm, setSearchTerm] = useState([])
    const { posts, loading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ApiData());
    }, [])
    if(loading){
        return <h1>Loading.......</h1>
    }
    return (
        <div>
             <input type="text" placeholder='enter...' onChange={(e) => setSearchTerm(e.target.value)} />
            {posts.filter((val) => {
                    if (searchTerm == "") {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((val) => {
                return <>
                    <h1 key={val.id}>{val.title}</h1>
                    <p>{val.body}</p>
                </>
            })}
        </div>
    )
}

export default ApiThunk
