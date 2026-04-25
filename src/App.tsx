import { motion } from 'motion/react';
import { ExternalLink, ShoppingCart, Info, Gamepad2, Play } from 'lucide-react';

const rockstarInfo = `Rockstar Games es una desarrolladora y distribuidora de videojuegos fundada en 1998 por Sam Houser, Dan Houser, Terry Donovan y Jamie King. Es propiedad de Take-Two Interactive y su sede principal está en New York City. Se especializa en juegos de mundo abierto con historias profundas y alto grado de detalle.

Sus juegos más famosos incluyen Grand Theft Auto V, uno de los más vendidos de la historia; Red Dead Redemption 2, reconocido por su realismo y narrativa; Bully, ambientado en un colegio; y L.A. Noire, centrado en investigaciones policiales. Otros títulos importantes de la serie Grand Theft Auto son San Andreas y GTA IV.

La compañía está conformada por múltiples estudios como Rockstar North, Rockstar San Diego, Rockstar Leeds, Rockstar Toronto y Rockstar India. Es conocida por crear juegos con mundos abiertos grandes, alto detalle y gran libertad para los jugadores.

A pesar de su éxito, ha tenido críticas por la violencia en sus juegos y problemas laborales internos. Actualmente está trabajando en Grand Theft Auto VI.`;

const games = [
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    trailerId: 'gmA6MrX81z4',
    cover: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg',
    description: 'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de la era moderna.',
    steamLink: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
    epicLink: 'https://store.epicgames.com/p/red-dead-redemption-2'
  },
  {
    id: 'rdr1',
    title: 'Red Dead Redemption',
    trailerId: '-8MN89fIaJ8',
    cover: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/capsule_616x353.jpg',
    description: 'Red Dead Redemption es una oscura historia ambientada en el declive del Salvaje Oeste, donde el forajido John Marston es obligado por agentes federales a perseguir a la banda de criminales que una vez llamó amigos.',
    steamLink: 'https://store.steampowered.com/app/2668510/Red_Dead_Redemption/',
    epicLink: 'https://store.epicgames.com/p/red-dead-redemption'
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    trailerId: 'QkkoHAzjnUs',
    cover: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg',
    description: 'Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor de la mafia y el gobierno... deberán sobrevivir sin confiar en nadie, ni en ellos mismos.',
    steamLink: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
    epicLink: 'https://store.epicgames.com/p/grand-theft-auto-v'
  },
  {
    id: 'gtaiv',
    title: 'Grand Theft Auto IV',
    trailerId: 'M80K51DosFo',
    cover: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/capsule_616x353.jpg',
    description: '¿Qué significa el sueño americano en la actualidad? Para Niko Bellic, recién llegado de Europa, es la esperanza de que puede escapar de su pasado. Para su primo, Roman, es la visión de que unidos pueden hacer fortuna en Liberty City, la puerta a la tierra de las oportunidades.',
    steamLink: 'https://store.steampowered.com/app/12210/Grand_Theft_Auto_IV_The_Complete_Edition/',
    epicLink: 'https://store.epicgames.com/'
  },
  {
    id: 'gtavi',
    title: 'Grand Theft Auto VI',
    trailerId: 'QdBZY2fkU-0',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Grand_Theft_Auto_VI_logo.png/800px-Grand_Theft_Auto_VI_logo.png',
    bgCustom: 'bg-gradient-to-r from-pink-600/20 to-cyan-600/20',
    description: 'Grand Theft Auto VI se dirige al estado de Leonida, el hogar de las calles bañadas por luces de neón de Vice City y sus alrededores en la evolución más grande e inmersiva de la franquicia hasta la fecha.',
    steamLink: 'https://store.steampowered.com/publisher/rockstargames',
    epicLink: 'https://store.epicgames.com/'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-200 selection:bg-orange-500 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="https://yt3.googleusercontent.com/qEoab5niOODApvXsknPU2GjZQ584CPEgVi7RFXf7ZDt7qY31f82PHG85RZS0QmosA40qpn7B-MI=s900-c-k-c0x00ffffff-no-rj" 
              alt="Rockstar Mini Logo" 
              className="w-10 h-10 rounded-md transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-wider text-white">ROCKSTAR</span>
          </a>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#info" className="flex items-center gap-1.5 text-sm font-medium hover:text-orange-500 transition-colors">
                <Info className="w-4 h-4" /> Info
              </a>
            </li>
            <li>
              <a href="#juegos" className="flex items-center gap-1.5 text-sm font-medium hover:text-orange-500 transition-colors">
                <Gamepad2 className="w-4 h-4" /> Juegos
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-zinc-950 to-zinc-950 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <img 
            src="https://yt3.googleusercontent.com/qEoab5niOODApvXsknPU2GjZQ584CPEgVi7RFXf7ZDt7qY31f82PHG85RZS0QmosA40qpn7B-MI=s900-c-k-c0x00ffffff-no-rj" 
            alt="Rockstar Logo" 
            className="w-40 sm:w-56 rounded-2xl shadow-2xl shadow-orange-500/20 mb-8 border border-zinc-800"
          />
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-widest uppercase" style={{ textShadow: "0 4px 24px rgba(249, 115, 22, 0.4)" }}>
            Rockstar
          </h1>
          <p className="mt-4 text-zinc-400 max-w-lg text-lg tracking-wide uppercase font-medium">
            Desarrolladora de mundos inmersivos
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-24 bg-zinc-900/50 border-y border-zinc-800 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">Historial e Info</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl"
          >
            {rockstarInfo.split('\\n\\n').map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300 leading-relaxed text-lg mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Juegos Section */}
      <section id="juegos" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <div className="h-0.5 w-12 bg-orange-500 rounded-full" />
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-widest">Juegos</h2>
          <div className="h-0.5 w-12 bg-orange-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col xl:flex-row gap-8 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden ${game.bgCustom || ''}`}
            >
              <div className="w-full xl:w-2/5 p-8 flex flex-col z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-800 w-32 h-auto shrink-0 bg-zinc-950 flex items-center justify-center p-2">
                    <img 
                      src={game.cover} 
                      alt={`Portada de ${game.title}`} 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  
                  {/* +18 Badge */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-600 bg-red-600/10 shrink-0">
                    <span className="font-bold text-red-500 text-sm tracking-tighter">+18</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{game.title}</h3>
                <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {game.description}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-800/50 flex flex-col gap-3">
                  <a 
                    href={game.steamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-wrap items-center justify-center gap-2 w-full py-4 px-6 bg-white text-zinc-950 font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                    <span>Comprar en Steam</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                  <a 
                    href={game.epicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-wrap items-center justify-center gap-2 w-full py-4 px-6 bg-zinc-800 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-700 transition-all duration-300"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/250px-Epic_Games_logo.svg.png" className="h-4 w-auto grayscale brightness-200 transition-transform group-hover:-translate-y-0.5" alt="Epic Games" />
                    <span>Comprar desde Epic Games</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              {/* Enhanced Video Container */}
              <div className="w-full xl:w-3/5 relative bg-black shrink-0 min-h-[300px] xl:min-h-full">
                <div className="absolute inset-0 p-4 xl:p-8 xl:pl-0 flex items-center justify-center pointer-events-none">
                   <div className="w-full h-full relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl pointer-events-auto">
                     <iframe
                        className="w-full h-full absolute inset-0 object-cover"
                        src={`https://www.youtube.com/embed/${game.trailerId}?rel=0&showinfo=0&autohide=1`}
                        title={`Tráiler de ${game.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black pt-16 pb-8 text-center px-4">
        <img 
            src="https://yt3.googleusercontent.com/qEoab5niOODApvXsknPU2GjZQ584CPEgVi7RFXf7ZDt7qY31f82PHG85RZS0QmosA40qpn7B-MI=s900-c-k-c0x00ffffff-no-rj" 
            alt="Rockstar Footer Logo" 
            className="w-12 h-12 mx-auto rounded mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
        />
        <p className="text-zinc-600 text-sm mb-2 font-medium">© {new Date().getFullYear()} Rockstar Games / Take-Two Interactive.</p>
        <p className="text-zinc-700 text-xs">Página creada solo con fines demostrativos.</p>
      </footer>
    </div>
  );
}
