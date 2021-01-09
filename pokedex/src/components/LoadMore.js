import React, {useCallback} from 'react'
import LoadMoreUI from "../view/LoadMoreUI";
import {changeStatus} from "../redux/actions/actions";
import {useDispatch} from "react-redux";

/*
export default () => {
    const dispatch = useDispatch();

    const loadMorePokemons = useCallback(() => {
        dispatch(loadMore());
    }, [dispatch])

    return <LoadMoreUI loadMore={loadMorePokemons}/>
}*/
