import "./hojaClases.css";
import "./tablaGuerrero.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>GUERRERO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del guerrero</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza o destreza</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D10 por nivel de guerrero</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza y constitución</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 2: acrobacias, trato con animales, atleticas,
                        historia, perspicacia, intimidación, persuasión,
                        percepción o supervivencia.
                      </p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armas:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armas simples y marciales</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armaduras:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armaduras ligeras,medianas y escudos</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A, B o C: (A)Cota de malla, espadón, 1 Mayal, 8
                        javalinas, 1 pack de explorador de mazmorras y 4 monedas
                        de oro;(B)armadura de cuero tachonado, 1 cimitarra, 1
                        espada corta, 1 arco largo,20 flechas, 1 carcaj, 1 pack
                        de explorador de mazmorras y 11 monedas de oro; o (C)
                        155 monedas de oro;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerGuerrero.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los luchadores dominan muchos campos de batalla. Caballeros
              buscadores, campeones reales, soldados de élite y mercenarios
              curtidos: como luchadores, todos comparten una destreza sin igual
              con las armas y las armaduras. Y están familiarizados con la
              muerte, tanto para infligirla como para desafiarla.
            </p>
            <p>
              Los luchadores dominan varias técnicas con armas, y un luchador
              bien equipado siempre tiene a mano la herramienta adecuada para
              cualquier situación de combate. Del mismo modo, un luchador domina
              todas las formas de armadura. Más allá de ese grado básico de
              familiaridad, cada luchador se especializa en ciertos estilos de
              combate. Algunos se concentran en el tiro con arco, otros en
              luchar con dos armas a la vez y otros en aumentar sus habilidades
              marciales con magia. Esta combinación de amplias habilidades y
              gran especialización convierte a los luchadores en combatientes
              superiores.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de guerrero</h1>
              <div className="tablaOverflow">
                <div className="tablaProgresion">
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>Nivel</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>Bonificador de proficiencia</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Características de clase</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>1</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Segundo aliento y estilo de combate</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>2</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Acción súbita</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>3</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Escoge una subclase</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>4</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>5</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Ataque adicional</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>6</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>7</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Caracteristica de subclase</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>8</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>9</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Indomable</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>10</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Caracteristica de subclase</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>11</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Ataque extra mejorado</p>
                    </div>
                  </div>

                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>12</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Segundo aliento</h3>
              <p>
                Recurre a tu resistencia para curarte. Una vez por descanso
                corto, puedes recuperar 1d10 + nivel de luchador puntos de vida.
              </p>
              <h3>Estilo de combate</h3>
              <p>Escoge 1:</p>
              <p>
                <b>Arqueria: </b>Obtienes un bonificador +2 a las tiradas de
                ataque con armas a distancia.
              </p>
              <p>
                <b>Defensa: </b>Obtienes un bonificador +1 a la clase de
                armadura mientras lleves una armadura.
              </p>
              <p>
                <b>Duelista: </b>Cuando empuñas un arma cuerpo a cuerpo en una
                mano y no tienes ningún arma en la otra, obtienes un bonificador
                +2 a las tiradas de daño con esa arma.
              </p>
              <p>
                <b>Combate con dos armas: </b>Cuando realizas un ataque con el
                arma en tu mano no dominate, puedes sumar tu modificador de
                puntuación de habilidad al daño del ataque.
              </p>
              <p>
                <b>Combate con armas grandes: </b>Cuando obtienes un 1 o 2 en un
                dado de daño de un ataque con un arma cuerpo a cuerpo a dos
                manos, ese dado se vuelve a lanzar una vez mas.
              </p>
              <p>
                <b>Protección: </b>Cuando tienes un escudo equipado, puedes
                impones desventaja a un enemigo que ataque a uno de tus aliados
                cuando estés a menos de 5 pies de ambos. Debes poder ver al
                enemigo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Acción súbita</h3>
              <p>
                Usalo para ganar inmediatamente una acción extra para usar ese
                turno. Se recarga con un descanso corto.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Escoge una subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 4</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 5</h2>
              <h3>Ataque adicional</h3>
              <p>
                Puedes atacar dos veces, en lugar de una, siempre que realices
                la acción atacar en tu turno.
              </p>
              <h3>Movimiento rápido</h3>
              <p>
                Tu velocidad de movimiento aumenta en 10 pies mientras no lleves
                armadura pesada.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 8</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 9</h2>
              <h3>Indomable</h3>
              <p>
                Te has vuelto tan resistente como un gólem de hierro. Siempre
                que falles una tirada de salvación, puedes volver a tirar,
                usando el nuevo resultado.
              </p>
              <p>Recarga: Descanso largo.</p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Ataque extra mejorado</h3>
              <p>
                Puedes realizar dos ataques adicionales (en lugar de uno)
                después de usar la acción de ataque.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 12</h2>
              <h3>Mejora de caracteristicas</h3>{" "}
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <h1>Subclases de guerrero</h1>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Maestro de batalla</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoGuerreroSub1.png"
                    alt=""
                  />
                  <h2>
                    Como dechado de superioridad táctica, empleas un amplio
                    abanico de maniobras de combate para dominar cada combate.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase1"
                    src="http://localhost:5173/imagenes/iconos/sumar.svg"
                    alt=""
                    onClick={() => {
                      const estado =
                        document.getElementById("divSubInferior1").style
                          .display;
                      if (estado == "none") {
                        document.getElementById(
                          "divSubInferior1"
                        ).style.display = "flex";
                        document.getElementById("imgBotonSubclase1").src =
                          "http://localhost:5173/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior1"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase1").src =
                          "http://localhost:5173/imagenes/iconos/sumar.svg";
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior1"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Dados de superioridad</h3>
                  <p>
                    Tus dados de superioridad son d8 y tienes 4 de estos. Puedes
                    usar estos dados para alimentan tus maniobras de maestro de
                    batalla y se gastan al usarlos. Recuperas los Dados de
                    Superioridad gastados tras un Descanso Corto o un Descanso
                    Largo.
                  </p>
                  <h3>Maniobras</h3>
                  <p>
                    Dificultad de salvación de maniobra = 8 + Modificador de
                    competencia + tu modificador de Fuerza o Destreza, el que
                    sea mayor.
                  </p>
                  <p>Elige 3 maniobras para aprender:</p>
                  <p>
                    <b>Golpe del Comandante: </b>Gasta un ataque de tu acción de
                    ataque y una acción adicional para dirigir a un aliado a
                    golpear a un enemigo. El aliado utiliza su reacción para
                    realizar un ataque con arma en su turno.
                  </p>
                  <p>
                    <b>Ataque de desarme: </b>Gasta un dado de superioridad para
                    realizar un ataque que inflige 1d8 puntos de daño de arma
                    adicionales y posiblemente obliga al objetivo a soltar las
                    armas que lleva en la mano.
                  </p>
                  <p>
                    <b>Golpe distractor: </b> Distrae a tu objetivo, dando
                    ventaja a tus aliados en su próxima tirada de ataque contra
                    el objetivo.
                  </p>
                  <p>
                    <b>Juego de pies evasivo: </b>Puedes evadir ataques
                    imponiendo desventaja a los ataques cuerpo a cuerpo contra
                    ti durante un asalto.
                  </p>
                  <p>
                    <b>Ataque con finta: </b>Utiliza tu acción y tu acción
                    adicional en un turno para atacar a un objetivo con Ventaja
                    e infligir 1d8 puntos de daño adicionales.
                  </p>
                  <p>
                    <b>Ataque de provocación: </b>Inflige 1d8 puntos de daño de
                    arma extra y intentas provocar al objetivo que atacas. El
                    objetivo recibe desventaja al atacar a cualquier otra
                    criatura que no seas tu.
                  </p>
                  <p>
                    <b>Ataque de maniobra: </b>Gasta un dado de superioridad
                    para realizar un ataque que inflige 1d8 puntos de daño
                    adicionales. Al impactar, elige qué criatura aliada ganará
                    la mitad de su velocidad de movimiento y al moverse no
                    provocará ataques de oportunidad.
                  </p>
                  <p>
                    <b>Ataque amenazador: </b>Gasta un dado de superioridad para
                    realizar un ataque que inflige 1d8 puntos adicionales de
                    daño de arma y intentas asustar al objetivo.
                  </p>
                  <p>
                    <b>Precision Attack: </b>Gasta un dado de superioridad y
                    suma su resultado a una tirada de ataque.
                  </p>
                  <p>
                    <b>Ataque por empuje: </b>Gasta un dado de superioridad para
                    realizar un ataque que inflige 1d8 puntos de daño de arma
                    adicionales y posiblemente hace retroceder al objetivo 10
                    pies.
                  </p>
                  <p>
                    <b>Reagruparse: </b> Gasta un dado de superioridad para
                    otorgar a un aliado 8 puntos de golpe temporales, reforzando
                    su determinación.
                  </p>
                  <p>
                    <b>Réplica: </b>Cuando una criatura hostil te falla con un
                    ataque cuerpo a cuerpo, gastas un dado de superioridad para
                    contraatacar con un poderoso ataque que inflige 1d8 puntos
                    de daño adicionales.
                  </p>
                  <p>
                    <b>Ataque de barrido</b>Gira tu arma en un arco rápido y
                    amplio para atacar a todos los enemigos a 5 pies de ti a la
                    vez. Tira tu dado de superioridad para calcular el daño.
                  </p>
                  <p>
                    <b>Ataque desestabilizador</b>Gasta un dado de superioridad
                    para realizar un ataque que inflige 1d8 puntos de daño
                    adicionales y posiblemente derriba al objetivo. El objetivo
                    debe ser Grande o más pequeño.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Dados de superioridad</h3>
                  <p>
                    Ganas 1 dado de superioridad mas (5 en total) y escoges 2
                    maniobras mas
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Dados de superioridad mejorados</h3>
                  <p>
                    El tamaño de tus Dados de Superioridad aumenta.ahora son un
                    d10
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Berserker</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoGuerreroSub2.png"
                    alt=""
                  />
                  <h2>
                    Abordas los complejos problemas que plantea el combate con
                    una solución claramente eficaz: golpea esos problemas, y muy
                    fuerte.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase2"
                    src="http://localhost:5173/imagenes/iconos/sumar.svg"
                    alt=""
                    onClick={() => {
                      const estado =
                        document.getElementById("divSubInferior2").style
                          .display;
                      if (estado == "none") {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "flex";
                        document.getElementById("imgBotonSubclase2").src =
                          "http://localhost:5173/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase2").src =
                          "http://localhost:5173/imagenes/iconos/sumar.svg";
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior2"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Golpe crítico mejorado</h3>
                  <p>
                    El número que necesitas para lanzar un golpe crítico al
                    atacar se reduce en 1. Este efecto puede acumularse.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Atleta notable: Saltar</h3>
                  <p>
                    Eres un maestro de tu propio cuerpo, tu destreza atlética se
                    extiende más allá de lo habitual. Tu distancia de salto
                    aumenta en 10 pies.
                  </p>
                  <h3>Atleta notable: Proficiencia</h3>
                  <p>
                    Eres un maestro de tu propio cuerpo, tus proezas atléticas
                    van más allá de lo habitual. Puedes añadir la mitad de tu
                    bonificación de competencia a los chequeos de fuerza,
                    destreza y constitución que no domines.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Estilo de combate</h3>
                  <p>Escoge 1 estilo de combate adicional:</p>
                  <p>
                    <b>Arqueria: </b>Obtienes un bonificador +2 a las tiradas de
                    ataque con armas a distancia.
                  </p>
                  <p>
                    <b>Defensa: </b>Obtienes un bonificador +1 a la clase de
                    armadura mientras lleves una armadura.
                  </p>
                  <p>
                    <b>Duelista: </b>Cuando empuñas un arma cuerpo a cuerpo en
                    una mano y no tienes ningún arma en la otra, obtienes un
                    bonificador +2 a las tiradas de daño con esa arma.
                  </p>
                  <p>
                    <b>Combate con dos armas: </b>Cuando realizas un ataque con
                    el arma en tu mano no dominate, puedes sumar tu modificador
                    de puntuación de habilidad al daño del ataque.
                  </p>
                  <p>
                    <b>Combate con armas grandes: </b>Cuando obtienes un 1 o 2
                    en un dado de daño de un ataque con un arma cuerpo a cuerpo
                    a dos manos, ese dado se vuelve a lanzar una vez mas.
                  </p>
                  <p>
                    <b>Protección: </b>Cuando tienes un escudo equipado, puedes
                    impones desventaja a un enemigo que ataque a uno de tus
                    aliados cuando estés a menos de 5 pies de ambos. Debes poder
                    ver al enemigo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
