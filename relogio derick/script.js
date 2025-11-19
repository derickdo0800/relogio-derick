// Seleciona os elementos dos ponteiros no DOM
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

// Função para atualizar os ponteiros conforme o tempo
function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calcula os “graus” para cada ponteiro
  // Um relógio tem 360° por volta
  // - Hora: 12 horas → cada hora = 30° (360/12), mais parte proporcional dos minutos
  const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
  // - Minuto: 60 minutos → cada minuto = 6° (360/60), mais parte dos segundos
  const minutesDegrees = minutes * 6 + (seconds / 60) * 6;
  // - Segundo: 60 segundos → cada segundo = 6°
  const secondsDegrees = seconds * 6;

  // Aplica a rotação nos elementos CSS por meio de transform
  hourHand.style.transform = `translateX(-50%) translateY(0) rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) translateY(0) rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `translateX(-50%) translateY(0) rotate(${secondsDegrees}deg)`;
}

// Atualiza o relógio a cada segundo (1000 ms)
setInterval(updateClock, 1000);

// Chama a função agora para definir a posição inicial
updateClock();
