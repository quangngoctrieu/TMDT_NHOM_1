using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlohaApi.Controllers;
using AlohaApi.Data;
using AlohaApi.DTOs;
using AlohaApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AlohaApi.Controllers
{

    public class ProductsController : ApiControllerBase
    {
        private ProductContext _context;
        private readonly string _apiUrl;
        public ProductsController(ProductContext context, IConfiguration config) //dependency Injection
        {
            _apiUrl = config["ApiUrl"];
            _context = context;
        }

        //GET: baseUrl/api/products
        [HttpGet]
        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            return await _context.Products
                .Select(p => p.ToDto(_apiUrl))
                .ToListAsync();
        }

        //GET: baseUrl/api/products/1
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return product.ToDto(_apiUrl);
        }

        //POST: baseUrl/api/products/1
        [HttpPost]
        public async Task<ActionResult<ProductDto>> CreateProduct([FromBody] ProductDto productDto)
        {
            var product = productDto.ToModel();

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { Id = product.Id }, product);
        }

        //PUT: baseUrl/api/products/1
        [HttpPut]
        public async Task<IActionResult> UpdateProduct(ProductDto productDto)
        {
            var product = await _context.Products.FindAsync(productDto.Id);
            if (product == null) return NotFound();

            product.Mapto(productDto);

            _context.Products.Update(product);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!ProductExists(product.Id))
            {
                return NotFound();

            }



            return NoContent();
        }

        //DELETE: baseUrl/api/products/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(p => p.Id == id);
        }
    }
}