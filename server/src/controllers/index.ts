import * as express from 'express'

const router = express.Router()

router.get('/notes', (req, res, next) => {
  res.send([{ title: 'first', text: 'test' }, { title: 'hehe', text: 'adin' }])
})

// router.get('/save-note', (req, res, next) => {
//   res.send({message: 'ok'})
// })

export default router
