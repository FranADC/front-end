import "./hojaClases.css";
import "./tablaHechicero.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>HECHICERO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del hechicero</h1>
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
                      <p>D6 por nivel de hechicero</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Constitución y carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 2: Arcana, engaño, perspicacia, intimidación,
                        persuasión o religión
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
                      <p>Ninguna</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)1 lanza, 2 dagas, 1 foco arcano, 1 pack
                        de explorador de mazmorras y 28 monedas de oro; o (B)50
                        monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerHechicero.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los hechiceros poseen una magia innata que está grabada en su ser.
              Algunos hechiceros no conocen el origen de su poder, mientras que
              otros lo atribuyen a extraños sucesos de su historia personal o
              familiar. La bendición de un dragón o una dríada en el nacimiento
              de un bebé o el rayo de un cielo despejado pueden desencadenar el
              don de un Hechicero. También puede ser el don de una deidad, la
              exposición a la extraña magia de otro plano de existencia o una
              visión del funcionamiento interno de la realidad. Sea cual sea el
              origen, el resultado es una marca indeleble en el Hechicero, una
              magia agitadora que puede transmitirse de generación en
              generación.
            </p>
            <p>
              Los hechiceros no aprenden magia; el poder en bruto de la magia
              forma parte de ellos. El arte esencial de un hechicero es aprender
              a aprovechar y canalizar esa magia innata, lo que le permite
              descubrir nuevas y asombrosas formas de liberar su poder. A medida
              que los Hechiceros dominan su magia innata, se vuelven más afines
              a su origen, desarrollando poderes distintos que reflejan su
              fuente.
            </p>
            <p>
              Los hechiceros son raros. Algunas líneas familiares producen
              exactamente un Hechicero en cada generación, pero la mayoría de
              las veces, los talentos de la hechicería aparecen de chiripa. La
              gente que tiene este poder mágico pronto descubre que no le gusta
              quedarse quieto. La magia de un Hechicero quiere ser esgrimida.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de hechicero</h1>
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
                      <p>Puntos de hechiceria</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>Conjuros preparados</p>
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
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>2</p>
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
                      <p>Metamagia</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
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
                      <p>Metamagia</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>4</p>
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
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>5</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>6</p>
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
                      <p>6</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>7</p>
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
                      <p>7</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>8</p>
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
                      <p>Mejora de caracteristicas</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>8</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>9</p>
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
                      <p>9</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>10</p>
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
                      <p>Metamagia</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>10</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>11</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>11</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>12</p>
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
                      <p>12</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>13</p>
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
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Metamagia</h3>
              <p>
                Los hechiceros cuentan con opciones de metamagia, unos poderes
                innatos que les permite alterar sus conjuros.
              </p>
              <p>
                Para usar la metamagia los hechiceros tienen que usar los puntos
                de hechicería. Tienes una cantidad de puntos de hechiceria
                iguales a tu nivel de hechicero y se recargan en un descanso
                largo.
              </p>
              <p>Elige 2 opciones de metamagia</p>
              <p>
                <b>Metamagia: Hechizo cuidadoso: </b>Los aliados tienen éxito
                automáticamente en las tiradas de salvación contra hechizos que
                las requieran.
              </p>
              <p>
                <b>Metamagia: Hechizo distante: </b>Aumenta el alcance del
                hechizo en un 50%.
              </p>
              <p>
                <b>Metamagia: Hechizo extendido: </b> Duplica la duración de las
                condiciones, invocaciones y superficies causadas por los
                hechizos.
              </p>
              <p>
                <b>Metamagia: Hechizos gemelos: </b> Los hechizos que sólo
                tienen como objetivo a 1 criatura pueden tener como objetivo a
                una criatura adicional.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Metamagic</h3>
              <p>Elige 1 opción de metamagia adicional</p>
              <p>Nuevas opciones de metamagia disponible</p>
              <p>
                <b>Metamagia: Hechizo pesado: </b>Los objetivos de hechizos que
                requieren tiradas de salvación tienen desventaja en su primera
                tirada de salvación.
              </p>
              <p>
                <b>Metamagia: Hechizo acelerado: </b>Los hechizos que requieren
                una acción se pueden usar en una acción adicional en su lugar.
              </p>
              <p>
                <b>Metamagia: Hechizo Sutil: </b>Puedes lanzar hechizos mientras
                silenciado.
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
              <h2>Nivel 6</h2>
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
              <h2>Nivel 10</h2>
              <h3>Metamagic</h3>
              <p>Elige 1 opción de metamagia adicional</p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Caracteristica de subclase</h3>
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
            <h1>Subclases de hechicero</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Magia salvaje </h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoHechiceroSub1.png"
                      alt=""
                    />
                    <h2>
                      Tus poderes proceden de antiguas fuerzas del caos. Se
                      agitan en tu interior, a la espera de liberarse en
                      cualquier momento.
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
                  <h2>Nivel 1</h2>
                  <h3>Magia salvaje</h3>
                  <p>
                    La Magia Salvaje surge de las fuerzas del caos que se agitan
                    en tu interior. Cada vez que lanzas un hechizo de nivel 1 o
                    superior, tu magia surge y desencadenar un efecto mágico
                    aleatorio de la siguiente tabla
                  </p>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Quemado:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cada criatura y objeto en un radio de 20 pies de ti
                          comienzan a arder y recibe 1d6 de daño de fuego por
                          turno durante 10 turnos.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Teletransporte:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Hasta el final de tu siguiente turno, puedes usar una
                          acción adicional para teletransportarte hasta 30 pies
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Encantar armas:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Encantas el arma de todas las criaturas en un radio de
                          20 pies. Su siguiente ataque es un golpe crítico e
                          inflige 1d4 puntos adicionales de daño.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Niebla:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Crea una nube de niebla a tu alrededor. Las criaturas
                          en su interior quedan muy oscurecidas y Cegadas.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Curación explosiva:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cuando golpeas a un objetivo con un hechizo, curas a
                          todas las criaturas en un radio de 10 pies un 1d4
                          puntos de daño por nivel de hueco de conjuro
                          utilizado.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Cambion:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Invoca a un demonio "cambion" de los Nueve Infiernos
                          que es hostil a todo el mundo.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Vuelo:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>Puedes volar hasta el final del turno.</p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Acción subita:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>Ganas una acción adicional este turno.</p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Intercambiar:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Intercambia posiciones con un objetivo cada vez que
                          lances un conjuro o truco.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Gatos y perros:</b>
                      </div>
                      <div className="segundaColumnaPrin ">
                        <p>
                          Cada criatura en un radio de 30 pies se transforman
                          aleatoriamente en un gato o un perro.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Forzar la suerte</h3>
                  <p>
                    Gasta 2 Puntos de Hechicería como acción gratuita para dar a
                    un objetivo un bonificador +1d4 o un penalizador -1d4 a
                    todos los chequeos de habilidad durante dos turnos, o gasta
                    2 Puntos de hechicería como reacción para dar a un objetivo
                    un bonificador +1d4 o un penalizador -1d4 a una sola tirada
                    de ataque o de salvación.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Caos controlado</h3>
                  <p>
                    Cuando un enemigo lance un conjuro, gasta tu reacción para
                    provocar una Oleada de Magia Salvaje cerca del hechicero
                    enemigo.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Linaje dracónico</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoHechiceroSub2.png"
                    alt=""
                  />
                  <h2>
                    Tus venas llevan magia dracónica, fruto de un poderoso
                    antepasado dragón.
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
                  <h2>Nivel 1</h2>
                  <h3>Resistencia dracónica</h3>
                  <p>
                    Escamas parecidas a las de un dragón cubren partes de tu
                    piel. Cuando no llevas armadura, tu clase de armadura básica
                    es 13 y tus puntos de vida máximos aumentan en 1 por cada
                    nivel de Hechicero.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Afinidad Elemental</h3>
                  <p>
                    Cuando lanzas un hechizo que inflige daño elemental, puedes
                    gastar 1 punto de hechizo para ganar eesistencia a ese tipo
                    de daño.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Volar</h3>
                  <p>
                    Ahora puedes volar a voluntad utilizando tu velocidad de
                    movimiento.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Hechicería de la tormenta</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoHechiceroSub3.png"
                    alt=""
                  />
                  <h2>
                    Ya sea crepitando con la energía de antiguos diluvios o
                    atravesado por vendavales y huracanes, tu linaje es un
                    extraño tapiz garabateado por una tempestad.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase3"
                    src="http://localhost:5173/imagenes/iconos/sumar.svg"
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
                          "http://localhost:5173/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase3").src =
                          "http://localhost:5173/imagenes/iconos/sumar.svg";
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
                  <p>
                    Después de lanzar un conjuro de Nivel 1 o superior puedes
                    volar como acción adicional hasta el final de tu turno sin
                    recibir ataques de oportunidad. Hacerlo te permite volar
                    hasta 30 pies.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>La furia de la tormenta</h3>
                  <p>
                    Cuando te golpea un ataque cuerpo a cuerpo, infliges a tu
                    atacante daño de trueno igual a tu nivel de hechicero.
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
