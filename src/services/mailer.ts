import 'dotenv/config'
import nodemailer from 'nodemailer'
import { Mail, TransportOptions, UserMail } from '../types'
import { isString, isEmptyString } from '../utils/verifyData'

const transport: TransportOptions = {
  host: process.env.MAIL_HOST ?? '',
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_AUTH_USER ?? '',
    pass: process.env.MAIL_AUTH_PASSWORD ?? ''
  }
}

export const sendMail = (message: UserMail): boolean => {
  const transporter = nodemailer.createTransport(transport)

  const html = `
    <h1>Contacto mediante la web</h1>
    <p>Nombre: ${message.name}</p>
    <p>Email: ${message.from}</p>
    <p>${message.text}</p>
  `

  const mail: Mail = {
    from: message.from,
    to: message.to,
    subject: message.subject,
    html: html
  }

  transporter.sendMail(mail, (err, _data) => {
    if (err != null) {
      console.log(`Err: ${err.message}`)
      throw new Error('Error sending message')
    } else {
      console.log(`Email send success for ${message.from}`)
      return true
    }
  })
  return true
}

export const verifyUserMailData = (mail: any): boolean => {
  if (verifyTextInput(mail.text) && verifyEmailInput(mail.from) && verifyNameInput(mail.name) && verifySubjectInput(mail.subject) && verifyToInput(mail.to)) {
    return true
  }
  return false
}

const verifyTextInput = (input: any): boolean => {
  if (!isString(input)) {
    console.log('Error: Incorrect or missing text')
    throw new Error('Incorrect or missing text')
  }
  if (!isEmptyString(input)) {
    console.log('Error: missing text')
    throw new Error('Missing text')
  }
  return true
}

const verifyEmailInput = (input: any): boolean => {
  if (!isString(input)) {
    console.log('Error: Incorrect or missing email')
    throw new Error('Incorrect or missing email')
  }
  if (!isEmptyString(input)) {
    console.log('Error: missing email')
    throw new Error('Missing email')
  }
  return true
}

const verifyNameInput = (input: any): boolean => {
  if (!isString(input)) {
    console.log('Error: Incorrect or missing name')
    throw new Error('Incorrect or missing name')
  }
  if (!isEmptyString(input)) {
    console.log('Error: missing name')
    throw new Error('Missing name')
  }
  return true
}

const verifySubjectInput = (input: any): boolean => {
  if (!isString(input)) {
    console.log('Error: Subject error')
    throw new Error('Subject error')
  }
  if (!isEmptyString(input)) {
    console.log('Error: missing subject')
    throw new Error('Missing subject')
  }
  return true
}

const verifyToInput = (input: any): boolean => {
  if (!isString(input)) {
    console.log('Error: to error')
    throw new Error('to error')
  }
  if (!isEmptyString(input)) {
    console.log('Error: missing to')
    throw new Error('Missing to')
  }
  return true
}
