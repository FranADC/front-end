import "./hojaClases.css";
import "./tablaMonje.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>MONJE</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del monje</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Destreza y sabiduría</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de monje</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza y destreza</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 2: Acrobacias, atleismo, historia, perspicacia,
                        religión o sigilo
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
                      <p>Ninguna</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)1 lanza, 5 dagas, 1 instrumento
                        musical, 1 pack de explorador y 11 monedas de oro; o
                        (B)50 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerMonje.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los monjes utilizan un riguroso entrenamiento de combate y
              disciplina mental para alinearse con el multiverso y concentrar
              sus reservas internas de poder. Los distintos monjes
              conceptualizan este poder de diversas formas: como aliento,
              energía, fuerza vital, esencia o yo, por ejemplo. Tanto si se
              canaliza como una demostración de destreza marcial o como una
              manifestación más sutil de defensa y velocidad, este poder
              impregna todo lo que hace un monje.
            </p>
            <p>
              Los monjes concentran su poder interno para crear efectos
              extraordinarios, incluso sobrenaturales. Canalizan una velocidad y
              una fuerza asombrosas en sus ataques, con o sin el uso de armas.
              En manos de un monje, hasta las armas más básicas pueden
              convertirse en sofisticados instrumentos de combate.
            </p>
            <p>
              Muchos monjes consideran que una vida estructurada de retiro
              ascético les ayuda a cultivar la concentración física y mental que
              necesitan para aprovechar su poder. Otros monjes creen que
              sumergirse en la vibrante confusión de la vida les ayuda a
              alimentar su determinación y disciplina.
            </p>
            <p>
              Los monjes suelen considerar las aventuras como pruebas de su
              desarrollo físico y mental. Les mueve el deseo de cumplir una
              misión mayor que la mera matanza de monstruos y el saqueo de
              tesoros; se esfuerzan por convertirse en armas vivientes.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de monje</h1>
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
                      <p>Puntos de ki</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Daño artes marciales</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>Movimiento sin armadura</p>
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
                      <p>
                        Ki, defensa sin armadura, artes marciales:ataques
                        diestros, artes marciales:golpes hábiles, artes
                        marciales: golpe sin armas adicional, ráfaga de golpes
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>-</p>
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
                      <p>
                        Movimiento sin armadura, defensa paciente, paso del
                        viento: correr, paso del viento: desbaratarse
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+10 pies</p>
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
                      <p>Escoge una subclase y desviar misiles</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+10 pies</p>
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
                      <p>Mejora de caracteristicas y caída lenta</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+10 pies</p>
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
                      <p>Ataque Extra</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+10 pies</p>
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
                      <p>
                        Caracteristica de subclase, golpes potenciados con ki
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>7</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+ 15 pies</p>
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
                      <p>Evasión y tranquilidad mental</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>8</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+15 pies</p>
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
                      <p>9</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+15 pies</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>10</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d8</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+15 pies</p>
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
                      <p>Pureza del cuerpo</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>11</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d8</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+20 pies</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>12</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d8</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+20 pies</p>
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
                      <p>13</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>1d8</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>+20 pies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>ki</h3>
              <p>
                Tu entrenamiento te permite aprovechar la energía mística del
                ki. Tu acceso a esta energía está representado por un número de
                puntos de ki. Tu nivel de monje determina el número de puntos
                que tienes, como se muestra en la columna Puntos de Ki de la
                tabla de Monje.
              </p>
              <p>
                Estos puntos se utilizan para realizar ciertas acciones del
                monje
              </p>
              <h3>Defensa sin armadura</h3>
              <p>
                Tus reflejos son tan efectivos como cualquier armadura. Mientras
                no lleves armadura o escudo, añades tu Modificador de Sabiduría
                a tu Clase de Armadura.
              </p>
              <h3>Artes marciales:ataques diestros</h3>
              <p>
                Los ataques con armas de monje y los ataques desarmados pueden
                escalar con tu destreza en lugar de con tu fuerza.
              </p>
              <h3>Artes marciales:golpes hábiles</h3>
              <p>
                Los ataques con armas de monje y los ataques desarmados infligen
                1d4 de daño contundente, a menos que su daño normal sea mayor.
              </p>
              <h3>Artes marciales: golpe sin armas adicional</h3>
              <p>
                Después de hacer un ataque con un arma o mientras estás
                desarmado, puedes hacer otro ataque desarmado como acción
                adicional.
              </p>
              <h3>Ráfaga de golpes</h3>
              <p>
                Usando una acción adicional y un punto de ki, puedes hacer dos
                ataques desamado.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Movimiento sin armadura</h3>
              <p>
                Tu velocidad aumenta en 10 pies mientras no lleves armadura o
                empuñes un escudo. Esta bonificación aumenta cuando alcanzas
                ciertos niveles de monje, como se muestra en la tabla de monje.
              </p>
              <h3>Defensa paciente</h3>
              <p>
                Usando una acción adicional y un punto de ki, hasta tu sigiente
                turno las tiradas de ataque contra ti tienen desventaja , y tú
                tienes ventaja en la tirada de salvación de destreza.
              </p>

              <h3>Paso del viento: correr</h3>
              <p>
                Utiliza una acción adicional y un punto de Ki para duplicar tu
                velocidad de movimiento.
              </p>
              <h3>Paso del viento: desbaratarse</h3>
              <p>
                Usa una acción de bonificación y un punto de Ki para
                desbaratarse.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Escoge una subclase</h3>
              <h3>Desviar misiles</h3>
              <p>
                Utilizas tu reacción para reducir el daño de un ataque de arma a
                distancia en 1d10 + tu modificador de destreza + tu nivel de
                monje. Si el daño se reduce a 0, puedes usar un Punto de ki para
                devolver el proyectil al remitente.
              </p>
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
              <h3>Caída lenta</h3>
              <p>
                Cuando caes, puedes usar tu reacción para ganar resistencia al
                daño de caída.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 5</h2>
              <h3>Ataque adicional</h3>
              <p>
                Puedes atacar dos veces, en lugar de una, siempre que realices
                la acción atacar en tu turno
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Golpes potenciados con Ki</h3>
              <p>
                Tus ataques desarmados cuentan como mágicos a efectos de superar
                las resistencias y la inmunidad de los enemigos al daño no
                mágico.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
              <h3>Evasión</h3>
              <p>
                Tu agilidad te permite esquivar ciertos conjuros. cuando un
                conjuros o efecto infligiría la mitad de daño en una tirada de
                salvación de destreza exitosa, no inflige daño si tienes éxito,
                y sólo la mitad de daño si fallas.
              </p>
              <h3>Tranquilidad mental</h3>
              <p>
                Si estas encantado o asustado, lanzas automáticamente
                tranquilidad mental para eliminar la condición.
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
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Pureza del cuerpo</h3>
              <p>
                Eres inmune daño de veneno y no puedes ser envenenado o afectado
                por enfermedades gracias al ki purificador que fluye por tu
                cuerpo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 12</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <h1>Subclases de monje</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Camino de la mano abierta</h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoMonjeSub1.png"
                      alt=""
                    />
                    <h2>
                      Te especializas en el combate sin armas, utilizando tus
                      manos y tu control del ki para curar o infligir graves
                      heridas.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior1"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Ráfaga de golpes mejorada</h3>
                  <p>
                    Ahora cada vez que utilizas la rafaga de golpes y impactas a
                    un enemigo puedes elegir si a mayores quieres intentar tirar
                    al suelo, aturdir o empujar a tu enemigo
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Manifestación espiritual</h3>
                  <p>
                    Tus golpes interrumpen el flujo de ki a la mente de tus
                    enemigos. Tus ataques desarmados infligen 1d4 + modificador
                    de Sabiduría adicionales.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Integridad física</h3>
                  <p>
                    Una vez por descanso corto puedes entrar en un estado
                    superior durante 10 turnos. Durante este estado recuperas la
                    mitad total de tu vida, recuperas un punto de ki por turno y
                    tienes una acción adicional extra.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Santuario</h3>
                  <p>
                    Un area de tranquilidad te protege que hace que los enemigos
                    no puedan atacarte mientras tu no muestres una actitud
                    agresiva
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Camino de las sombras</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoMonjeSub2.png"
                    alt=""
                  />
                  <h2>
                    Valoras las artes del sigilo y el subterfugio, doblegando
                    las sombras a tu voluntad para golpear sin previo aviso.
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
                  <h3>Artes de la sombra</h3>
                  <p>
                    Utilizando 2 puntos de ki puedes crear una nube de oscuridad
                    que ciega a las criaturas que se encuentran en su interior.
                    Las criaturas no pueden realizar ataques a distancia dentro
                    o fuera de él.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Capa de sombras</h3>
                  <p>
                    Si estas en una zona oscurecida puedes envolverte en sombras
                    para volverte invisible. La invisibilidad termina antes si
                    atacas, lanzas un conjuro, realizas una acción o recibes
                    daño.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Paso de las sombras</h3>
                  <p>
                    Teletranspórtate de sombra en sombra con un rango maximo de
                    30 pies.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Ataque con las sombras</h3>
                  <p>
                    Utiliza una acción y 3 puntos ki para teletransportarte
                    detras de un enemigo y golpearlo con la ferocidad sigilosa y
                    psíquica de las propias sombras. Inflige 3d8 puntos de daño
                    psíquico adicionales al daño de tu arma.
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
