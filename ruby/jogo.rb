def de_boas_vindas
    puts
     puts "        P  /_\  P                              "
     puts "       /_\_|_|_/_\                             "
     puts "   n_n | ||. .|| | n_n         Bem vindo ao    "
     puts "   |_|_|nnnn nnnn|_|_|     Jogo de Adivinhação!"
     puts "  |' '  |  |_|  |'  ' |                        "
     puts "  |_____| ' _ ' |_____|                        "
     puts "        \__|_|__/                              "
     puts
     puts "Qual é o seu nome?"
  nome = gets.strip
  puts "\n\n"
  puts "Vamos Começar o jogo, #{nome}"
  nome
end

def sorteia_numero_secreto(dificuldade)

  case dificuldade
  when 1
    maximo = 30
  when 2
    maximo = 60
  when 3
    maximo = 100
  when 4
    maximo = 150
  else
    maximo = 200
  end

  puts "Acerte o número de 1 á #{maximo}..."
  sorteado = rand(maximo) + 1
  puts "Que tal tentar Advinhar o número secreto ?"
  sorteado
end

def pede_um_numero (tentativa, chutes, numeros_tentativas)
  puts "Dê Seu chute, Tentativa #{tentativa} de #{numeros_tentativas}"
  puts "Números que você já Chutou: " + chutes.to_s
  chute = gets.strip
  puts "Será que você Acertou? você chutou: " + chute
  chute.to_i
end

def verifica_se_acertou (numero_secreto, chute)
  acertou =  numero_secreto == chute

  if acertou
    ganhou
    return true
  end

  maior = numero_secreto > chute
  if maior
    puts "O número secreto é maior!"
  else
    puts "O número secreto é menor!"
  end
  false
end

def pede_dificuldade
  puts "(1) Muito fácil (2) Fácil (3) Normal (4) Difícil (5) Impossível"
  puts "Escolha: "
  dificuldade = gets.to_i
end

def ganhou
    puts
    puts "             OOOOOOOOOOO               "
    puts "         OOOOOOOOOOOOOOOOOOO           "
    puts "      OOOOOO  OOOOOOOOO  OOOOOO        "
    puts "    OOOOOO      OOOOO      OOOOOO      "
    puts "  OOOOOOOO  #   OOOOO  #   OOOOOOOO    "
    puts " OOOOOOOOOO    OOOOOOO    OOOOOOOOOO   "
    puts "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  "
    puts "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  "
    puts "OOOO  OOOOOOOOOOOOOOOOOOOOOOOOO  OOOO  "
    puts " OOOO  OOOOOOOOOOOOOOOOOOOOOOO  OOOO   "
    puts "  OOOO   OOOOOOOOOOOOOOOOOOOO  OOOO    "
    puts "    OOOOO   OOOOOOOOOOOOOOO   OOOO     "
    puts "      OOOOOO   OOOOOOOOO   OOOOOO      "
    puts "         OOOOOO         OOOOOO         "
    puts "             OOOOOOOOOOOO              "
    puts
    puts "               Acertou!                "
    puts
end

def joga(nome, dificuldade)

  numero_secreto = sorteia_numero_secreto(dificuldade)

  numeros_tentativas = 5
  chutes = []


  for tentativa in 1..numeros_tentativas
    chute = pede_um_numero tentativa, chutes, numeros_tentativas
    chutes << chute

    if nome == "Rodrigo"
      ganhou
      break
    end

    if verifica_se_acertou numero_secreto, chute
      break
    end

    puts "\n\n"
  end
end

def nao_quer_jogar?
  puts "Quer Jogar Novamente (S/N)?"
  quero_jogar = gets.strip
  nao_quero_jogar = quero_jogar.upcase == "N"
end

nome = de_boas_vindas
dificuldade = pede_dificuldade

loop do
  joga nome, dificuldade
  if nao_quer_jogar?
    break
  end
end
# Comentário de uma linha, o mais usado.

=begin
Comentários de Várias Linhas
=end
