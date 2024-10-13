import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('report/:type')
export class AppController{

  @Get('')
  getAllReports(){
    return "Get all reports"
  }

  @Get(':id')
  getReportById(){
    return "Get report by ID"
  }

  @Post('')
  createReport(){
    return "Create a single report"
  }

  @Put(':id')
  updateReport(){
    return 'Update a single report'
  }

  @Delete(':id')
  deleteReport(){
    return "Delete a single report"
  }

}