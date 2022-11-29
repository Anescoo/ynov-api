if(process.env.NODE_ENV=== 'development'){
    async function startMaildev (){
        const {default: Maildev} = await import('maildev')
        const maildev = new Maildev({
            basePathName: '/maildev'
        })
        maildev.listen((err, data)=> {
            if(err) return console.log(`🚨 Failed to load maildev : ${e}`)
            return console.log(`Maildev server listening check your inbox at http://0.0.0.0:1080/#/`)
        })
    }
    startMaildev()
}