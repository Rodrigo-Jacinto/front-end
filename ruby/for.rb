for cont in 1..5
  puts "Contando " + cont.to_s
end

loop do #Loop Infinito
  puts "Digite um Número"
  numero = gets

  if numero.to_i == 10
    break
  end
end

contador = 0
while contador < 2
  puts "Laço While: " + contador.to_s
  contador+=1
end
