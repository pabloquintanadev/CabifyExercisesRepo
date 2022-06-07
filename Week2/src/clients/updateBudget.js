import Budget from "../models/budget.js"


import lockedSync from "locked-sync"
const sync = lockedSync();

export default async (budgetParams) => {

    const end = await sync()

    const budget = await Budget
        .find()
        .catch(err => console.log(err))

    const increase = budgetParams.amount

    try {
        if (budget.length === 0) {
            await Budget
                .save(budgetParams)
        } else {
            budget[0].amount += increase
            await budget[0]
                .save()
        }
    }
    catch (err) {
        console.log("Error while trying to increase budget", err)
    }
    finally {
        end()
    }
}