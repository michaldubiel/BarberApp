using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using Barber.Models;

namespace Barber.Migrations
{
    [DbContext(typeof(BarberContext))]
    [Migration("20160220111734_IntroduceActivityStatus")]
    partial class IntroduceActivityStatus
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Barber.Models.Activity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Client");

                    b.Property<DateTime>("Date")
                        .HasAnnotation("Relational:ColumnType", "DateTime2");

                    b.Property<int>("EmployeeId");

                    b.Property<double>("Price");

                    b.Property<int>("Status");

                    b.Property<string>("Title");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("Barber.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("Barber.Models.Activity", b =>
                {
                    b.HasOne("Barber.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");
                });
        }
    }
}
