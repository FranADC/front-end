import "./HojaClases.css";
import "./TablaBrujo.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>Brujo</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del brujo</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de brujo</p>
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
                        Escoge 2: arcana, engaño, historya, intimidación,
                        investigación, naturaleza o religión.
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
                      <p>Armaduras ligeras</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Armadura de cuero, 1hoz, 2 dagas, 1
                        foco arcano, 1 libro ocultista, 1 pack de escolar y 15
                        monedas de oro; o (B)100 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerBrujo.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los brujos buscan el conocimiento oculto en el tejido del
              multiverso. Suelen comenzar su búsqueda de poder mágico
              adentrándose en tomos de sabiduría prohibida, realizando
              invocaciones destinadas a atraer el poder de seres extraplanares o
              buscando lugares de poder donde se pueda sentir la influencia de
              estos seres. En poco tiempo, cada Brujo se ve arrastrado a un
              pacto vinculante con un poderoso patrón. Basándose en el antiguo
              conocimiento de seres como ángeles, arcontes, demonios, diablos,
              brujas y entidades alienígenas del Reino Lejano, los brujos reúnen
              secretos arcanos para reforzar su propio poder.
            </p>
            <p>
              Los brujos ven a sus patrocinadores como recursos, como medios
              para alcanzar el poder mágico. Algunos Brujos respetan, veneran o
              incluso aman a sus patrones; otros sirven a sus patrones a
              regañadientes; y otros buscan socavar a sus patrones incluso
              cuando ejercen el poder que sus patrones les han otorgado.
            </p>
            <p>
              Una vez hecho el pacto, la sed de conocimiento y poder de un Brujo
              no puede saciarse con el mero estudio. La mayoría de los Brujos
              pasan sus días persiguiendo un mayor poder y un conocimiento más
              profundo, lo que normalmente significa algún tipo de aventura.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de brujo</h1>
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
                      <p>Invocaciónes sobrenaturales</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>Conjuros preparados</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>Huecos de conjuros</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>nivel de hueco de conjuro</p>
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
                      <p>Magia de pacto y escoge una subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>-</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>1</p>
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
                      <p>Invocaciones sobrenaturales (+2)</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>1</p>
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
                      <p>Don de pacto</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>2</p>
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
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>2</p>
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
                      <p>
                        Pacto profundizado y invocaciones sobrenaturales (+1)
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>3</p>
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
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>7</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>3</p>
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
                      <p>Invocaciones sobrenaturales (+1)</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>8</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>4</p>
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
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>9</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>4</p>
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
                      <p>Invocaciones sobrenaturales (+1)</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>10</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>5</p>
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
                      <p>Características de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>11</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>5</p>
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
                      <p>Arcano Místico (conjuro de nivel 6)</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>12</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>5</p>
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
                      <p>
                        Mejora de caracteristicas y invocaciones sobrenaturales
                        (+1)
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>13</p>
                    </div>
                    <div className="columnaInfo4Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo5Prog">
                      <p>5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Escoge una subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Invocaciones sobrenaturales</h3>
              <p>Escoge 2:</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Descarga agónica:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Cuando lanzas "descarga sobrenatural" añades tu
                      modificador de carisma al daño que inflige, a menos que el
                      modificador sea negativo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Capa de sombras:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "armadura de mago" sobre ti mismo
                      a voluntad, sin gastar una hueco de conjuro.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Armadura de sombras:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "armadura de mago" sobre ti mismo
                      a voluntad, sin gastar una hueco de conjuro.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Hablar con la bestia:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puede lanzar el conjuro "hablar con los animales" sobre ti
                      mismo a voluntad, sin gastar una ranura de conjuro.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Influencia seductora:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Invocas el encanto hechizante de tu patrón. Ganas
                      competencia en las habilidades engaño y persuasión.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Visión del diablo:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes ver con normalidad en la oscuridad, tanto mágica
                      como no mágica, hasta una distancia de 80 pies.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Vigor infernal:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "vida falsa" sobre ti mismo a
                      voluntad como hechizo de nivel 1, sin gastar una ranura de
                      hechizo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Máscara de los Mil Rostros:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "disfrazarse" sobre ti mismo a
                      voluntad, sin gastar una ranura de hechizo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Uno con la sombra:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Cuando te encuentres en una zona de poca luz o oscuridad,
                      puedes utilizar tu acción para volverte Invisible. La
                      invisibilidad termina antes si te mueves, atacas, lanzas
                      otro conjuro, realizas una acción o recibes daño.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Descarga ahuyentadora:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Cuando golpeas a una criatura con "descarga sobrenatural"
                      ppuedes empujas a la criatura 15 pies lejos de ti.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Ladrón de cinco destinos:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "perdición" usando un espacio de
                      conjuro de brujo una vez por descanso largo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Don de pacto</h3>
              <p>Escoge uno:</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto de la cadena:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Aprendes el conjuro "encontrar familiar". Cuando lanzas el
                      conjuro, puedes elegir una de las formas habituales para
                      tu familiar o una de las siguientes formas especiales: Imp
                      o quasit
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto de la hoja:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes invocar un arma de pacto o atar la que estés
                      empuñando, convirtiéndola en mágica. Las armas de pacto
                      utilizan el modificador de Habilidad de Conjuro del
                      portador en lugar de fuerza o destreza.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto del tomo:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Tu patron te concede un grimorio llamado "El libro de las
                      sombras", que te permite lanzar los siguientes trucos:
                      Guía, Burla dañina y látigo de espinas.
                    </p>
                  </div>
                </div>
              </div>
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
              <h3>Invocaciones sobrenaturales</h3>
              <p>Escoge una invocación sobrenatural adicional</p>
              <p>Nuevas invocaciones sobrenaturales diponibles</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Señal de mal agüero:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "imponer maldición" con una hueco
                      de conjuro de brujo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Confundir la mente:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "ralentizar" con una hueco de
                      conjuro de brujo.
                    </p>
                  </div>
                </div>
              </div>
              <h3>Pacto profundizado</h3>
              <p>
                Complacido con tu servicio, tu patron de otro mundo a añadió
                nuevas bendiciones a los términos de tu pacto.
              </p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto de la cadena:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>Tu familiar gana un Ataque Extra.</p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto de la hoja:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>Gana un ataque Extra con tu arma de pacto.</p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Pacto del tomo:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar los conjuros "animar a los muertos",
                      "acelerar", y "llamar al relámpago" una vez, cada uno,por
                      Descanso Largo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
              <h3>Invocaciones sobrenaturales</h3>
              <p>Escoge una invocación sobrenatural adicional</p>
              <p>Nuevas invocaciones sobrenaturales diponibles</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Libro de secretos antiguos:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Si tienes el pacto del tomo. Puedes lanzar los conjuros
                      "Rayo de enfermedad", "Orbe cromático" y "silencio" una
                      vez, cada uno, por Descanso Largo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Palabra aterradora:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "confusión" con una hueco de
                      conjuro de brujo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Escultor de carne:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "polimorfar" con una hueco de
                      conjuro de brujo.
                    </p>
                  </div>
                </div>
              </div>
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
              <h3>Invocaciones sobrenaturales</h3>
              <p>Escoge una invocación sobrenatural adicional</p>
              <p>Nuevas invocaciones sobrenaturales diponibles</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Esbirros del caos:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "conjurar elemental " con una
                      hueco de conjuro de brujo.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Salto de otro mundo:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "salto" a voluntad, sin gastar
                      una hueco de conjuro.
                    </p>
                  </div>
                </div>
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Susurros de la tumba:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Puedes lanzar el conjuro "hablar con los muertos" a
                      voluntad, sin gastar una hueco de conjuro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Arcano Místico</h3>
              <p>
                Tu patron te otorga un secreto mágico llamado arcano. Elige un
                conjuro de nivel 6 de la lista de conjuros de brujo. Puedes
                lanzar tu arcano una vez sin gastar una ranura de conjuro. Debes
                terminar un Descanso Largo antes de poder hacerlo de nuevo.
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
              <h3>Invocaciones sobrenaturales</h3>
              <p>Escoge una invocación sobrenatural adicional</p>
              <p>Nueva invocación sobrenatural diponibles</p>
              <div className="divTablaPrin">
                <div className="filaTablaPrin finalTablaPrin">
                  <div className="primeraColumnaPrin">
                    <b>Bebedor de vida:</b>
                  </div>
                  <div className="segundaColumnaPrin">
                    <p>
                      Si tienes el pacto de la hoja tus ataques cuerpo a cuerpo
                      infligen un daño adicional de tipo necrótico igual a tu
                      modificador de Carisma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1>Subclases de brujo</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Patron infernal</h1>
                  <div>
                    <img src="/imagenes/general/logoBrujoSub1.png" alt="" />
                    <h2>
                      Has entregado tu alma a los Infiernos o Abismos a cambio
                      de un mortífero arsenal de arcanos diabólicos.
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
                  <h3>Bendición del Oscuro</h3>
                  <p>
                    Siempre que reduzcas a 0 puntos de golpe a una criatura
                    hostil, este regalo de tu patrón te otorga modificador de
                    Carisma + Nivel de Brujo puntos de golpe temporales.
                  </p>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 1 a tu lista:</p>
                  <p>Manos ardientes</p>
                  <p>Orden imperiosa</p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 2 a tu lista:</p>
                  <p>Sordera / Ceguera</p>
                  <p>Rayo abrasador</p>
                </div>
                <div>
                  <h2>Nivel 5</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 3 a tu lista:</p>
                  <p>Bola de fuego</p>
                  <p>Nube apestosa</p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Suerte del oscuro</h3>
                  <p>
                    Invocas a tu patron para cambiar tu destino y añade un d10 a
                    un chequeo de habilidad
                  </p>
                  <p>Recarga: Descanso corto</p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 4 a tu lista:</p>
                  <p>Muro de fuego</p>
                  <p>Escudo de fuego</p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 5 a tu lista:</p>
                  <p>Cono de frío</p>
                  <p>Golpe flamígero</p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Resistencia diabólica</h3>
                  <p>
                    Elige un tipo de daño y obtén resistencia a él. Puedes
                    elegir un nuevo tipo de daño cada descanso corto. Solo
                    puedes tener 1 tipo de resistencia a la vez.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Patron del antiguo</h1>
                <div>
                  <img src="/imagenes/general/logoBrujoSub2.png" alt="" />
                  <h2>
                    Prometiste algo impensable a una entidad indescriptiblemente
                    antigua, que a cambio te proporcionó poderes de entropía
                    cerebral y control.
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
                  <h2>Nivel 1</h2>
                  <h3>Recordatorio de mortalidad</h3>
                  <p>
                    Cuando aciertas un golpe crítico contra una criatura, esa
                    criatura y los enemigos cercanos deben superar una tirada de
                    salvación de sabiduría o quedan asustados hasta el final de
                    su siguiente turno.
                  </p>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 1 a tu lista:</p>
                  <p>Susurros disonantes</p>
                  <p>Risa horrible de Tasha</p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 2 a tu lista:</p>
                  <p>Detectar pensamientos</p>
                  <p>Fuerza fantasmal</p>
                </div>
                <div>
                  <h2>Nivel 5</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 3 a tu lista:</p>
                  <p>Imponer maldición</p>
                  <p>Ralentizar</p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Barrera entrópica</h3>
                  <p>
                    Impones desventaja en una tirada de ataque contra ti. Si el
                    ataque falla, obtienes ventaja en tu siguiente tirada de
                    ataque contra el atacante durante 1 turno.
                  </p>
                  <p>Recarga: Descanso corto</p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 4 a tu lista:</p>
                  <p>Dominar bestia</p>
                  <p>Tentáculos negros de Evard</p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 5 a tu lista:</p>
                  <p>Dominar persona</p>
                  <p>Telequinesis</p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Escudo del Pensamiento: Resistencia psíquica</h3>
                  <p>
                    Un ser anciano protege tu cerebro. Obtienes resistencia al
                    daño psíquico.
                  </p>
                  <h3>Escudo del pensamiento: Reflejo psíquico</h3>
                  <p>
                    Tu patrón no aprecia los intentos de atacar tu mente. Cuando
                    recibes daño psíquico, tu atacante recibe el mismo daño.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Patron feérico</h1>
                <div>
                  <img src="/imagenes/general/logoBrujoSub3.png" alt="" />
                  <h2>
                    Con la gracia de una dama o un señor de los feéricos, estás
                    imbuido de todas las cualidades suntuosas y aterradoras del
                    extraordinario reino de tu patrón.
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
                  <h2>Nivel 1</h2>
                  <h3>Presencia feérica</h3>
                  <p>
                    Encanta o Asusta a los enemigos cercanos con la magia
                    seductora e inquietante de los planos feéricos.
                  </p>
                  <p>Recarga: Descanso corto</p>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 1 a tu lista:</p>
                  <p>Fuego feérico</p>
                  <p>Dormir</p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 2 a tu lista:</p>
                  <p>Calmar emociones</p>
                  <p>Crecimiento vegetal</p>
                </div>
                <div>
                  <h2>Nivel 5</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 3 a tu lista:</p>
                  <p>Desplazamiento</p>
                  <p>Nube apestosa</p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Escape brumoso</h3>
                  <p>
                    Al recibir daño, te puedes volver invisible. En tu siguiente
                    turno, puedes lanzar el conjuro "paso brumoso", aunque esto
                    romperá tu invisibilidad.
                  </p>
                  <p>Recarga: Descanso corto</p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 4 a tu lista:</p>
                  <p>Dominar bestia</p>
                  <p>Invisibilidad mejorada</p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Lista de conjuros ampliados</h3>
                  <p>añade los siguientes conjuros de nivel 5 a tu lista:</p>
                  <p>Dominar persona</p>
                  <p>Apariencia</p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Defensas seductoras</h3>
                  <p>
                    Has construido barreras estoicas en tu corazón y en tu
                    mente, y no puedes ser encantado por nada ni nadie.
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
