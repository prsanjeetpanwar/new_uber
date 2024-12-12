import { GetAddressCoordinates } from "../services/map.service.js";
import { validationResult } from "express-validator";

export const  getCoordinates=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    const {address}=req.query;
    try{
        const coordinates=await GetAddressCoordinates(address)
        res.status(200).json({coordinates});
    }
    catch(err){
        console.error("Error getting coordinates:",err.message);
        res.status(500).json({error:"Internal server error"});
    }
        
}