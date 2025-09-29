# config/initializers/inflections.rb
ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.irregular 'barbearia', 'barbearias'
  inflect.irregular 'barbeiro', 'barbeiros'
end