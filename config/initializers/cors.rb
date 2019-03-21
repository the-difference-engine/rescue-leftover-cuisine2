# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# config.middleware.insert_before 0, Rack::Cors do
#     allow do
#         origins "localhost:3000", "127.0.0.1:3000", "*"
#         resource "*",
#             :headers => :any,
#             :expose  => [
#                 "X-Requested-With",
#                 "Content-Type",
#                 "Authorization",
#                 "Accept",
#                 "Client-Security-Token",
#                 "Accept-Encoding",
#                 "iat",
#                 "exp",
#                 "jti"
#             ],
#             :methods => [:get, :post, :options, :delete, :put, :head]
#         end
#     end
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins "localhost:3000", "127.0.0.1:3000", "*"
        resource "*",
            :headers => :any,
            :expose  => [
                "X-Requested-With",
                "Content-Type",
                "Authorization",
                "Accept",
                "Client-Security-Token",
                "Accept-Encoding",
                "iat",
                "exp",
                "jti"
            ],
            :methods => [:get, :post, :options, :delete, :put, :head]
    end
end
