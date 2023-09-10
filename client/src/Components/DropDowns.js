import React, { useEffect, useState } from 'react'
import { router } from './Axios.js';
import './DropDowns.scss'
const DropDowns = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        //API call to fetch all the countries
        router.get('/countries')
        .then((res)=>{
            //Setting the state countries to fetched data
            setCountries(res.data.data)
            //At the same time, resetting the states state and cities
            setStates([])
            setCities([])
        })
        .catch(err => console.log(err))
    },[])
    const getStates = (country_id) => {
        //API call to fetch all the states
        router.get('/states')
        .then(res => {
            let array = [];
            //Filtering the states for the selected country only
            res.data.data.data.forEach(state => {
                if(state.country_id == country_id){
                    array = [...array, state]
                } 
            })
            //setting state states
            setStates(array)
            //At the same time, resetting the state cities
            setCities([])
        })
        .catch(err => console.log(err))
    }
    const getCities = (state_id) =>{
        //API call to fetch all the cities 
        router.get('/cities')
        .then(res => {
            let array = [];
            //Filtering the cities for the selected state only
            res.data.data.data.forEach(city => {
                if(city.state_id == state_id){
                    array = [...array, city]
                } 
            })
            setCities(array)
        })
        .catch(err => console.log(err))
    }
    return (
    <div className='dropdown'>
        <select className='dropdown__country' onChange={(e)=>getStates(e.target.value)}>
            <option defaultValue={true}> -Select country- </option>
            {
                countries.status ? countries.data.map((country)=>{
                    return(
                        <option 
                            key={country.id} 
                            value={country.id}
                        >
                            {country.name}
                        </option>
                    )
                }) : <></>
            }
        </select>
        <select className='dropdown__state' onChange={(e)=>getCities(e.target.value)}>
            {
                states[0] ? states.map((state)=>{
                    <option defaultValue={true}> -Select state- </option>
                    return(
                        <option 
                        key={state.id} 
                        value={state.id}
                        >
                            {state.name}
                        </option>
                    )
                }) : <option>No States</option>
            }
        </select>
        <select className='dropdown__city'>
            {
                cities[0] ? cities.map((city)=>{
                <option defaultValue={true}> -Select city- </option>
                    return(
                        <option 
                        key={city.id} 
                        value={city.id}
                        >
                            {city.name}
                        </option>
                    )
                }) : <option>No Cities</option>
            }
        </select>
    </div>
  )
}

export default DropDowns
