# -*- encoding: utf-8 -*-
# stub: warden-jwt_auth 0.3.5 ruby lib

Gem::Specification.new do |s|
  s.name = "warden-jwt_auth".freeze
  s.version = "0.3.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Marc Busqu\u00E9".freeze]
  s.bindir = "exe".freeze
  s.date = "2018-01-30"
  s.description = "JWT authentication for Warden, ORM agnostic and accepting the implementation of token revocation strategies.".freeze
  s.email = ["marc@lamarciana.com".freeze]
  s.homepage = "https://github.com/waiting-for-dev/warden-jwt_auth".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.4".freeze
  s.summary = "JWT authentication for Warden.".freeze

  s.installed_by_version = "3.0.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<dry-configurable>.freeze, ["~> 0.5"])
      s.add_runtime_dependency(%q<dry-auto_inject>.freeze, ["~> 0.4"])
      s.add_runtime_dependency(%q<jwt>.freeze, ["~> 2.1"])
      s.add_runtime_dependency(%q<warden>.freeze, ["~> 1.2"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<rack-test>.freeze, ["~> 0.6"])
      s.add_development_dependency(%q<pry-byebug>.freeze, ["~> 3.4"])
      s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.13"])
      s.add_development_dependency(%q<codeclimate-test-reporter>.freeze, ["~> 1.0"])
    else
      s.add_dependency(%q<dry-configurable>.freeze, ["~> 0.5"])
      s.add_dependency(%q<dry-auto_inject>.freeze, ["~> 0.4"])
      s.add_dependency(%q<jwt>.freeze, ["~> 2.1"])
      s.add_dependency(%q<warden>.freeze, ["~> 1.2"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<rack-test>.freeze, ["~> 0.6"])
      s.add_dependency(%q<pry-byebug>.freeze, ["~> 3.4"])
      s.add_dependency(%q<simplecov>.freeze, ["~> 0.13"])
      s.add_dependency(%q<codeclimate-test-reporter>.freeze, ["~> 1.0"])
    end
  else
    s.add_dependency(%q<dry-configurable>.freeze, ["~> 0.5"])
    s.add_dependency(%q<dry-auto_inject>.freeze, ["~> 0.4"])
    s.add_dependency(%q<jwt>.freeze, ["~> 2.1"])
    s.add_dependency(%q<warden>.freeze, ["~> 1.2"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rack-test>.freeze, ["~> 0.6"])
    s.add_dependency(%q<pry-byebug>.freeze, ["~> 3.4"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.13"])
    s.add_dependency(%q<codeclimate-test-reporter>.freeze, ["~> 1.0"])
  end
end
