using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace Barber.Migrations
{
    public partial class IntroduceActivityStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Activity_Employee_EmployeeId", table: "Activity");
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Activity",
                nullable: false,
                defaultValue: 0);
            migrationBuilder.AddForeignKey(
                name: "FK_Activity_Employee_EmployeeId",
                table: "Activity",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Activity_Employee_EmployeeId", table: "Activity");
            migrationBuilder.DropColumn(name: "Status", table: "Activity");
            migrationBuilder.AddForeignKey(
                name: "FK_Activity_Employee_EmployeeId",
                table: "Activity",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
