using AspNetIdentity.Shared;
using Microsoft.AspNetCore.Identity;

namespace AspNetIdentityDemo.Services
{
    public interface IUserService
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model);
    }

    public class UserService : IUserService
    {

        private UserManager<IdentityUser> _userManager;

        public UserService(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model)
        {
            if(model == null)
            {
                throw new NullReferenceException("Register model is null");
            }

            if(model.Password != model.ConfirmPassword)
            {
                return  new UserManagerResponse
                {
                    Message = "Confirm password doesn't match password",
                    IsSuccess = false
                };

            }

            var identityUser = new IdentityUser
            {
                Email = model.Email,
                UserName = model.Email,
            };

            var result =await _userManager.CreateAsync(identityUser,model.Password);

            if (result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created with success",
                    IsSuccess = true,
                };
            }
            return new UserManagerResponse
            {
                Message = "User did not create",
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description)

            };
        }
    }
}
