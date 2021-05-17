namespace AlohaApi.Models.Cart
{
    public class OrderDetail
    {
        public AppUser User { get; set; }
        public int Id { get; set; }
        public int Price { get; set; }

        public string Name { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public bool Status { get; set; }
        public int Total { get; set; }
        public Product Product { get; set; }
    }
}