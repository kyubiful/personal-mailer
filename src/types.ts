export interface Mail {
  from: string
  to: string
  subject: string
  html: string
}

export interface TransportOptions {
  host: string
  port: number
  auth: {
    user: string
    pass: string
  }
}

export interface UserMail extends Omit<Mail, 'html'> {
  name: string
  text: string
}
