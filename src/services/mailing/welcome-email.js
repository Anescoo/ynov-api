import transporter from '#config/mailer.js'

export function sendWelcomeEmail (user, token) {
	if(!user || !token) throw new Error('User or validation token is missing')
	const message = {
		from: process.env.EMAIL_SENDER,
		to: user.email,
		subject: 'Welcome to our todo app',
		html: `<h1> Welcome to our wonderful todo application here your validation token : <span style="color: red"> ${token} </span> </h1>`
	}
	return transporter.sendMail(message)	
}