using System;
using System.Collections.Generic;

namespace AlohaApi.DTOs.InputModels
{
    public class OrderInput
    {
        public string Phonenumber { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public IEnumerable<OrderDetailInput> OrderDetails { get; set; } = new List<OrderDetailInput>();
    }
}