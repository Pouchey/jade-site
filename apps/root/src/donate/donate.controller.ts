import { Controller, Get } from '@nestjs/common';
import { DonateService } from './donate.service';

@Controller('donate')
export class DonateController {

    constructor(private donateService: DonateService){}

    @Get('secret')
    async getSecret(){
        const intent = await this.donateService.createIntent();

        return ({clientSecret: intent.client_secret});
    }
}
