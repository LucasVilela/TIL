# Some Useful commands on the Rails DB


References: 

- https://www.tunnelsup.com/rails-activerecord-console-commands/
- https://guides.rubyonrails.org/v4.2/active_record_basics.html


```ruby
Find the user
User.where(email: "test@innowell.org")

Update 
User.where(email: "test@innowell.org").update(password: "Test12345")
```