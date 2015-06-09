# Blue

Subvisual's UI Kit.

## Install

Create the submodule's directory:

```bash
$ git submodule add git@github.com:groupbuddies/blue.git vendor/blue
```

Add the submodule to sprockets (optional):

**Middleman**

```ruby
# config.rb
after_configuration do
  %w(javascripts stylesheets images).each do |dir|
    sprockets.append_path File.join "#{root}", "vendor/blue/#{dir}"
  end
end
```

**Rails**

```ruby
# config/initliazers/assets.rb

%w(javascripts stylesheets images).each do |dir|
  Rails.application.config.assets.paths << Rails.root.join('vendor, 'assets, 'blue', dir)
end
```

## Usage

Regular git submodule usage. Learn about it [here](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/).
