import Budget from "../models/budget.js";

import lockedSync from "locked-sync"
const sync = lockedSync();


export default async () => {

    const end = await sync();
    let budgetAmount = 0
    try {
        const userBudget = await Budget.find();
        if (userBudget) {
            budgetAmount = userBudget[0].amount
        }
        if (userBudget[0].amount > 0) {
            console.log("Your current amount is ", userBudget[0].amount)
            return true
        }
        else {
            console.log("Your amount: ", userBudget[0].amount, "is not enough")
            return false
        }
    } catch (err) {
        console.log("Error trying to access user budget", err);
    }
    finally {
        end()
    }

}