import nodemailer from 'nodemailer'

const MAILDEV_CONF = {
	port: 1025,
	ignoreTLS: true,
	host: "127.0.0.1"
}

const PROD_CONF = {
	name: process.env.SMTP_SERVER_NAME,
	port: process.env.SMTP_SERVER_PORT,
	host: process.env.SMTP_SERVER_HOST,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD
	}
}

const options = process.env.NODE_env === 'development' ? MAILDEV_CONF : PROD_CONF

const transporter = nodemailer.createTransport(options)

export default transporter 