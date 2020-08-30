begin
  nome = '10'
  numero = 10

  resultado = nome + numero
  puts resultado

rescue => exception
  puts "Ocorreu um erro do Tipo: #{exception.class}:\n #{exception}"
end
