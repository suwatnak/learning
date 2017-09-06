require('dotenv').config()

export default {
  port: process.env.PORT || 8000,
  secretKey: process.env.SECRET_KEY
}