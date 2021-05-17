using System.Collections.Generic;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AlohaApi.Controllers;
using AlohaApi.Data;
using AlohaApi.DTOs;
using AlohaApi.DTOs.Input;
// using AlohaApi.Interfaces;
using AlohaApi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace API.Controllers
{
    public class AccountsController : ApiControllerBase
    {
        private readonly ProductContext _context;
        // private readonly ITokenService _tokenService;



        public AccountsController(ProductContext context)
        {
            _context = context;
            // _tokenService = tokenService;


        }
        [HttpPut]
        public async Task<IActionResult> UpdateAccount(AccountDto accountDto)
        {
            var account = await _context.Account.FindAsync(accountDto.Id);
            if (account == null) return NotFound();

            account.Mapto(accountDto);

            _context.Account.Update(account);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!AccountExists(account.Phonenumber))
            {
                return NotFound();

            }
            return NoContent();
        }
        [HttpGet]
        public async Task<IEnumerable<AccountDto>> GetAccounts()
        {
            return await _context.Account
                .Select(p => p.ToDto())
                .ToListAsync();
        }


        [HttpPost("Login")]
        public ActionResult<AccountDto> Login(LoginInput loginInput)
        {
            var user = _context.Account.FirstOrDefault(u => u.Phonenumber.ToLower() == loginInput.Phonenumber.ToLower());
            if (user == null) return Unauthorized("Invalid Phonenumber");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginInput.Password));

            if (!computedHash.SequenceEqual(user.PasswordHash))
            {
                return Unauthorized("Invalid Password");
            }

            return new AccountDto
            {
                Name = user.Name,
                Address = user.Address,
                Phonenumber = user.Phonenumber,
                // Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("Register")]
        public async Task<ActionResult<AccountDto>> Register(RegisterInput registerInput)
        {
            if (await PhonenumberExists(registerInput.Phonenumber))
            {
                return BadRequest("Phonenumber is taken");
            }

            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                Phonenumber = registerInput.Phonenumber,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerInput.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Account.Add(user);
            await _context.SaveChangesAsync();

            return new AccountDto
            {
                Name = user.Name,
                Address = user.Address,
                Phonenumber = user.Phonenumber,
                // Token = _tokenService.CreateToken(user)
            };
        }
        [HttpPost]
        public async Task<ActionResult<AccountDto>> CreateAccount([FromBody] AccountDto accountDto)
        {
            var account = accountDto.ToModel();

            _context.Account.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccount), new { Id = account.Id }, account);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAcount(int id)
        {
            var account = await _context.Account.FindAsync(id);
            if (account == null) return NotFound();
            _context.Account.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("{phonenumber}&&{pass}")]
        public async Task<ActionResult<AccountDto>> GetAccount(string phonenumber, string pass)
        {
            var account = await _context.Account
                  .Where(o => o.Pass == pass
                    && o.Phonenumber == phonenumber)

                  .FirstOrDefaultAsync();
            return (account == null) ? NotFound() : account.ToDto();
        }
        [HttpGet("{phonenumber}")]
        public async Task<ActionResult<AccountDto>> GetAccountByPhonenumber(String phonenumber)
        {
            var account = await _context.Account
                  .Where(o => o.Phonenumber == phonenumber)
                  .FirstOrDefaultAsync();
            return (account == null) ? NotFound() : account.ToDto();
        }


        private async Task<bool> PhonenumberExists(string phonenumber)
        {
            return await _context.Account.AnyAsync(u => u.Phonenumber.ToLower() == phonenumber.ToLower());
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<OrderDto>> GetOrder(int id)
        // {
        //     var order = await _context.Orders.FindAsync(id);
        //     if (order == null) return NotFound();
        //     return order.ToDto();
        // }

        private bool AccountExists(string phonenumber)
        {
            return _context.Account.Any(p => p.Phonenumber == phonenumber);
        }

    }
}