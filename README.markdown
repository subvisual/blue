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
  sprockets.append_path File.join "#{root}", "vendor"
end
```

## Usage

Regular git submodule usage. Learn about it [here](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/).
