const scientists = [
  "Aage Bohr",
  "Abdul Qadeer Khan",
  "Abu Nasr Al-Farabi",
  "Ada Lovelace",
  "Adalbert Czerny",
  "Agnes Arber",
  "Ahmed Zewail",
  "Al-Battani",
  "Alan Turing",
  "Albert Abraham Michelson",
  "Albert Einstein",
  "Alberto Santos-Dumont",
  "Albrecht von Haller",
  "Aldo Leopold",
  "Alessandro Volta",
  "Alexander Bain",
  "Alexander Brongniart",
  "Alexander Fleming",
  "Alexander Graham Bell",
  "Alexander Von Humboldt",
  "Alfred Binet",
  "Alfred Blalock",
  "Alfred Kinsey",
  "Alfred Nobel",
  "Alfred Russel Wallace",
  "Alfred Wegener",
  "Amedeo Avogadro",
  "Anders Celsius",
  "Andre Marie Ampère",
  "Andreas Vesalius",
  "Angel Alcala",
  "Antoine Lavoisier",
  "Antonie van Leeuwenhoek",
  "Antonio Meucci",
  "Antony Hewish",
  "Archimedes",
  "Aristarchus",
  "Aristotle",
  "Arnold Orville Beckman",
  "Arnold Sommerfeld",
  "Arthur Eddington",
  "Artturi Virtanen",
  "Avicenna",
  "B. F. Skinner",
  "Barbara McClintock",
  "Beatrix Potter",
  "Benjamin Cabrera",
  "Benjamin Franklin",
  "Benjamin Thompson",
  "Bernardo Houssay",
  "Bill Nye",
  "Blaise Pascal",
  "Brahmagupta",
  "Brian Cox",
  "C. V. Raman",
  "Carl Bosch",
  "Carl Friedrich Gauss",
  "Carl Sagan",
  "Carolus Linnaeus",
  "Charles Babbage",
  "Charles Darwin",
  "Charles Lyell",
  "Charles Sherrington",
  "Charles-Augustin de Coulomb",
  "Chen-Ning Yang",
  "Christiaan Huygens",
  "Christiane Nusslein-Volhard",
  "Clarence Birdseye",
  "Claude Bernard",
  "Claude Levi-Strauss",
  "Clyde Tombaugh",
  "Daniel Bernoulli",
  "David Bohm",
  "David Hilbert",
  "Dian Fossey",
  "Dmitri Mendeleev",
  "Dorothy Hodgkin",
  "E. O. Wilson",
  "Edmund Halley",
  "Edward Jenner",
  "Edward Teller",
  "Edwin Herbert Land",
  "Edwin Hubble",
  "Elizabeth Blackwell",
  "Emil Adolf Behring",
  "Emil Fischer",
  "Emil Kraepelin",
  "Emile Berliner",
  "Enrico Fermi",
  "Eratosthenes",
  "Ernest Rutherford",
  "Ernesto Illy",
  "Ernst Haeckel",
  "Ernst Ising",
  "Ernst Mach",
  "Ernst Mayr",
  "Ernst Werner von Siemens",
  "Erwin Chargaff",
  "Erwin Schrödinger",
  "Euclid",
  "Evangelista Torricelli",
  "Francesco Redi",
  "Francis Bacon",
  "Francis Crick",
  "Francis Galton",
  "Frank Hornby",
  "Franz Boas",
  "Frederick Gowland Hopkins",
  "Frederick Sanger",
  "Frederick Soddy",
  "Friedrich August Kekulé",
  "Friedrich Wöhler",
  "Fritz Haber",
  "Galen",
  "Galileo Galilei",
  "Gene Shoemaker",
  "Georg Ohm",
  "George Beadle",
  "George Gamow",
  "George Gaylord Simpson",
  "George Washington Carver",
  "Georges-Louis Leclerc, Comte de Buffon",
  "Gertrude Elion",
  "Gerty Theresa Cori",
  "Glenn Seaborg",
  "Gottfried Leibniz",
  "Gottlieb Daimler",
  "Grace Murray Hopper",
  "Gregor Mendel",
  "Guglielmo Marconi",
  "Gustav Kirchoff",
  "Gustav Ludwig Hertz",
  "Hans Bethe",
  "Hans Christian Oersted",
  "Hans Selye",
  "Harriet Quimby",
  "Hedy Lamarr",
  "Heike Kamerlingh Onnes",
  "Heinrich Hertz",
  "Hendrik Antoon Lorentz",
  "Henri Becquerel",
  "Henrietta Swan Leavitt",
  "Henry Bessemer",
  "Henry Cavendish",
  "Henry David Thoreau",
  "Henry Ford",
  "Henry Moseley",
  "Hermann Rorschach",
  "Hermann von Helmholtz",
  "Homi Jehangir Bhabha",
  "Humphry Davy",
  "Ibn Battuta",
  "Ibn Rushd",
  "Inge Lehmann",
  "Irene Joliot-Curie",
  "Isaac Newton",
  "Ivan Pavlov",
  "J. Hans D. Jensen",
  "J. J. Thomson",
  "J. Robert Oppenheimer",
  "Jagadish Chandra Bose",
  "James Chadwick",
  "James Clerk Maxwell",
  "James Dwight Dana",
  "James Hutton",
  "James Prescott Joule",
  "James Watson",
  "James Watt",
  "Jan Baptist von Helmont",
  "Jane Goodall",
  "Jane Marcet",
  "Jean Andre Deluc",
  "Jean Piaget",
  "Jean-Baptiste Lamarck",
  "Jim Al-Khalili",
  "Jocelyn Bell Burnell",
  "Johannes Kepler",
  "John Archibald Wheeler",
  "John Bardeen",
  "John Dalton",
  "John Locke",
  "John Logie Baird",
  "John Napier",
  "John Needham",
  "John Ray",
  "John von Neumann",
  "Jonas Salk",
  "Joseph Banks",
  "Joseph Lister",
  "Joseph Priestley",
  "Justus von Liebig",
  "K. Eric Drexler",
  "Karl F. Herzfeld",
  "Karl Landsteiner",
  "Katharine Burr Blodgett",
  "Keisuke Ito",
  "Kip S. Thorne",
  "Konrad Lorenz",
  "Kristian Birkeland",
  "Lee De Forest",
  "Leland Clark",
  "Leo Szilard",
  "Leon Foucault",
  "Leonardo da Vinci",
  "Leonhard Euler",
  "Lester R. Brown",
  "Linus Pauling",
  "Lise Meitner",
  "Louis Agassiz",
  "Louis de Broglie",
  "Louis Pasteur",
  "Lucretius",
  "Ludwig Boltzmann",
  "Luigi Galvani",
  "Luis Alvarez",
  "Luther Burbank",
  "Lynn Margulis",
  "Mae Carol Jemison",
  "Marcello Malpighi",
  "Marguerite Perey",
  "Maria Gaetana Agnesi",
  "Maria Goeppert-Mayer",
  "Maria Mitchell",
  "Marie Curie",
  "Mario Molina",
  "Mary Anning",
  "Max Born",
  "Max Delbruck",
  "Max Planck",
  "Max von Laue",
  "Michael E. Brown",
  "Michael Faraday",
  "Michio Kaku",
  "Mihailo Petrovic Alas",
  "Mohammad Abdus Salam",
  "Muhammad ibn Musa al-Khwarizmi",
  "Murray Gell-Mann",
  "Neil deGrasse Tyson",
  "Niccolo Leoniceno",
  "Nicholas Culpeper",
  "Nicolaus Copernicus",
  "Niels Bohr",
  "Nikola Tesla",
  "Noam Chomsky",
  "Omar Khayyam",
  "Otto Hahn",
  "Otto Haxel",
  "Paul Dirac",
  "Paul Ehrlich",
  "Pearl Kendrick",
  "Percy Lavon Julian",
  "Peter Debye",
  "Pierre Curie",
  "Pierre de Fermat",
  "Pierre-Simon Laplace",
  "Prafulla Chandra Ray",
  "Prokop Divis",
  "Pythagoras",
  "Rachel Carson",
  "Ramon Barba",
  "Randy Pausch",
  "René Descartes",
  "Richard Feynman",
  "Rita Levi-Montalcini",
  "Robert Bosch",
  "Robert Boyle",
  "Robert Brown",
  "Robert Bunsen",
  "Robert Goddard",
  "Robert Hooke",
  "Robert Koch",
  "Ronald Ross",
  "Rosalind Franklin",
  "Rudolf Christian Karl Diesel",
  "Rudolf Virchow",
  "Salim Ali",
  "Sally Ride",
  "Santiago Ramon y Cajal",
  "Sergei Winogradsky",
  "Sheldon Lee Glashow",
  "Shintaro Hirase",
  "Sigmund Freud",
  "Srinivasa Ramanujan",
  "Stephanie Kwolek",
  "Stephen Hawking",
  "Steven Chu",
  "Subrahmanyan Chandrasekhar",
  "Svante Arrhenius",
  "Sven Wingqvist",
  "Thabit ibn Qurra",
  "Thales of Miletus",
  "Theodor Schwann",
  "Theodosius Dobzhansky",
  "Thomas Alva Edison",
  "Thomas Burnet",
  "Thomas Hunt Morgan",
  "Thomas Kuhn",
  "Thomas Midgeley Jr.",
  "Thomas Newcomen",
  "Thomas Willis",
  "Tim Noakes",
  "Timothy John Berners-Lee",
  "Trofim Lysenko",
  "Tycho Brahe",
  "Ukichiro Nakaya",
  "Virginia Apgar",
  "Vladimir Vernadsky",
  "Walter Schottky",
  "Walther Wilhelm Georg Bothe",
  "Werner Heisenberg",
  "Wernher Von Braun",
  "Wilbur and Orville Wright",
  "Wilhelm Ostwald",
  "Wilhelm Röntgen",
  "Wilhelm Wundt",
  "Willard Frank Libby",
  "Willard Gibbs",
  "William Bayliss",
  "William Buckland",
  "William Harvey",
  "William Herschel",
  "William Hopkins",
  "William John Swainson",
  "William Ramsay",
  "William Smith",
  "William Thomson",
  "Wolfgang Ernst Pauli",
  "Zora Neale Hurston"
];

const sentences = (() => {
  const lorem = `Lorem ipsum dolor sit amet.
    Nibh virtute voluptatibus ius no.
    Iuvaret praesent qui no.
    Amet aliquid ceteros qui ex.
    Inermis deterruisset at nec.
    Case appareat reprimique ex bacon.
    Vix regione probatus at.
    Eu alii menandri antiopam sed.
    Harum dicant quo ei.
    At idque quando antiopam qui.
    Sed ex affert suscipit.
    Elit convenire consectetuer ne lettuce.
    Ius doming vidisse rationibus an.
    Per paulo petentium urbanitas te.
    Nihil audiam duo ut.
    Nec in ipsum invidunt.
    Offendit consetetur nec ut.
    Sumo iudico mea cu.
    Sed nihil expetendis an.
    Phaedrum maiestatis et tomato.
    Eum nisl dicant doctus ad.
    Quod evertitur est et.
    Nec omnis mutat sonet in.
    Amet omnium euripidis ex vix.
    Virtute nostrum pertinax id per.
    Facete maiestatis in vis.
    Eu dico consul ocurreret vix. 
    Ut cibo eius omnium per.
    Ut nostro integre mea.
    Tollit atomorum mel in.
    Tea oporteat corrumpit quo.
    Eu graeci periculis sadipscing vix.
    At choro gloriatur quo.
    Pri at expetenda suavitate.
    Homero pertinax definitiones at pri.
    Curabitur ut sem id risus ultrices auctor non vel mauris. 
    Donec nec augue nec justo dictum tincidunt. 
    Nullam sit amet lorem mauris. 
    Donec malesuada, sapien sed pulvinar tempus, lorem lectus gravida mi, eu blandit augue augue sit amet nisi. 
    Praesent pretium eget elit vel facilisis. 
    Praesent ut libero in turpis aliquam finibus. 
    Duis sit amet libero eu dui euismod auctor eget sagittis metus. 
    Vestibulum accumsan tellus vitae neque elementum venenatis.
    Nam at felis pellentesque, faucibus urna sed, maximus sem. 
    Sed id ex at mi congue posuere non hendrerit sapien. 
    Phasellus luctus justo et dolor suscipit, rhoncus fringilla turpis tincidunt. 
    Etiam sed blandit dui. 
    Sed convallis mattis dui ac tristique. 
    Phasellus nec vestibulum leo. 
    Nam a leo sit amet libero ultricies dictum. 
    Maecenas pellentesque dui finibus, bibendum ipsum vitae, ultricies nisi. 
    Praesent sit amet ornare nisl. 
    Aliquam tristique nibh in lectus tincidunt sodales. 
    Curabitur faucibus porttitor efficitur. 
    Morbi imperdiet sem sit amet magna convallis, sollicitudin hendrerit metus tincidunt. 
    Nullam sodales turpis sit amet tincidunt faucibus. 
    Nam venenatis eu diam vehicula consequat. 
    Quisque non risus sollicitudin, efficitur nulla et, molestie orci. 
    Vestibulum aliquam, ligula a consectetur mattis, purus nibh sagittis odio, eu mollis purus erat sed nibh. 
    Sed malesuada urna ligula, at varius neque pretium hendrerit. 
    Nullam hendrerit accumsan metus eu molestie. 
    Sed vehicula sem arcu, ut maximus dolor efficitur ut. 
    Suspendisse euismod euismod lorem, eu cursus nibh interdum aliquam. 
    Morbi lacinia augue id malesuada malesuada. 
    Aliquam quis ligula ipsum. 
    Aliquam non tortor mauris. 
    Ut semper, massa sed rutrum elementum, nunc felis imperdiet est, vitae tincidunt erat felis in ipsum.
    Vestibulum sit amet tempor lorem. 
    Vivamus at nisl purus. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Nulla non diam facilisis, vestibulum arcu at, egestas lorem. 
    Pellentesque vitae nisi a eros porta dictum sed ut urna. 
    Mauris urna metus, iaculis eu est ut, finibus convallis erat. 
    Curabitur et est auctor, feugiat sapien imperdiet, varius ligula. 
    Proin lacinia magna sed elit rutrum varius. 
    Curabitur tincidunt sodales nisi, in scelerisque nulla gravida ut. 
    Sed varius et ex id euismod. 
    In ipsum nisl, sagittis sit amet massa convallis, fermentum ullamcorper velit. 
    Curabitur volutpat nisi ut erat mattis venenatis. 
    Pellentesque accumsan quam placerat efficitur fermentum. 
    Vestibulum aliquet at odio vel faucibus. 
    Integer congue, augue sed vestibulum cursus, justo nibh porta eros, sed pellentesque enim eros eget magna.
    Leverage agile frameworks to provide a robust synopsis for high level overviews.
    Bring to the table win-win survival strategies to ensure proactive domination.
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
    Override the digital divide with additional clickthroughs from DevOps.
    Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`;

  const lines = lorem.split("\n").map(l => l.trim());
  return lines;
})();

export function getScientist(index: number) {
  const safeIndex = index % scientists.length;
  return scientists[safeIndex];
}

export function getSentence(index: number) {
  const safeIndex = index % sentences.length;
  return sentences[safeIndex];
}
