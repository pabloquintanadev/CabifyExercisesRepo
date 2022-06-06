import getBudgets from "../clients/getBudgets.js";

export default async (req, res) => {
    const budgets = await getBudgets();

    res.json(budgets);
}
