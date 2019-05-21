# Finding a role in rails console


1. Find the user 
```ruby
user = User.find_by(email: 'user@email.org') 
```

2. Find what type of role they have 
```ruby 
# Assigning the role variable to 
roles = user.roles.first     

# Specific function for the system
roles.support_person_assignments_as_individual   
```

3. Deleting the role 
```ruby
# Go trough the roles and remove them all
roles.support_person_assignments_as_individual.each do |e|    
    e.destroy!    
end
```