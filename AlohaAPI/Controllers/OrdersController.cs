using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using AlohaApi.Data;
using AlohaApi.DTOs;
using AlohaApi.DTOs.Input;
using AlohaApi.Models.Cart;
using AlohaApi.DTOs.InputModels;

namespace AlohaApi.Controllers
{

    public class OrdersController : ApiControllerBase
    {
        private ProductContext _context;

        public OrdersController(ProductContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<OrderDto>> GetOrders()
        {
            return await _context.Orders
                    .Select(p => p.ToDto())
                    .ToListAsync();
        }



        // [HttpGet("{id}")]
        // public async Task<ActionResult<OrderDto>> GetOrder(int id)
        // {
        //     var order = await _context.Orders.FindAsync(id);
        //     if (order == null) return NotFound();
        //     return order.ToDto();
        // }


        [HttpPost]
        public async Task<ActionResult<OrderDto>> CreateOrder([FromBody] OrderDto orderDto)
        {
            var order = orderDto.ToModel();

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrders), new { Id = order.Id }, order);
        }


        [HttpGet("{status}")]
        public async Task<IEnumerable<OrderDto>> GetOrderByStatus(bool status)
        {
            var order = await _context.Orders
                .Where(o => o.Status == status)
                .ToListAsync();

            return order.ToDtos();
        }

    }
}