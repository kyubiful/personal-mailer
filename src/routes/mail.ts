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
      res.status(500).json({ msg: 'Email send success' })
    } catch (e: any) {
      res.status(400).json({ msg: e.message })
    }
  } catch (e: any) {
    res.status(400).json({ msg: e.message })
  }
})

export default router
