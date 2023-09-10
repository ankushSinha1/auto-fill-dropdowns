import React, { useEffect, useState } from 'react'
import { router } from './Axios.js';
import _ from 'lodash';
const DropDowns = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        router.get('/countries')
        .then((res)=>{
            setCountries(res.data.data)
        })
        .catch(err => console.log(err))
    },[])
    const getStates = (country_id) => {
        router.get('/states')
        .then(res => {
            let array = [];
            res.data.data.data.forEach(state => {
                if(state.country_id == country_id){
                    array = [...array, state]
                } 
            })
            setStates(array)
        })
        .catch(err => console.log(err))
    }
    const getCities = (state_id) =>{
        router.get('/cities')
        .then(res => {
            let array = [];
            res.data.data.data.forEach(city => {
                if(city.state_id == state_id){
                    array = [...array, city]
                } 
            })
            setCities(array)
        }
        )
        .catch(err => console.log(err))
    }
    return (
    <div>
      <form>
        <select onChange={(e)=>getStates(e.target.value)}>
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
        <select onChange={(e)=>getCities(e.target.value)}>
            <option defaultValue={true}> -Select state- </option>
            {
                states[0] ? states.map((state)=>{
                    return(
                        <option 
                        key={state.id} 
                        value={state.id}
                        >
                            {state.name}
                        </option>
                    )
                }) : <></>
            }
        </select>
        <select>
            <option defaultValue={true}> -Select city- </option>
            {
                cities[0] ? cities.map((city)=>{
                    return(
                        <option 
                        key={city.id} 
                        value={city.id}
                        >
                            {city.name}
                        </option>
                    )
                }) : <></>
            }
        </select>
      </form>
    </div>
  )
}

export default DropDowns
