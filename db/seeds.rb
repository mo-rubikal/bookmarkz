Category.find_or_create_by(name: "Product & Design") do |category|
  Subcategory.find_or_create_by(name: "Product Managment", category: category)
  Subcategory.find_or_create_by(name: "Product Design", category: category)
end

Category.find_or_create_by(name: "Engineering") do |category|
  Subcategory.find_or_create_by(name: "Database & Queuing Systems", category: category)
  Subcategory.find_or_create_by(name: "Farmeworks & Languages", category: category)
  Subcategory.find_or_create_by(name: "Machine Learning", category: category)
  Subcategory.find_or_create_by(name: "Microservices", category: category)
end

Category.find_or_create_by(name: "Startups & Business") do |category|
  Subcategory.find_or_create_by(name: "Culture", category: category)
  Subcategory.find_or_create_by(name: "Marketing", category: category)
  Subcategory.find_or_create_by(name: "Invertment & Frundraising", category: category)
  Subcategory.find_or_create_by(name: "Growth", category: category)
  Subcategory.find_or_create_by(name: "Interviewing & Hiring", category: category)
  Subcategory.find_or_create_by(name: "Sales & Biz Dev", category: category)
end