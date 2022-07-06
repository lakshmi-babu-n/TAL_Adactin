using TAL.Api.Interfaces;
using TAL.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add dependencies.
builder.Services.AddSingleton<IPremiumService, PremiumService>();
builder.Services.AddSingleton<IOccupationService, OccupationService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("http://localhost:4200", "http://localhost:49357")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});
var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
