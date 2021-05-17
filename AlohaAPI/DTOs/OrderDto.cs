using System;
using System.Collections.Generic;
using AlohaApi.Models;

namespace AlohaApi.DTOs
{
    public class OrderDto
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int IdProduct { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public String Size { get; set; }
        public String Color { get; set; }
        public bool Status { get; set; }
        public int Total { get; set; }

    }
}