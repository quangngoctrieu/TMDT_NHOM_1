using System;
using System.Collections.Generic;

namespace AlohaApi.Models.Cart
{
    public class Order
    {
        public Order() { }


        public int Id { get; set; }
        public int IdUser { get; set; }
        public int IdProduct { get; set; }
        public int Price { get; set; }
        public string Name { get; set; }

        public string Size { get; set; }
        public string Color { get; set; }
        public bool Status { get; set; }
        public int Total { get; set; }


    }
}