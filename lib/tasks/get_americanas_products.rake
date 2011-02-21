task :get_americanas_products => :environment do
  require 'mechanize'
  agent = Mechanize.new
  agent.get("http://www.americanas.com.br")
  
  agent.page.search(".hproduct").each do |item|
    product = Product.new
    product.name = item.search(".fn").first.text
    product.price = item.search(".sale.price").first.text.gsub(/[^0-9,]/, '').gsub(",", ".")
    product.save

    puts "saving product id....#{product.id}"
  end
  
end