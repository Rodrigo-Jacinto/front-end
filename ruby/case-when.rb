puts "----- Escolha o Menu -----"
puts "1 - Bom Dia\n 2 - Boa Tarde\n 3 - Boa Noite\n Escolha: "
opcao = gets

case opcao.to_i
when 1
  puts "Bom dia"
when 2
  puts "Boa tarde"
when 3
  puts "Boa Noite"
end
