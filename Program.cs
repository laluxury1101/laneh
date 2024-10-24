using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VideoCall.Grpc; // Import namespace từ file .proto đã generate

var builder = WebApplication.CreateBuilder(args);

// Add gRPC services to the container
builder.Services.AddGrpc();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// gRPC Web: middleware cho phép client TypeScript kết nối với server ASP.NET Core thông qua gRPC-Web
app.UseGrpcWeb();

// Map các dịch vụ gRPC của bạn
app.MapGrpcService<VideoCallServiceImpl>()
   .EnableGrpcWeb(); // Bật hỗ trợ gRPC-Web cho service

app.MapGet("/", () => "gRPC service is running.");

// Run the application
app.Run();
