import { Router, Response, Request } from 'express'
import TestController from '../controllers/testController'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Express + TypeScript' })
})

router.get('/test', TestController.test)

export default router
