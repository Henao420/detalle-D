const circle = document.querySelector(".circle");
const messageBox = document.getElementById("messageBox")

const messages = [
    "Eres real, y eso vale mucho", "Sabes estar sin querer llamar la atencion", "Tu vibra es de las que se quedan", "No necesitas hacer ruido para destacar", "Tu esencia brilla por ti, y eso enamora", "Hay personas que brillan sin esfuerzo, tu eres una de ellas y eso es unico", "Tu energia es diferente y eso se siente incluso hasta en silencio", "Bonita por dentro y por fuera", "Inteligente y segura, asi eres", "Eres unica", "Eres fuerte, pero tambien se lo dulce que eres", "Naturalmente linda", "Siempre de buen gusto", "Me encanta tu forma de pensar", "Eres hermosa sin esfuerzo", "Tienes estilo y mucha personalidad", "Eres increible", "Tu sonrisa tiene algo especial", "Tienes una mirada que destaca", "Encantas sin intentarlo", "Contigo el amor se siente real", "Tu sonrisa todavia vive en mi memoria", "Tus abrazos todavia son mi lugar seguro", "Contigo aprendi lo que es amar", "Tu voz aun me calma", "Tu risa sigue siendo mi sonido favorito", "A tu lado me sentia en casa", "Amar contigo fue unico", "Me gustaba quien era yo cuando estabamos juntos", "Contigo mis dias tenian sentido", "Fuiste y eres mi persona favorita", "Aun te siento en mi corazon, aunque no quieras", "Tu nombre me sigue provocando emocion", "Contigo el tiempo pasaba distinto", "Compartimos un amor bonito", "Nuestras miradas decian mas que mil palabras", "Contigo no era necesario fingir", "Contigo fui verdadero", "Me enseñaste a amar bonito", "Me enseñaste a cuidar", "Extraño nuestras platicas", "Extraño tus mensajes", "Extraño tu forma de querer", "Extraño tu forma de abrazar", "Extraño tu manera de estar", "Contigo aprendí lo que quiero", "Contigo entendí lo que es conexión", "Contigo el amor tuvo sentido", "Lo que hablabamos aún me importa", "Nuestros recuerdos siguen siendo parte de mi", "Tu cariño dejó huella", "Tu amor me marcó", "Lo nuestro fue sincero", "Lo nuestro fue bonito", "Lo nuestro fue verdadero",	"Contigo el corazón se abrió", "Contigo el amor fue hogar", "Aún te pienso con ternura", "Aún te recuerdo con amor", "Aún me importas", "Aún te llevo conmigo", "No te he sacado del corazón ", "Contigo aprendí a soñar", "Contigo imaginé un futuro", "Tus manos encajaban con las mías", "Tu presencia hacía todo mejor", "Tu amor me dio paz", "Tu amor me dio calma", "Tu amor me dio luz", "Contigo me sentí elegido", "Contigo me sentí suficient", "Contigo me sentí amado", "Contigo me sentí cuidado", "Aún me nace elegirte ", "El amor que te tenia no se borra"
]

let index = 0;

circle.addEventListener("click", () => {
    messageBox.innerHTML = messages[index];

    messageBox.style.opacity = "1";
    messageBox.style.transform = "translate(-50, -10px)";

    setTimeout(() => {
        messageBox.style.opacity = "0";
        messageBox.style.transform = "translate(-50, 0)";
    }, 3000);

    index = (index + 1) % messages.length;
});