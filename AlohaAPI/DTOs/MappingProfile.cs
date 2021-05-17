using System.Collections.Generic;
using AlohaApi.DTOs;
using AlohaApi.Models;
using AlohaApi.Models.Cart;


namespace AlohaApi.DTOs
{
    public static class MappingProfile
    {
        public static ProductDto ToDto(this Product product, string apiUrl)
        {
            return new ProductDto()
            {
                Id = product.Id,
                Name = product.Name,
                Brand = product.Brand,
                Info = product.Info,
                Image = apiUrl + product.Image,
                Price = product.Price,

                Type = product.Type,
                Sold = product.Sold
            };
        }

        public static Product ToModel(this ProductDto productDto)
        {
            return new Product()
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Brand = productDto.Brand,
                Info = productDto.Info,
                Image = productDto.Image,
                Price = productDto.Price,

                Type = productDto.Type,
                Sold = productDto.Sold
            };
        }

        public static void Mapto(this Product product, ProductDto productDto)
        {
            product.Id = productDto.Id;
            product.Name = productDto.Name;
            product.Brand = productDto.Brand;
            product.Info = productDto.Info;
            product.Image = productDto.Image;
            product.Price = productDto.Price;

            product.Type = productDto.Type;
            product.Sold = productDto.Sold;
        }


        public static BrandDto ToDto(this Brand brand)
        {
            return new BrandDto()
            {
                Id = brand.Id,
                Name = brand.Name,
            };
        }

        public static Brand ToModel(this BrandDto brandDto)
        {
            return new Brand()
            {
                Id = brandDto.Id,
                Name = brandDto.Name
            };
        }

        public static void Mapto(this Brand brand, BrandDto brandDto)
        {
            brand.Id = brandDto.Id;
            brand.Name = brandDto.Name;
        }


        public static OrderDto ToDto(this Order order)
        {
            return new OrderDto()
            {
                Id = order.Id,
                IdUser = order.IdUser,
                IdProduct = order.IdProduct,
                Name = order.Name,
                Price = order.Price,
                Size = order.Size,
                Color = order.Color,
                Status = order.Status,
                Total = order.Total,
            };
        }
        public static Order ToModel(this OrderDto orderDto)
        {
            return new Order()
            {
                Id = orderDto.Id,
                IdUser = orderDto.IdUser,
                IdProduct = orderDto.IdProduct,
                Name = orderDto.Name,
                Price = orderDto.Price,
                Size = orderDto.Size,
                Color = orderDto.Color,
                Status = orderDto.Status,
                Total = orderDto.Total
            };
        }

        public static void Mapto(this Order order, OrderDto orderDto)
        {
            order.Id = orderDto.Id;
            order.IdUser = orderDto.IdUser;
            order.IdProduct = orderDto.IdProduct;
            order.Name = orderDto.Name;
            order.Price = orderDto.Price;
            order.Size = orderDto.Size;
            order.Color = orderDto.Color;
            order.Status = orderDto.Status;
            order.Total = orderDto.Total;
        }

        public static IEnumerable<OrderDto> ToDtos(this IEnumerable<Order> orders)
        {
            foreach (var order in orders)
            {
                yield return order.ToDto();
            }
        }
        public static AccountDto ToDto(this AppUser user)
        {
            return new AccountDto()
            {
                Id = user.Id,
                Pass = user.Pass,
                Name = user.Name,
                Address = user.Address,
                Phonenumber = user.Phonenumber,
            };
        }
        public static IEnumerable<AccountDto> ToDtos(this IEnumerable<AppUser> appUsers)
        {
            foreach (var appUser in appUsers)
            {
                yield return appUser.ToDto();
            }
        }

        public static AppUser ToModel(this AccountDto accountDto)
        {
            return new AppUser()
            {
                Id = accountDto.Id,
                Pass = accountDto.Pass,
                Name = accountDto.Name,
                Address = accountDto.Address,
                Phonenumber = accountDto.Phonenumber,
            };
        }

        public static void Mapto(this AppUser user, AccountDto accountDto)
        {
            user.Id = accountDto.Id;
            user.Pass = accountDto.Pass;
            user.Name = accountDto.Name;
            user.Address = accountDto.Address;
            user.Phonenumber = accountDto.Phonenumber;
        }



    }
}