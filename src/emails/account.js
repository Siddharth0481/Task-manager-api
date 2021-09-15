const mail=require('@sendgrid/mail')





mail.setApiKey(process.env.SEND_API_KEY)
const sendWel=(email,name)=>{
    mail.send({
        to:email,
        from:'siddharthgoel541@gmail.com',
        subject:'thanks for reading my mail!!',
        text:`welcome to the bakchodi mail,${name}.`
    })
}
const sendCal=(email,name)=>{
    mail.send({
        to:email,
        from:'siddharthgoel541@gmail.com',
        subject:'sorry! ',
        text:`tu aunty hi rhegi hamesha ${name}`
    })
}
module.exports={
    sendWel,
    sendCal
}