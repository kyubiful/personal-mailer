import express from 'express'
import mailRouter from './routes/mail'
import cors from 'cors'

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.status(200).send({ response: 'ok' })
})

app.use('/api/mail', mailRouter)

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`)
})
