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


## Using functions on active record 

Supposed I want to add a Role to a user 

```ruby 
User.find_by(email: 'test@innowell.org')

# Assign to a a variable
u=_
```

Inside the `user.tb` there is a method where you can add a user 


```ruby

  # add a role to a user
  def add_role_with_hash(role_type, inviter: nil, **tenant_or_group)
    roles.find_or_create_by!(tenant_or_group.merge(role_type: role_type, inviter: inviter)).tap do |role|
      build_initial_answer_set(role, tenant_or_group[:tenant])
    end
  end
```

Now in the `rais console` run 


```ruby
u.add_role_with_hash(Role::RESEARCHER)    
```

where `Role::RESEARCHER` is a short for `"RESEARCHER"`

ccccccieckvvbhglhrlrvgtkctdincihclekndrbvede
