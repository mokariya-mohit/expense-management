const Expense = require('../models/Expense');

// Get Monthly Expenses
exports.getMonthlyExpenses = async (req, res) => {
    try {
        const { ObjectId } = require('mongodb');
        const userId = new ObjectId(req.user.id);



        const result = await Expense.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: { month: { $month: "$date" }, year: { $year: "$date" } },
                    totalAmount: { $sum: "$amount" }
                }
            },
            { $sort: { "_id.year": -1, "_id.month": -1 } }
        ]);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get Expenses by Category
exports.getCategoryExpenses = async (req, res) => {
    try {
        const { ObjectId } = require('mongodb');
        const userId = new ObjectId(req.user.id);

        const result = await Expense.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: "$category",
                    totalAmount: { $sum: "$amount" }
                }
            },
            { $sort: { totalAmount: -1 } }
        ]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
