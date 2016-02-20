using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace Barber.Migrations
{
    public partial class IntroduceEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Employee", table: "Activity");
            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                });
            migrationBuilder.AddColumn<string>(
                name: "Client",
                table: "Activity",
                nullable: true);
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Activity",
                type: "DateTime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Activity",
                nullable: false,
                defaultValue: 0);
            migrationBuilder.AddColumn<double>(
                name: "Price",
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
            migrationBuilder.DropColumn(name: "Client", table: "Activity");
            migrationBuilder.DropColumn(name: "Date", table: "Activity");
            migrationBuilder.DropColumn(name: "EmployeeId", table: "Activity");
            migrationBuilder.DropColumn(name: "Price", table: "Activity");
            migrationBuilder.DropTable("Employee");
            migrationBuilder.AddColumn<string>(
                name: "Employee",
                table: "Activity",
                nullable: true);
        }
    }
}
