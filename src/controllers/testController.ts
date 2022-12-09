import { Request, Response } from 'express'

class TestController {
  static test(_: Request, res: Response) {
    res.status(200).json({ message: 'Connection is stable' })
  }
}

export default TestController
