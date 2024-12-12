import express from "express"
import { authUser } from "../middleware/auth.middleware.js"
import { getCoordinates } from "../controller/map.controller.js"
import {query} from 'express-validator'
const MapRouter = express.Router()





MapRouter.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 })

    ,authUser,getCoordinates)


export default MapRouter