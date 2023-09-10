import axios from "axios";
import express from "express";

const router = express.Router();

//For fetching countries
router.route('/countries').get((req,res)=>{
    axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/countries')
    .then((data) => {
        return res.json({'data': data.data})
    })
    .catch(err => console.log(err))
})
//For fetching states
router.route('/states').get((req,res)=>{
    axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/states')
    .then((data) => {
        return res.json({'data': data.data})
    })
    .catch(err => console.log(err))
})
//For fetching cities
router.route('/cities').get((req,res)=>{
    axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/cities')
    .then((data) => {
        return res.json({'data': data.data})
    })
    .catch(err => console.log(err))
})
export default router;