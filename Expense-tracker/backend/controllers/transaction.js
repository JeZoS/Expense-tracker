const Transaction = require("../models/Transactions"); 

exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions})
    } catch (err) {
        res.status(500).json({
            success:false,
            error : "Server error"
        })
    }
}

exports.addTransactions = async (req,res,next) => {
    try {
        const {text,amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data:transaction
    })
    } catch (err) {
        res.status(500).json({
            success:false,
            error : "Server error"
        })
    }
 }

exports.deleteTransactions = async (req,res,next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"NO TRANSACTION FOUND"
            });
        }
        await transaction.remove();

        return res.status(200).json({
            sucess:true,
            data:""
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            error : "Server error"
        })
    }
}