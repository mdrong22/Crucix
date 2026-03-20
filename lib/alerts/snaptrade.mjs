import { Snaptrade as SnapTradeSDK } from "snaptrade-typescript-sdk";

export class SnapTrade {
    constructor(config) {
        this.clientId = config.clientId;
        this.consumerKey = config.consumerKey;
        this.userId = config.userId;
        this.userSecret = config.userSecret;
        this.accountId = config.accountId;
        this.snaptrade = new SnapTradeSDK({clientId: this.clientId, consumerKey: this.consumerKey});
    }
       
    async getTrades() {
        console.log(`Retrieving ${this.userId} portfolio...`)
        try {
            const response = await this.snaptrade.accountInformation.getUserAccountPositions({
                accountId: this.accountId,
                userId: this.userId,
                userSecret: this.userSecret,
                },
            );
            console.log(`${this.userId} portfolio successfully retrieved`)
            return JSON.stringify(response.data)
        } catch(err) {
            console.error("SnapTrade Error: ", err.message)
            return []
        }
    }

    async getBuyDates() {
        console.log(`Retrieving Account Orders for ${this.userId}`)
        try {
            const response = await this.snaptrade.accountInformation.getUserAccountDetails({
                accountId: this.accountId,
                userId: this.userId,
                userSecret: this.userSecret
            })
            console.log(`Account Orders for ${this.userId} was successfully retrieved`)
            return JSON.stringify(response.data)
        } catch(err) {
            console.error("SnapTrade Error: ", err.message)
            return []
        }
    }

    
}