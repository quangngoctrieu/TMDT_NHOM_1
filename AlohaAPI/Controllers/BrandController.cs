using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlohaApi.Controllers;
using AlohaApi.Data;
using AlohaApi.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AlohaApi.Controllers
{
    public class BrandController : ApiControllerBase
    {
        private ProductContext _context;
        public BrandController(ProductContext context) //dependency Injection
        {

            _context = context;
        }

        //GET: baseUrl/api/products
        [HttpGet]
        public async Task<IEnumerable<BrandDto>> GetBrands()
        {
            return await _context.Brands
                    .Select(p => p.ToDto())
                    .ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<BrandDto>> GetBrand(int id)
        {
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null) return NotFound();
            return brand.ToDto();
        }
        [HttpPut]
        public async Task<IActionResult> UpdateBrand(BrandDto brandDto)
        {
            var brand = await _context.Brands.FindAsync(brandDto.Id);
            if (brand == null) return NotFound();

            brand.Mapto(brandDto);

            _context.Brands.Update(brand);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!BrandExists(brand.Id))
            {
                return NotFound();

            }



            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<BrandDto>> CreateBrand([FromBody] BrandDto brandDto)
        {
            var brand = brandDto.ToModel();

            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBrands), new { Id = brand.Id }, brand);
        }
        private bool BrandExists(int id)
        {
            return _context.Products.Any(p => p.Id == id);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null) return NotFound();
            _context.Brands.Remove(brand);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}