import { Injectable } from '@nestjs/common';

@Injectable()
export class DonateService {

    private stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    async createIntent(){
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: 2000,
            currency: 'eur',
            payment_method_types: [
                "card",
                "paypal",
                "link"
            ]
            });

        return paymentIntent
    }


}
