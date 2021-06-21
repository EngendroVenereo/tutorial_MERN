const Transaction = require('../models/Transaction');

// @desc   tutorial
// @route  GET api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
  try{
    const transactions = await Transaction.find();
    
    return res.status(200).json({
      estado: "OK",
      count: transactions.length,
      data: transactions
    });
  }
  catch (err){
    return res.status(500).json({
      estado: "ERROR",
      data: "Error del servidor"
    });
  }
}

// @desc   tutorial
// @route  POST api/v1/transactions
// @access public
exports.addTransactions = async (req, res, next) => {
  try {
    // const { text, ammount } = req.body;
    
    const transaction = await Transaction.create(req.body);
  
    return res.status(201).json({
      estado: "OK",
      data: transaction
    });
  }
  catch (err) {
    if (err.name === 'ValidationError'){
      const messages = Object.values(err.errors).map(val => val.message);

      res.status(400).json({
        estado: "ERROR",
        error: messages,
      });
    }
    else{
      return res.status(500).json({
        estado: "ERROR",
        data: transaction
      });
    }
  }
}

// @desc   tutorial
// @route  DELETE api/v1/transactions
// @access public
exports.deleteTransactions = async (req, res, next) => {
  try{
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction){
      res.status(404).json({
        estado: "ERROR",
        error: "No se encontró la transacción"
      });
    }

    await transaction.remove();

    return res.status(200).json({
      estado: "OK",
      data: {}
    });
  }
  catch (err){
    return res.status(500).json({
      estado: "ERROR",
      data: transaction
    });
  }
}
