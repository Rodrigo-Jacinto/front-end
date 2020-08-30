nome = gets.strip #Limpa os espações vazios na String

puts "Olá: #{nome} tem #{nome.size}" #Interpolção de strings

# Metódos
str.upcase => "TESTE"
str.upcase.downcase => "teste"
str.sub("t","d") => "deste"
str.gsub("t","d") => "desde"
str.capitalize => "Desde"
str.reverse => "etset"
str.split("t") => ["","es","e"]
nome.dup #cria novo objeto na mémoria
nome.freeze #Congela a String para n ser modificada
