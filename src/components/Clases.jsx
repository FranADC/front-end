import "./clases.css";
export default function () {
  return (
    <>
      <div className="divBody">
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerBarbaro.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">BARBARO</h2>
              <img src="/imagenes/general/logoBarbaro.png" alt="" />
              <h3>Un feroz guerrero de furia primigenia</h3>
              <p className="tarjetaDescripcion">
                Los bárbaros son poderosos guerreros impulsados por las fuerzas
                primigenias del multiverso que se manifiestan como Furia.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Fuerza
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D12
                </p>
                <p>
                  <b>Salvaciones:</b> Fuerza y Constitución
                </p>
              </div>
              <a href="/clases/barbaro">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerBardo.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">BARDO</h2>
              <img src="/imagenes/general/logoBardo.png" alt="" />
              <h3>Un inspirador intérprete de música, danza y magia</h3>
              <p className="tarjetaDescripcion">
                Los bardos son expertos en inspirar a los demás, calmar heridas,
                desanimar a los enemigos y crear ilusiones.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Carisma
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Destreza y Carisma
                </p>
              </div>
              <a href="/clases/bardo">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerBrujo.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">BRUJO</h2>
              <img src="/imagenes/general/logoBrujo.png" alt="" />
              <h3>
                Un ocultista con poderes otorgados por pactos de otro mundo
              </h3>
              <p className="tarjetaDescripcion">
                Los brujos buscan el conocimiento oculto en el tejido del
                multiverso, uniendo secretos arcanos para reforzar su propio
                poder.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Carisma
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Sabiduría y carisma
                </p>
              </div>
              <a href="/clases/brujo">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerClerigo.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">CLERIGO</h2>
              <img src="/imagenes/general/logoClerigo.png" alt="" />
              <h3>Un sacerdote milagroso de poder divino</h3>
              <p className="tarjetaDescripcion">
                Los clérigos pueden alcanzar la magia divina de los Planos
                Exteriores y canalizarla para reforzar a la gente y combatir a
                los enemigos.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Sabiduría
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Sabiduría y carisma
                </p>
              </div>
              <a href="/clases/clerigo">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerDruida.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">DRUIDA</h2>
              <img src="/imagenes/general/logoDruida.png" alt="" />
              <h3>Un Sacerdote de la Naturaleza de Poder Primigenio</h3>
              <p className="tarjetaDescripcion">
                Los druidas recurren a las fuerzas de la naturaleza y utilizan
                la magia para curar, transformarse en animales y ejercer la
                destrucción elemental.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Sabiduría
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Inteligencia y sabiduría
                </p>
              </div>
              <a href="/clases/druida">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerExplorador.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">EXPLORADOR</h2>
              <img src="/imagenes/general/logoExplorador.png" alt="" />
              <h3>Un guerrero errante imbuido de magia primigenia</h3>
              <p className="tarjetaDescripcion">
                Los Exploradores se perfeccionan con un enfoque mortífero y
                aprovechan los poderes primarios para proteger al mundo de los
                estragos de monstruos y tiranos.
              </p>{" "}
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Destreza y sabiduría
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D10
                </p>
                <p>
                  <b>Salvaciones:</b> Fuerza y destreza
                </p>
              </div>
              <a href="/clases/explorador">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerGuerrero.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">GUERRERO</h2>
              <img src="/imagenes/general/logoGuerrero.png" alt="" />
              <h3>Maestro de todas las armas y armaduras</h3>
              <p className="tarjetaDescripcion">
                Todos los luchadores comparten una destreza sin parangón con las
                armas y las armaduras, y conocen bien la muerte, tanto para
                infligirla como para desafiarla.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Fuerza o Destreza
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D10
                </p>
                <p>
                  <b>Salvaciones:</b> Fuerza y Constitución
                </p>
              </div>
              <a href="/clases/guerrero">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerHechicero.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">HECHICERO</h2>
              <img src="/imagenes/general/logoHechicero.png" alt="" />
              <h3>Un mago deslumbrante lleno de magia innata</h3>
              <p className="tarjetaDescripcion">
                Los hechiceros aprovechan y canalizan el poder en bruto de la
                magia innata que llevan grabada en su ser.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Carisma
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D6
                </p>
                <p>
                  <b>Salvaciones:</b> Constitución y Carisma
                </p>
              </div>
              <a href="/clases/hechicero">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerMago.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">MAGO</h2>
              <img src="/imagenes/general/logoMago.png" alt="" />
              <h3>Un erudito de la magia con poder arcano</h3>
              <p className="tarjetaDescripcion">
                Los magos lanzan hechizos de fuego explosivo, rayos arcos,
                engaños sutiles y transformaciones espectaculares.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Inteligencia
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D6
                </p>
                <p>
                  <b>Salvaciones:</b> Inteligencia y sabiduría
                </p>
              </div>
              <a href="/clases/mago">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerMonje.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">MONJE</h2>
              <img src="/imagenes/general/logoMonje.png" alt="" />
              <h3>Un artista marcial de enfoque sobrenatural</h3>
              <p className="tarjetaDescripcion">
                Los monjes concentran sus reservas internas de poder para crear
                efectos extraordinarios, incluso sobrenaturales.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Destreza y sabiduría
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Fuerza y destreza
                </p>
              </div>
              <a href="/clases/monje">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerPaladin.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">PALADIN</h2>
              <img src="/imagenes/general/logoPaladin.png" alt="" />
              <h3>Un guerrero devoto de juramentos sagrados</h3>
              <p className="tarjetaDescripcion">
                Los paladines viven en primera línea de la lucha cósmica, unidos
                por sus juramentos contra las fuerzas de la aniquilación.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Fuerza y carisma
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D10
                </p>
                <p>
                  <b>Salvaciones:</b> Sabiduría y carisma
                </p>
              </div>
              <a href="/clases/paladin">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
        <div className="divTarjeta">
          <div className="tarjetaPrincipal">
            <img src="/imagenes/general/BannerPicaro.png" alt="" />
            <div className="tarjetaSecundario">
              <h2 className="tiamat">PICARO</h2>
              <img src="/imagenes/general/logoPicaro.png" alt="" />
              <h3>Un hábil experto en sigilo y subterfugio</h3>
              <p className="tarjetaDescripcion">
                Los pícaros tienen un don para encontrar la solución a casi
                cualquier problema, dando prioridad a los golpes sutiles sobre
                la fuerza bruta.
              </p>
              <div className="tarjetaInfo">
                <p>
                  <b>Habilidad principal:</b> Destreza
                </p>
                <p>
                  <b>Dado de puntos de golpe:</b> D8
                </p>
                <p>
                  <b>Salvaciones:</b> Destreza y inteligencia
                </p>
              </div>
              <a href="/clases/picaro">
                <input type="button" value="Ver mas" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
