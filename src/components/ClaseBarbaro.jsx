import "./hojaClases.css";
import "./tablaBarbaro.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>BARBARO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del bárbaro</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D12 por nivel de barbaro</p>
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
                        Escoge 2: Trato con animales, atletismo, intimidación,
                        naturaleza, percepción, or supervivencia.
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
                        Escoge A o B: (A)Gran hacha, 4 hachas de mano, 1 pack de
                        explorador y 15 monedas de oro; o (B)75 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerBarbaro.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los bárbaros son poderosos guerreros impulsados por las fuerzas
              primigenias del multiverso que se manifiestan en forma de Furia.
              Más que una simple emoción -y no se limita a la ira-, esta Furia
              es la encarnación de la ferocidad de un depredador, la furia de
              una tormenta y la agitación del mar.
            </p>
            <p>
              Algunos Bárbaros personifican su Furia como un espíritu feroz o un
              antepasado venerado. Otros la ven como una conexión con el dolor y
              la angustia del mundo, como una maraña impersonal de magia salvaje
              o como una expresión de su yo más profundo. Para cada Bárbaro, su
              Furia es un poder que no sólo alimenta su destreza en la batalla,
              sino también sus asombrosos reflejos y sentidos agudizados.
            </p>
            <p>
              Los Bárbaros suelen actuar como protectores y líderes de sus
              comunidades. Se lanzan de cabeza al peligro para que los que están
              bajo su protección no tengan que hacerlo. Su valor ante el peligro
              hace que los bárbaros sean perfectos para la aventura.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de bárbaro</h1>
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
                    <div className="columnaInfo1Prog">
                      <p>Furias</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Daño de furia</p>
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
                      <p>Furia y Defensa sin armadura</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Ataque temerario y Sentido del peligro</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Ataque adicional y movimiento rápido</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Instinto salvaje</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      {" "}
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Crítico brutal</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                    <div className="columnaInfo1Prog">
                      {" "}
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                      <p>Furia implacable</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
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
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>+2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Furia</h3>
              <p>Mientras estas en furia</p>
              <ul>
                <li>Resistencia a todo tipo de daño físico</li>
                <li>
                  Infliges daño cuerpo a cuerpo y de lanzamiento adicional
                </li>
                <li>
                  Tienes ventaja en chequeos y tiradas de salvación de fuerza.
                </li>
              </ul>
              <p>
                Tu furia dura 10 turnos y termina antes si no has atacado a una
                criatura o has sido atacado o si decides terminar tu Furia. No
                puedes lanzar conjuros ni concentrarte mientras estás furioso.
              </p>
              <h3>Defensa sin armadura</h3>
              <p>
                Cuando no lleves armadura, suma tu modificador de Constitución a
                tu Clase de Armadura además de tu modificador de Destreza.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Ataque temerario</h3>
              <p>
                Hasta tu siguiente turno, tienes ventaja en todas las tiradas de
                ataque, pero los enemigos también tienen ventaja en las tiradas
                de ataque contra ti.
              </p>
              <h3>Sentido del peligro</h3>
              <p>
                Tienes ventaja en las salvaciones de Destreza contra trampas,
                conjuros y superficies mientras no estés cegado o incapacitado.
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
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
              <h3>Instinto salvaje</h3>
              <p>
                Has perfeccionado tus instintos al máximo. Ganas un +3 a la
                iniciativa y no puedes ser Sorprendido.
              </p>
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
              <h3>Crítico brutal</h3>
              <p>
                Cuando consigues un golpe crítico, tiras un dado de daño extra
                además del dado crítico adicional normal.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Furia implacable</h3>
              <p>
                Una vez por descanso corto, si caes a 0 puntos de golpe mientras
                estás Enfurecido, recuperas 1 punto de golpe en lugar de ser
                derribado
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
            <h1>Subclases de barbaro</h1>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Corazón Salvaje</h1>
                <div>
                  <img src="/imagenes/general/logoBarbaroSub1.png" alt="" />
                  <h2>
                    Tu sintonía con la naturaleza y sus bestias inspira tu
                    furia, dotándote de un poder sobrenatural.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase1"
                    src="/imagenes/iconos/sumar.svg"
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
                          "/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior1"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase1").src =
                          "/imagenes/iconos/sumar.svg";
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
                  <h3>Hablar con los animales</h3>
                  <p>
                    Puedes usar el conjuro de nivel 1 "Hablar con Animales" sin
                    gastar un ranura de conjuro.
                  </p>
                  <p>Recarga: Descanso largo</p>
                  <h3>Corazón bestial</h3>
                  <p>
                    Elige un Corazón Bestial de la siguiente tabla. De aquí en
                    adelante, cada vez que subas de nivel en Bárbaro, puedes
                    reemplazar tu Corazón Bestial actual por uno diferente como
                    elección opcional.
                  </p>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Corazón de oso:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Mientras estas en furia tienes resistencia a todo el
                          daño excepto al daño psíquico.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Corazón de agila:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Mientras estas en furia los enemigos tienen desventaja
                          desventaja en ataques de oportunidad contra ti, y
                          puedes correr como acción adicional.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Corazón de alce:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Mientras estás en furia tu Velocidad de movimiento
                          aumenta en 15 pies.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Corazón de tigre:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Mientras estas en furia tu distancia de salto aumenta
                          en 15 pies.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Corazón de lobo:</b>
                      </div>
                      <div className="segundaColumnaPrin ">
                        <p>
                          Mientras estas en furia tus aliados tienen Ventaja en
                          las tiradas de Ataque cuerpo a cuerpo contra enemigos
                          a 10 pies de ti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Aspecto de la Bestia</h3>
                  <p>Elige un Aspecto de la Bestia de la siguiente tabla:</p>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Oso:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Tu capacidad de carga se duplica y tienes ventaja en
                          los chequeos de fuerza.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Chimpancé:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>Tienes resistencia al daño por caída</p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Cocodrilo:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Tu velocidad de movimiento aumenta en 10 pies mientras
                          estás de pie en superficies acuáticas. En superficies
                          resbaladizas, también tienes ventaja en las tiradas de
                          salvación para evitar que te derriben.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Águila:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Ves en la oscuridad hasta 40 pies y obtienes ventaja
                          en los chequeos de percepción.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Alce:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Concede a ti mismo y a los aliados cercanos (60 pies)
                          +5 pies de velocidad de movimiento permanente.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Tejón de la Miel:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Si estás envenenado asustado o encantado al inicio de
                          tu turno, tienes un 50% de posibilidades de empezar un
                          furia sin gastar una Carga.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Semental:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Correr te otorga puntos de golpe temporales
                          equivalentes al doble de tu nivel de bárbaro.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Tigre:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Añades un modificador de Fuerza adicional a las
                          tiradas de ataque contra enemigos sangrando o
                          envenenados, y obtienes competencia en supervivencia.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Lobo:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Tú y los aliados cercanos (60 pies) añadís vuestro
                          modificador de Destreza como bonificador a vuestros
                          chequeos de Sigilo.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin   finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Lobezno:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cuando atacas a un enemigo que esta sangrando o
                          envenenado, le infliges mutilación.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Nivel 8</h2>
                  <h3>Zancada de la tierra: terreno difícil</h3>
                  <p>
                    Te has convertido en un experto en moverte por la
                    naturaleza. El terreno difícil ya no te ralentiza.
                  </p>
                  <h3>Zancada de la tierra: plantas</h3>
                  <p>
                    Las superficies vegetales con espinas o peligros similares
                    ya no te dañan y tienes ventaja en tiradas de salvación
                    contra plantas creadas mágicamente para impedir tu
                    movimiento.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Aspecto de la Bestia</h3>
                  <p>
                    Puedes elegir un Aspecto de la Bestia adicional del que
                    beneficiarte, además de tu Aspecto Animal actual
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Berserker</h1>
                <div>
                  <img src="/imagenes/general/logoBarbaroSub2.png" alt="" />
                  <h2>
                    La violencia es a la vez un medio y un fin. Sigues un camino
                    de furia desenfrenada, manchado de sangre, mientras te
                    deleitas en el caos de la batalla, despreocupado de tu
                    propio bienestar.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase2"
                    src="/imagenes/iconos/sumar.svg"
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
                          "/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase2").src =
                          "/imagenes/iconos/sumar.svg";
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
                  <h3>Frenesí</h3>
                  <p>
                    ¡Tu Furia se convierte en Frenesí! Obtienes las dos
                    siguientes características como acción adicional mientras
                    estas en frenesí y también puedes realizar un ataque con
                    arma improvisada como acción adicional en cualquier momento:
                  </p>
                  <p>
                    <b>Golpe frenético:</b>realiza otro ataque con tus armas
                    utilizando una acción adicional.
                  </p>
                  <p>
                    <b>Lanzamiento enfurecido:</b>recoge un objeto o una
                    criatura y lánzalo contra un objetivo, infligiéndole daño
                    adicional y derribándolo{" "}
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Furia sin sentido</h3>
                  <p>
                    Mientras estas en frenesí, no puedes ser encantado o
                    asustado, y el conjuro calmar emociones ya no acaba con tu
                    furia.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Presencia intimidatoria</h3>
                  <p>
                    Amenaza a un enemigo y infundele un terrible miedo en su
                    interior. Si el objetivo resiste el efecto, no puede volver
                    a ser objetivo hasta después de un Descanso Largo. En los
                    turnos siguientes, puedes usar mantener tu presencia
                    intimidante para prolongar el miedo del objetivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Magia salvaje</h1>
                <div>
                  <img src="/imagenes/general/logoBarbaroSub3.png" alt="" />
                  <h2>
                    La salvaje influencia de la magia te ha transformado,
                    impregnándote de un poder arcano que se agita en tu interior
                    a la espera de ser liberado.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase3"
                    src="/imagenes/iconos/sumar.svg"
                    alt=""
                    onClick={() => {
                      const estado =
                        document.getElementById("divSubInferior3").style
                          .display;
                      if (estado == "none") {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "flex";
                        document.getElementById("imgBotonSubclase3").src =
                          "/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase3").src =
                          "/imagenes/iconos/sumar.svg";
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior3"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Oleada de magia salvaje</h3>
                  <p>
                    Una energía mágica se agita en tu interior, a punto de
                    estallar. Cuando entras en furia desencadenas un efecto
                    mágico aleatorio de la siguiente tabla, Algunos de estos
                    efectos pueden activarse cada turno siguiente como acción
                    adicional. Los efectos que activan una tirada de salvación
                    tienen una DC fija de 12.
                  </p>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Infusión de armas:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          La magia infunde tu arma. Inflige 1d6 puntos
                          adicionales de daño de tipo "Fuerza" y obtiene las
                          propiedades de ligera y lanzable. Si se lanza,
                          reaparece en tu mano al final de tu turno.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Retribución mágica:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Estás protegido por una magia salvaje y vengativa. Los
                          enemigos que te golpean reciben 1d6 puntos de daño de
                          tipo "Fuerza" como represalia.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Luces de protección:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Tú, y cualquier aliado en un radio de 10 pies de ti,
                          tenéis un bonificador +1 a la Clase de Armadura.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Espíritu intangible:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cada turno, como acción adicional, elige invocar un
                          espiritu en un radio de 30 pies de ti. El espiritu
                          explota al final de tu turno, infligiendo 1d6 puntos
                          de daño de tipo "Fuerza" a cualquiera que se encuentre
                          a 15 pies si falla una tirada de salvación de
                          Destreza.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Rayo de luz:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cada turno, como acción adicional, puedes disparar un
                          rayo de luz desde tu pecho a un objetivo en un radio
                          de 10 m de ti. El rayo inflige 1d6 puntos de daño de
                          tipo "Radiante" y Ciega al objetivo durante 1 turno si
                          falla una tirada de salvación de constitución.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Crecimiento de la vid:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Flores y enredaderas se extienden desde tu posición en
                          un radio de 15 pies creando un terreno difícil para
                          todos menos para ti.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Teletransporte:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cada turno, como acción adicional, puedes elegir
                          teletransportarte a un espacio desocupado que puedas
                          ver en un radio de 60 pies.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin  finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Zarcillos oscuros:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Unos zarcillos sombríos se extienden desde ti. Cada
                          criatura en un radio de 30 pies debe superar una
                          tirada de salvación de Constitución o recibir 1d12
                          puntos de daño de tipo necrótico. Además, ganas 1d12
                          puntos de golpe temporales.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3>Conciencia Mágica</h3>
                  <p>
                    Cualquiera en un radio de 10 pies añade su bonificador de
                    competencia a las tiradas de salvación contra conjuros.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Refuerzo Mágico: Ayuda</h3>
                  <p>
                    Tú o un aliado recibís +1d4 a las tiradas de ataque y a los
                    chequeos de habilidad durante 10 turnos.
                  </p>
                  <h3>Refuerzo Mágico: Ranura de conjuros</h3>
                  <p>
                    Tú o un aliado podeis recuperar una ranura de conjuro de
                    nivel 1 y otra de nivel 2.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Refuerzo Mágico: Ranura de conjuros(mejora)</h3>
                  <p>
                    Tú o un aliado podeis recuperar una ranura de conjuro de
                    nivel 1, otra de nivel 2 y otra de nivel 3.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Reacción inestable</h3>
                  <p>
                    Mientras estás en furia, cuando recibes daño o fallas una
                    tirada de salvación, puedes usar tu reacción para
                    desencadenar otro efecto de magia salvaje que sustituye al
                    actual.
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
