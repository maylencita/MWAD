import * as express from 'express'
import { index } from './templates'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(index)
})

export default router