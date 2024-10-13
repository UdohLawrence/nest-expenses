import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data, ReportType } from './data';
import {v4 as uuid} from "uuid"
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {

  constructor(private readonly appService: AppService){

  }

  @Get('')
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id)
  }

  @Post('')
  createReport(
    @Body() { amount, source }: { amount: number; source: string },
  @Param('type') type: string) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type') type: string,
    @Body() body: {amount: number; source: string}
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body)
   }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id)
  }
}
