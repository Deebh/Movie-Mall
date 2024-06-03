const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://bhartidivya911:XeeaTEYGpILPebhJ@moviee.ybcagcq.mongodb.net/?retryWrites=true&w=majority&appName=moviee',
{
    useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true }).then(
    console.log('connected')
)



