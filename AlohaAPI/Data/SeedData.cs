using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AlohaApi.Models;
using AlohaApi.Models.Cart;
using Microsoft.AspNetCore.Identity;
namespace AlohaApi.Data
{
    public class SeedData
    {
        public static void Initialize(ProductContext context)
        {
            context.Database.EnsureCreated();

            SeedProducts(context);
            SeedUsers(context);
            SeedBrands(context);
            SeedOrders(context);

        }

        private static void SeedUsers(ProductContext context)
        {
            if (!context.Account.Any())
            {
                context.Account.Add(CreateUser("Quyen", "Cong Hoa", "0972559277", "123456"));
                context.SaveChanges();
                context.Account.Add(CreateUser("Nguyen", "Cong Hoa", "0971182235", "123456"));
                context.SaveChanges();
                context.Account.Add(CreateUser("admin", "Cong Hoa", "admin", "admin"));
                context.SaveChanges();
            }
        }
        private static AppUser CreateUser(string name, string address, string phonenumber, string pass)
        {
            using var hmac = new HMACSHA512();
            return new AppUser
            {
                Name = name,
                Address = address,
                Phonenumber = phonenumber,
                Pass = pass,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(pass)),
                PasswordSalt = hmac.Key
            };
        }



        private static void SeedProducts(ProductContext context)
        {
            if (!context.Products.Any())
            {
                Product product = new Product();
                context.Products.AddRange(new List<Product>()
                {
                    new Product {
                        Name = "Áo thun Hyper Pill",
                        Brand = "Play Dirty",
                        Info = "Áo thun không trơn",
                        Image ="images/dress.jpg" ,
                        Price = 300000,
                        Color = "",
                        Type = "Áo thun",
                        Sold = 10,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "blue",
                        Type = "so mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sweater",
                        Brand = "Play Dirty",
                        Info = "Sweater không trơn",
                        Image = "images/dress.jpg",
                        Price = 200000,
                        Color ="",
                        Type = "Áo khoắc",
                        Sold = 12,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "blue",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                    new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                     new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                     new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                     new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },
                     new Product {
                        Name = "Sơ mi trắng",
                        Brand = "Young Green",
                        Info = "Sơ mi trắng trơn",
                        Image = "images/dress.jpg",
                        Price = 350000,
                        Color = "",
                        Type = "Sơ mi",
                        Sold = 15,
                    },

                });

                context.SaveChanges();
            }
        }

        private static void SeedBrands(ProductContext context)
        {
            if (!context.Brands.Any())
            {
                context.Brands.AddRange(new List<Brand>()
                {
                    new Brand {
                        Name = "Play Dirty",
                    },
                    new Brand {
                        Name = "Young Green",
                    }
                });

                context.SaveChanges();
            }
        }
        private static void SeedOrders(ProductContext context)
        {
            if (!context.Orders.Any())
            {
                context.Orders.AddRange(new List<Order>()
                {
                    new Order {
                        IdUser=1,
                        IdProduct= 2,
                        Name= "sản phẩm 2",
                        Price=60000,
                        Size= "S",
                        Color= "white",
                        Total= 1,
                        Status= true,
                    },
                    new Order {
                        IdUser= 1,
                        IdProduct= 12,
                        Name= "sản phẩm 12",
                        Price= 20000000,
                        Size= "S",
                        Color= "white",
                        Total= 1,
                        Status= true,
                    },
                    new Order {
                       IdUser= 1,
                        IdProduct=29,
                        Name= "Sơ mi trắng",
                        Price= 10000,
                        Size= "S",
                        Color= "white",
                        Total= 1,
                        Status= false,
                    }
                });

                context.SaveChanges();
            }
        }
    }
}