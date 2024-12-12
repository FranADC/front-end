import "./HojaClases.css";
import "./TablaClerigo.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>CLÉRIGO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del clérigo</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Sabiduría</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de clérigo</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Sabiduría y carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 2: historia, perspicacia, medicina, persuasión,
                        religión.
                      </p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armas:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armas simples</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armaduras:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armaduras ligeras, medianas y escudos</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Armadura de malla, 1 escudo, 1 maza, 1
                        simbolo sagrado, 1 pack de sacerdote y 7 monedas de oro;
                        o (B)110 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerClerigo.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los clérigos extraen poder de los reinos de los dioses y lo
              utilizan para obrar milagros. Bendecido por una deidad, un panteón
              u otra entidad inmortal, un clérigo puede alcanzar la magia divina
              de los Planos Exteriores -donde moran los dioses- y canalizarla
              para fortalecer a la gente y combatir a los enemigos.
            </p>
            <p>
              Dado que su poder es un don divino, los clérigos suelen asociarse
              a templos dedicados a la deidad u otra fuerza inmortal que ha
              liberado su magia. Aprovechar la magia divina no requiere un
              entrenamiento específico, pero los clérigos pueden aprender
              oraciones y ritos que les ayuden a atraer el poder de los planos
              exteriores.
            </p>
            <p>
              No todos los miembros de un templo o santuario son clérigos.
              Algunos sacerdotes están llamados a una vida sencilla de servicio
              al templo, llevando a cabo su devoción a través de la oración y
              los rituales, no a través de la magia. Muchos mortales dicen
              hablar en nombre de los dioses, pero pocos pueden reunir el poder
              de esos dioses como lo hace un clérigo.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de clérigo</h1>
              <div className="tablaOverflow">
                <div className="tablaProgresion">
                  <div className="filaMagiaExtra">
                    <div className="columnaMagiaExtra">
                      <p>Ranuras de Conjuros por nivel de conjuro</p>
                    </div>
                  </div>
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
                      <p>Cargas decanalizar divinidad</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>5</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>6</p>
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
                      <p>Escoge una subclase y Lanzamiento de conjuros</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>-</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
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
                      <p>Canalizar divinidad</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>Destruir no-muertos</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>
                        Mejora de caracteristicas y Caracteristica de subclase
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>Intervención divina</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
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
                      <p>5</p>
                    </div>

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Escoge una subclase</h3>
              <h3>Lanzamiento de conjuros</h3>
              <p>
                <b>Conjuros preparados: </b>
                Escoge un numero de conjuros igual a tu nivel de clérigo + tu
                modificador de sabiduría
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Canalizar divinidad</h3>
              <p>
                Obtienes la habilidad de canalizar energía divina, empezando con
                dos efectos: "rechazar no-muertos"y un efecto determinado por tu
                subclase. Esta caracteristica repone con un descanso corto o
                largo.
              </p>
              <p>
                <b>rechazar no-muertos:</b> Como acción, presenta tu símbolo
                sagrado y haz huir a las criaturas no muertas a tu alrededor
                (area 30 pies).
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
            </div>
            <div className="divInfoFila">
              <h2>Nivel 5</h2>
              <h3>Destruir no-muertos</h3>
              <p>
                Cuando consigas ahuyentas a una criatura no-muerta, esta también
                recibe 4d6 puntos de daño radiante.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Canalizar divinidad</h3>
              <p>Consigues una carga extra</p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 8</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Intervención divina</h3>
              <p>
                Una vez por día puedes invocar la ayuda de tu dios y realizar
                una de las siguientes acciones:
              </p>
              <p>
                <b>Purga al hereje: </b>realiza 8d10 de daño radiante en una
                area de 30 pies.
              </p>
              <p>
                <b>Arma al justo: </b>cubre tu arma de poder divino durante un
                minuto, tu alcance aumenta 10 pies y inflige 1d10 de daño
                radiante extra.
              </p>
              <p>
                <b>Resucita al caido: </b>toca a un aliado que lleva muerto
                menos de 24 horas y resucitalo con mitad de vida.
              </p>
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
            <h1>Subclases de clérigo</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Clérigo de la vida</h1>
                  <div>
                    <img src="/imagenes/general/logoClerigoSub1.png" alt="" />
                    <h2>
                      Encargado del sagrado edicto de preservar el cuerpo, la
                      mente y el alma, tu dios te concede una plétora de magias
                      curativas.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior1"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 1</h2>
                  <p>Ganas competencia con armadura pesada</p>
                  <h3>Discípulo de la vida</h3>
                  <p>
                    Tu devoción potencia tus conjuros de curación. al lanzar un
                    conjuros de curación, el objetivo recupera 2 + los puntos de
                    golpe adicionales del nivel del conjuros.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Sanador bendecido</h3>
                  <p>
                    Recuperas 2 + nivel del conjuro, puntos de vida cuando
                    lanzas un hechizo de curación sobre otra criatura.
                  </p>
                </div>
                <div>
                  <h2>Nivel 8</h2>
                  <h3>Divine Strike: Radiante</h3>
                  <p>
                    Inflige 1d8 de daño radiante extra cuando golpeas con tu
                    arma.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Clérigo de la vida</h1>
                  <div>
                    <img src="/imagenes/general/logoClerigoSub2.png" alt="" />
                    <h2>
                      Los dioses de las llamas primordiales te bañan en una luz
                      resplandeciente, proporcionándote magias para disipar la
                      oscuridad e inmolar a los enemigos.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior2"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 1</h2>
                  <h3>Bengala de protección</h3>
                  <p>
                    Cuando un enemigo te ataca puedes usar tu reacción para
                    imponer desventaja a tu atacante, pudiendo hacer que falle
                    su ataque. Un atacante que no puede ser cegado es inmune a
                    este efecto.
                  </p>
                  <p>Tambien añades el truco luz a tu lista.</p>
                </div>
                <div>
                  <h2>Nivel 2</h2>
                  <h3>Canalizar divinidad: Resplandor del alba</h3>
                  <p>
                    Aprovecha el poder divino del sol para disipar cualquier
                    oscuridad mágica e infligir 2d10 + tu nivel de personaje de
                    daño radiante a criaturas hostiles a un area de 30 pies de
                    ti. Con una salvación exitosa, los objetivos siguen
                    recibiendo la mitad del daño.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Bengala de protección mejorada</h3>
                  <p>
                    Cuando un enemigo ataca a un aliado, puedes usar tu reacción
                    para imponer desventaja en la tirada de ataque, posiblemente
                    haciendo que su ataque falle.
                  </p>
                </div>
                <div>
                  <h2>Nivel 8</h2>
                  <h3>Potenciar conjuración</h3>
                  <p>
                    Añades tu modificador de sabiduría a daño de tus trucos de
                    clérigo
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Clérigo de la guerra</h1>
                  <div>
                    <img src="/imagenes/general/logoClerigoSub3.png" alt="" />
                    <h2>
                      Fortalecido por el santo fervor, blandes un arsenal de
                      salvajismo sacramental para usarlo contra los que
                      consideras injustos.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior3"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 1</h2>
                  <p>Ganas competencia con armadura pesada y armas marciales</p>
                  <h3>Sacerdote de la guerra</h3>
                  <p>
                    Ganas tres cargas de sacerdote de la guerra. Cuando realizas
                    un ataque desarmado o con tu arma, puedes gastar una carga
                    de sacerdote de la guerra para realizar un ataque extra en
                    tu acción adicional. Recuperas todas las cargas en un
                    descanso largo.
                  </p>
                </div>
                <div>
                  <h2>Nivel 2</h2>
                  <h3>Canalizar divinidad: Golpe Guiado</h3>
                  <p>
                    Como reacción pueds ganar una bonificación de +10 a un
                    tirada de ataque.
                  </p>
                </div>
                <div>
                  <h2>Nivel 5</h2>
                  <p>
                    Consigues una carga extra de "sacerdote de la guerra"(4 en
                    total)
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Canalizar divinidad: Golpe Guiado mejorado</h3>
                  <p>
                    Cuando un aliado a 30 pies de ti hace una tirada de ataque,
                    puedes usar una reacción para otorgarle un bonificador +10 a
                    su tirada de ataque
                  </p>
                </div>
                <div>
                  <h2>Nivel 8</h2>
                  <p>
                    Consigues una carga extra de "sacerdote de la guerra"(5 en
                    total)
                  </p>
                  <h3>Divine Strike: Arma</h3>
                  <p>
                    Una vex por tueno inflige 1d8 de daño extra cuando golpeas
                    con tu arma.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <p>
                    Consigues una carga extra de "sacerdote de la guerra"(6 en
                    total)
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
