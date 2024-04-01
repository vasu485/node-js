const exp=require('express')
const app=exp()

app.get('/',(req,res)=>{
    res.send('server 2')
})
app.listen(3002)
