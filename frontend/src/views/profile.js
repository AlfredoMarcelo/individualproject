import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {

    
    const {store,actions} = useContext(Context);
    const history = useHistory();

    useEffect(()=>{
        if(!store.isAuth) history.push('/login');
    }, [])

    return (
        <>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <h1 className="mt-5 my-5">Profile</h1>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
        </>
    )
}