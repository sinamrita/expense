const expenseModel =  require("../model/expense")

const add_expense = (req,res) =>{
    const data = req.body
    const doc = new expenseModel({
        title:data.title,
        date:data.date,
        amount:data.amount
    })

    doc.save(function(err){
        if(err){
            res.status(500).json({
                code:0,
                message:"Problem in Inserting"
            })
        }else{
            res.status(200).json({
                code:1,
                message:"Inserted Successfully"
            })
        }
    })
}

const get_expense = async (req,res) => {
    const result = await expenseModel.find()

    console.log(result);

    if(result.length !== 0){
        res.status(200).json({
            code:1,
            message:"Fetched Successfully",
            data : result
        })
    }else{
        res.status(200).json({
            code:0,
            message:"Not Found",
            data: []
        })
    }
}

module.exports = {
    add_expense,
    get_expense
}