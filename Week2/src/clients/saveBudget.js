import Budget from "../models/budget.js"

import { Mutex } from "locks";

export default async (budgetParams) => {

    // Mutex.lock()
    console.log("estoy en el cliente del POST")

    const budget = await Budget
        .find()
        .catch(err => console.log(err))

    console.log(budget)

    const topUp = budgetParams.amount
    console.log(budgetParams)

    if (budget.length === 0) {
        await Budget
            .save(budgetParams)
        // Mutex.unlock()
    } else {
        console.log(budget[0].amount)
        budget[0].amount += topUp
        await budget[0]
            .save()
        // Mutex.unlock()

    }
}