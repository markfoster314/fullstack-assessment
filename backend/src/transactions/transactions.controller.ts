import { Controller, Get } from '@nestjs/common';
import fetch from 'node-fetch';

@Controller('transactions')
export class TransactionsController {
  @Get()
  async getTransactions() {
    const apiResponse = await fetch(
      'https://61b3dea5af5ff70017ca20bf.mockapi.io/transactions',
    );
    const transactions = await apiResponse.json();
    return transactions;
  }
}
