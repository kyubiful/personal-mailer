import express from 'express'
import { sendMail, verifyUserMailData } from '../services/mailer'
import { UserMail } from '../types'

const router = express.Router()

router.post('/send', (req, res) => {
  const message: UserMail = req.body
  message.subject = 'Contacto'

  try {
    verifyUserMailData(message)
    try {
      sendMail(message)
      res.status(200).json({ status: 200, msg: 'Email send success' })
    } catch (e: any) {
      res.status(400).json({ status: 400, msg: e.message })
    }
  } catch (e: any) {
    res.status(400).json({ status: 400, msg: e.message })
  }
})

export default router
