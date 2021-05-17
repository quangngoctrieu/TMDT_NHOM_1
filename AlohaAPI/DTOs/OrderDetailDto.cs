using System;
using System.Collections.Generic;

namespace AlohaApi.DTOs
{
    public class OrderDetailDto
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int IdProduct { get; set; }
        public String Name { get; set; }
        public int Price { get; set; }
        public string Size { get; set; }
        public String Color { get; set; }
        public bool Status { get; set; }
        public int Total { get; set; }
        public IEnumerable<OrderDetailDto> OrderDetails { get; set; }
    }
}