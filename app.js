/* =========================================
   BOOKTOPIA - CORE SYSTEM V9 (COMPLETO)
   ========================================= */

// --- Catálogo de 50 Libros con Descripciones Extensas ---
const BOOKS_DATA = [
    { id: "1", title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", category: "novela", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop", archiveId: "donquijotedelamancha01cerv", synopsis: "Las aventuras del ingenioso hidalgo Don Quijote de la Mancha y su fiel escudero Sancho Panza. Una sátira brillante sobre los libros de caballerías, la locura y la realidad. Acompaña a estos inolvidables personajes en su lucha contra molinos de viento y ejércitos de ovejas, en una obra que explora la naturaleza de la ficción y la condición humana. Un clásico indispensable que te hará reír y reflexionar a partes iguales.", year: 1605, pages: 863 },
    { id: "2", title: "Cien Años de Soledad", author: "Gabriel García Márquez", category: "novela", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop", archiveId: "cienanosdesoleda0000garc", synopsis: "La obra maestra del realismo mágico. Narra la historia de la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo. Un universo donde lo maravilloso y lo cotidiano se entrelazan para contar la historia de América Latina, sus guerras, sus amores imposibles y su soledad eterna. Una novela monumental que cambió la literatura hispanoamericana para siempre.", year: 1967, pages: 417 },
    { id: "3", title: "El Principito", author: "Antoine de Saint-Exupéry", category: "novela", cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=400&auto=format&fit=crop", archiveId: "elprincipito0000sain", synopsis: "Un piloto se estrella en el desierto del Sahara y conoce a un pequeño príncipe que viene de otro planeta. A través de sus relatos, el libro nos invita a reflexionar sobre la amistad, el amor, la pérdida y la ceguera del mundo adulto. Una fábula poética que trasciende edades y se convierte en una guía para el corazón, recordándonos que 'lo esencial es invisible a los ojos'.", year: 1943, pages: 96 },
    { id: "4", title: "1984", author: "George Orwell", category: "novela", cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=400&auto=format&fit=crop", archiveId: "nineteeneightyfo00orwe", synopsis: "En un futuro distópico, el Gran Hermano todo lo ve. Winston Smith trabaja en el Ministerio de la Verdad, reescribiendo la historia para adaptarla al partido. Pero un día decide rebelarse. Una advertencia escalofriante sobre los peligros del totalitarismo, la manipulación del lenguaje y la pérdida de la libertad individual. Una novela que resuena hoy más que nunca.", year: 1949, pages: 328 },
    { id: "5", title: "Orgullo y Prejuicio", author: "Jane Austen", category: "novela", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=400&auto=format&fit=crop", archiveId: "prideandprejudic00aust", synopsis: "Elizabeth Bennet, una joven ingeniosa y de fuerte carácter, debe lidiar con las expectativas sociales de su familia y con el orgulloso señor Darcy. Un estudio brillante y satírico sobre las clases sociales, el matrimonio y el amor en la Inglaterra rural del siglo XIX. Una historia que demuestra que las primeras impresiones rara vez son las correctas.", year: 1813, pages: 432 },
    { id: "6", title: "Crimen y Castigo", author: "Fiódor Dostoyevski", category: "novela", cover: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=400&auto=format&fit=crop", archiveId: "crimeandpunishme00dost", synopsis: "Raskolnikov, un estudiante pobre en San Petersburgo, decide cometer un asesinato para probar su teoría de que los hombres extraordinarios están por encima de la moral. Lo que sigue es un viaje psicológico desgarrador a través de la culpa, la paranoia y la búsqueda de la redención. Una de las cimas de la literatura universal.", year: 1866, pages: 671 },
    { id: "7", title: "Rayuela", author: "Julio Cortázar", category: "novela", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&auto=format&fit=crop", archiveId: "rayuela0000cort", synopsis: "Una novela revolucionaria que rompe las reglas de la narrativa lineal. Se puede leer de principio a fin, o siguiendo un tablero de dirección alternativo. La historia sigue a Horacio Oliveira en su búsqueda existencial entre París y Buenos Aires, acompañado por la Maga. Un laberinto literario que invita a ser explorado una y otra vez.", year: 1963, pages: 600 },
    { id: "8", title: "El Gran Gatsby", author: "F. Scott Fitzgerald", category: "novela", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop", archiveId: "greatgatsby0000fitz", synopsis: "En los locos años veinte, Nick Carraway se muda a Long Island y conoce a su vecino, el misterioso millonario Jay Gatsby. A través de fiestas fastuosas y amores perdidos, Fitzgerald retrata la decadencia del sueño americano y la ilusión de la riqueza. Una novela corta pero inmensa en su belleza y melancolía, perfecta para entender la sociedad moderna.", year: 1925, pages: 180 },
    { id: "9", title: "Fahrenheit 451", author: "Ray Bradbury", category: "novela", cover: "https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=400&auto=format&fit=crop", archiveId: "fahrenheit4510000brad", synopsis: "Guy Montag es un bombero, pero en su mundo los bomberos no apagan fuegos: los provocan para quemar libros. En una sociedad adicta a la televisión y ayuna de pensamiento crítico, Montag empieza a preguntarse qué hay en los libros que los hace tan peligrosos. Una defensa apasionada de la lectura y la libertad intelectual.", year: 1953, pages: 194 },
    { id: "10", title: "Moby Dick", author: "Herman Melville", category: "novela", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=400&auto=format&fit=crop", archiveId: "mobydick0000melv", synopsis: "El joven Ismael se enrola en el ballenero Pequod, comandado por el enigmático y obsesivo Capitán Ahab. Su misión: cazar a la gran ballena blanca que le arrancó una pierna. Una épica marítima monumental que explora la obsesión, la naturaleza del mal y la fragilidad humana frente a las fuerzas indomables del océano. Una experiencia de lectura inolvidable.", year: 1851, pages: 585 },
    { id: "11", title: "El Origen de las Especies", author: "Charles Darwin", category: "ciencia", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop", archiveId: "origenspecies00darw", synopsis: "El libro que revolucionó nuestra comprensión de la vida en la Tierra. Darwin presenta su teoría de la evolución mediante la selección natural, basada en años de observación y estudio. Una obra científica fundamental que cambió para siempre la biología y nuestra relación con el mundo natural. Imprescindible para cualquier mente curiosa.", year: 1859, pages: 502 },
    { id: "12", title: "Cosmos", author: "Carl Sagan", category: "ciencia", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", archiveId: "cosmos00saga", synopsis: "Un viaje inolvidable por el universo y la historia de la ciencia. Sagan explora la evolución del cosmos, desde el Big Bang hasta la aparición de la vida y la inteligencia humana. Con un lenguaje accesible y poético, nos invita a maravillarnos con el lugar que ocupamos en la inmensidad del espacio-tiempo. Una obra que cambia la perspectiva de cualquiera que la lea.", year: 1980, pages: 396 },
    { id: "13", title: "Breve Historia del Tiempo", author: "Stephen Hawking", category: "ciencia", cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop", archiveId: "briefhistoryofti00hawk", synopsis: "Hawking nos guía a través de los grandes misterios de la física moderna: el Big Bang, los agujeros negros y la naturaleza del tiempo. Explicado sin fórmulas matemáticas complejas, este libro es una ventana al pensamiento del genio más célebre de nuestro tiempo y una invitación a entender el universo que habitamos. Divulgación científica de primer nivel.", year: 1988, pages: 212 },
    { id: "14", title: "El Gen Egoísta", author: "Richard Dawkins", category: "ciencia", cover: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400&auto=format&fit=crop", archiveId: "selfishgene0000dawk", synopsis: "Una nueva perspectiva sobre la evolución. Dawkins propone que el gen es la unidad fundamental de la selección natural, y que los organismos son meras máquinas de supervivencia. Un libro polémico y fascinante que acuñó el término 'meme' y transformó la forma en que pensamos sobre la biología y el altruismo.", year: 1976, pages: 360 },
    { id: "15", title: "Física de lo Imposible", author: "Michio Kaku", category: "ciencia", cover: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&auto=format&fit=crop", archiveId: "physicsofimpossi00kaku", synopsis: "¿Podremos algún día teletransportarnos o viajar en el tiempo? Kaku explora la tecnología del futuro y los límites de la física actual. Clasificando las imposibilidades en tres categorías, nos muestra cómo lo que hoy parece magia podría ser ciencia mañana. Un viaje emocionante a los confines de la imaginación científica.", year: 2008, pages: 352 },
    { id: "16", title: "Sapiens", author: "Yuval Noah Harari", category: "historia", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop", archiveId: "sapienshistoryof0000hara", synopsis: "Una breve historia de la humanidad. Harari recorre desde la revolución cognitiva hasta la era de la información, explicando cómo el Homo sapiens llegó a dominar el planeta. Un análisis provocador sobre el dinero, las religiones, los imperios y la felicidad, que nos obliga a cuestionar el futuro de nuestra especie.", year: 2011, pages: 498 },
    { id: "17", title: "El Cerebro de Broca", author: "Carl Sagan", category: "ciencia", cover: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=400&auto=format&fit=crop", archiveId: "brocasbrain0000saga", synopsis: "Reflexiones sobre el romance de la ciencia. Sagan aborda temas como la evolución del cerebro, la inteligencia de los delfines, la posibilidad de vida extraterrestre y el escepticismo científico. Una colección de ensayos brillantes que celebran la curiosidad humana y el poder del método científico.", year: 1979, pages: 347 },
    { id: "18", title: "La Doble Hélice", author: "James D. Watson", category: "ciencia", cover: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400&auto=format&fit=crop", archiveId: "doublehelix0000wats", synopsis: "La historia del descubrimiento de la estructura del ADN, contada por uno de sus protagonistas. Watson relata la intensa y feroz competencia entre científicos por desentrañar el secreto de la vida. Un relato apasionante que revela la política, la ambición y la brillantez detrás de uno de los mayores hitos de la ciencia.", year: 1968, pages: 226 },
    { id: "19", title: "El Mundo de Sofía", author: "Jostein Gaarder", category: "filosofia", cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=400&auto=format&fit=crop", archiveId: "worldofsophiano00gaar", synopsis: "Sofía Amundsen, una niña de 14 años, recibe una carta con una sola pregunta: '¿Quién eres?'. Así comienza un viaje a través de la historia de la filosofía occidental, desde Sócrates hasta Sartre. Una novela didáctica brillante que hace accesibles los conceptos filosóficos más complejos y despierta el deseo de saber.", year: 1991, pages: 512 },
    { id: "20", title: "El Arte de la Guerra", author: "Sun Tzu", category: "historia", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop", archiveId: "artofwar00sunt", synopsis: "El tratado militar más antiguo e influyente de la historia. Sun Tzu establece las claves de la estrategia, el engaño y el liderazgo. Aunque escrito para la guerra, sus principios se aplican hoy en los negocios, el deporte y la vida diaria. Una guía atemporal sobre cómo vencer sin necesidad de combatir.", year: -500, pages: 68 },
    { id: "21", title: "Meditaciones", author: "Marco Aurelio", category: "filosofia", cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=400&auto=format&fit=crop", archiveId: "meditations0000marc", synopsis: "Las reflexiones personales del emperador romano Marco Aurelio sobre el estoicismo. Un manual de vida que enseña a mantener la calma frente a la adversidad, a aceptar lo que no se puede cambiar y a enfocarse en el deber y la virtud. Una obra maestra de la introspección y la sabiduría práctica.", year: 180, pages: 254 },
    { id: "22", title: "La Divina Comedia", author: "Dante Alighieri", category: "poesia", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=400&auto=format&fit=crop", archiveId: "divinacommedia0000dant", synopsis: "El viaje de Dante por el Infierno, el Purgatorio y el Paraíso. Guiado por el poeta Virgilio y luego por su amada Beatriz, Dante ofrece una visión monumental del más allá, llena de alegorías y encuentros con personajes históricos. Una de las cumbres de la literatura universal y la base del pensamiento occidental.", year: 1320, pages: 798 },
    { id: "23", title: "Veinte Poemas de Amor", author: "Pablo Neruda", category: "poesia", cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=400&auto=format&fit=crop", archiveId: "veintepoemasdea0000neru", synopsis: "Una de las obras más apasionadas de la lírica hispanoamericana. Neruda celebra el amor, la juventud y la naturaleza con un lenguaje sensual y desgarrador. Estos poemas, que revolucionaron la poesía en español, siguen conmoviendo a lectores de todas las edades con su belleza desnuda y directa.", year: 1924, pages: 80 },
    { id: "24", title: "Rimas y Leyendas", author: "Gustavo Adolfo Bécquer", category: "poesia", cover: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=400&auto=format&fit=crop", archiveId: "rimasyleyendas0000becq", synopsis: "Una colección de poemas y relatos breves del romanticismo español. Bécquer explora el amor no correspondido, la soledad y el misterio con una sensibilidad única. Sus rimas son sencillas pero profundas, y sus leyendas están llenas de atmósferas fantasmagóricas y belleza melancólica.", year: 1871, pages: 224 },
    { id: "25", title: "Antología Poética", author: "Federico G. Lorca", category: "poesia", cover: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop", archiveId: "antologiapoetica0000lorc", synopsis: "Una selección de la obra del poeta y dramaturgo granadino, una de las figuras más importantes de la Generación del 27. Lorca fusiona la tradición popular andaluza con las vanguardias europeas, creando un universo poético lleno de color, pasión y tragedia. Versos que se sienten antes de entenderse.", year: 1930, pages: 180 },
    { id: "26", title: "El Cuervo", author: "Edgar Allan Poe", category: "poesia", cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop", archiveId: "ravenandotherpoem00poee", synopsis: "El poema más famoso del maestro del terror. Un hombre afligido por la pérdida de su amada es visitado en la noche por un cuervo que solo sabe decir 'Nunca más'. Una obra maestra del ritmo y la atmósfera gótica, que explora la desesperación, la locura y la muerte. Una lectura imprescindible para los amantes del misterio.", year: 1845, pages: 60 },
    { id: "27", title: "Odas Elementales", author: "Pablo Neruda", category: "poesia", cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=400&auto=format&fit=crop", archiveId: "odaselementales0000neru", synopsis: "Un canto a las cosas simples. Neruda eleva a la categoría de poesía los objetos cotidianos: una cebolla, el mar, un tomate, el pan. Con un tono festivo y coloquial, nos invita a redescubrir la belleza de lo ordinario. Un recordatorio de que la poesía está en todas partes, solo hay que saber mirar.", year: 1954, pages: 232 },
    { id: "28", title: "Los Heraldos Negros", author: "César Vallejo", category: "poesia", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&auto=format&fit=crop", archiveId: "heraldosnegros0000vall", synopsis: "La obra cumbre del vanguardismo peruano. Vallejo explora el dolor humano, la muerte y la injusticia social con un lenguaje innovador y profundamente emotivo. Sus versos, a menudo desgarradores, reflejan la angustia existencial del hombre moderno y la realidad de América Latina. Una poesía que sacude y transforma.", year: 1919, pages: 120 },
    { id: "29", title: "La Riqueza de las Naciones", author: "Adam Smith", category: "historia", cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop", archiveId: "wealthofnations00smit", synopsis: "El texto fundacional de la economía moderna. Smith analiza la división del trabajo, el libre mercado y la 'mano invisible' que regula la economía. Una obra monumental que sentó las bases del capitalismo y sigue siendo objeto de estudio y debate en la actualidad. Esencial para entender el mundo en que vivimos.", year: 1776, pages: 1264 },
    { id: "30", title: "El Príncipe", author: "Nicolás Maquiavelo", category: "historia", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop", archiveId: "prince0000mach", synopsis: "Un tratado político sobre cómo adquirir y mantener el poder. Maquiavelo rompe con la moral tradicional y ofrece consejos prácticos, a veces despiadados, a los gobernantes. Una obra que ha escandalizado y fascinado por igual, y que sigue siendo una referencia fundamental para entender la política y la naturaleza humana.", year: 1532, pages: 140 },
    { id: "31", title: "Diario de Ana Frank", author: "Ana Frank", category: "historia", cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=400&auto=format&fit=crop", archiveId: "diaryofyounggirl00fran", synopsis: "El testimonio desgarrador de una niña judía que vivió escondida junto a su familia durante la ocupación nazi de Ámsterdam. Ana relata sus miedos, sus esperanzas y sus sueños con una madurez y una honestidad sobrecogedoras. Un documento histórico invaluable y un recordatorio del horror de la guerra y la belleza del espíritu humano.", year: 1947, pages: 283 },
    { id: "32", title: "El Hobbit", author: "J.R.R. Tolkien", category: "novela", cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop", archiveId: "hobbit0000tolk", synopsis: "Bilbo Bolsón, un hobbit tranquilo y hogareño, es arrastrado por el mago Gandalf a una aventura inesperada para recuperar un tesoro robado por el dragón Smaug. En el camino, se enfrenta a trolls, trasgos y acertijos, y encuentra un anillo mágico que cambiará el destino de la Tierra Media. El inicio perfecto para adentrarse en la fantasía épica.", year: 1937, pages: 310 },
    { id: "33", title: "Drácula", author: "Bram Stoker", category: "novela", cover: "https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=400&auto=format&fit=crop", archiveId: "dracula0000stok", synopsis: "La novela epistolar de vampiros más famosa de la historia. El joven abogado Jonathan Harker viaja al castillo del Conde Drácula en Transilvania y descubre un terror inimaginable. A través de cartas y diarios, se construye una atmósfera de suspense y horror que ha definido el mito del vampiro moderno. Una obra maestra del género gótico.", year: 1897, pages: 418 },
    { id: "34", title: "Frankenstein", author: "Mary Shelley", category: "novela", cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=400&auto=format&fit=crop", archiveId: "frankenstein0000shel", synopsis: "El científico Víctor Frankenstein crea un ser vivo a partir de partes de cadáveres. Pero al ver su espantosa apariencia, lo abandona, desencadenando una serie de tragedias. Una reflexión profunda sobre los límites de la ciencia, la responsabilidad del creador y la soledad. Considerada la primera novela de ciencia ficción de la historia.", year: 1818, pages: 280 },
    { id: "35", title: "La Metamorfosis", author: "Franz Kafka", category: "novela", cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=400&auto=format&fit=crop", archiveId: "metamorphosis0000kafk", synopsis: "Gregorio Samsa despierta una mañana convertido en un monstruoso insecto. A partir de ahí, su vida y la de su familia cambian drásticamente. Una alegoría angustiosa sobre la alienación, la burocracia y la incomunicación, que es una de las obras más influyentes del existencialismo y la literatura del siglo XX.", year: 1915, pages: 120 },
    { id: "36", title: "El Extranjero", author: "Albert Camus", category: "filosofia", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=400&auto=format&fit=crop", archiveId: "stranger0000camu", synopsis: "Meursault, un hombre indiferente al mundo que lo rodea, comete un asesinato en Argelia. Durante su juicio, no es tanto el crimen lo que lo condena, sino su falta de emoción y su rechazo a las convenciones sociales. Una novela fundamental del existencialismo que explora el absurdo de la condición humana.", year: 1942, pages: 159 },
    { id: "37", title: "Así Habló Zaratustra", author: "Friedrich Nietzsche", category: "filosofia", cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=400&auto=format&fit=crop", archiveId: "thouspakezarathu00niet", synopsis: "La obra más famosa de Nietzsche. A través del profeta Zaratustra, el filósofo proclama la muerte de Dios, el advenimiento del superhombre y la voluntad de poder. Un texto poético y profundo que desafía todas las creencias establecidas y llama a la humanidad a crear sus propios valores.", year: 1883, pages: 352 },
    { id: "38", title: "El Ser y la Nada", author: "Jean-Paul Sartre", category: "filosofia", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&auto=format&fit=crop", archiveId: "beingandnothingn0000sart", synopsis: "Tratado sobre el existencialismo y la libertad humana. Sartre analiza la conciencia, la angustia y la mala fe, argumentando que estamos condenados a ser libres y responsables de nuestras elecciones. Una obra densa pero fundamental para entender el pensamiento del siglo XX.", year: 1943, pages: 638 },
    { id: "39", title: "La República", author: "Platón", category: "filosofia", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop", archiveId: "republic0000plat", synopsis: "Diálogo sobre la justicia, el estado ideal y la teoría de las ideas. Sócrates y sus interlocutores exploran qué es la justicia, cómo debería organizarse una sociedad perfecta y el famoso mito de la caverna. La obra más influyente de la filosofía occidental.", year: -380, pages: 416 },
    { id: "40", title: "El Poder del Hábito", author: "Charles Duhigg", category: "ciencia", cover: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&auto=format&fit=crop", archiveId: "powerofhabit0000duhi", synopsis: "Cómo los hábitos transforman nuestra vida, las empresas y las sociedades. Duhigg explora la ciencia detrás de la formación de hábitos y nos enseña cómo identificar el bucle del hábito (señal, rutina, recompensa) para poder cambiarlos. Un libro práctico y fascinante basado en investigaciones científicas.", year: 2012, pages: 371 },
    { id: "41", title: "Pensar Rápido, Pensar Despacio", author: "Daniel Kahneman", category: "ciencia", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop", archiveId: "thinkingfastands00kahn", synopsis: "El premio Nobel de Economía Daniel Kahneman nos sumerge en los dos sistemas de pensamiento: el rápido, intuitivo y emocional (Sistema 1), y el lento, deliberativo y lógico (Sistema 2). Una obra reveladora sobre cómo tomamos decisiones y por qué nos equivocamos tan a menudo. Esencial para entender la psicología humana.", year: 2011, pages: 499 },
    { id: "42", title: "Los Mitos de Cthulhu", author: "H.P. Lovecraft", category: "novela", cover: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&auto=format&fit=crop", archiveId: "callofcthulhu0000love", synopsis: "Historias de terror cósmico e insignificancia humana. Lovecraft creó un panteón de dioses antiguos, como Cthulhu, que duermen en el fondo del océano esperando despertar. A través de relatos como 'La llamada de Cthulhu', construye una atmósfera de horror psicológico que ha influido en innumerables autores y juegos.", year: 1928, pages: 320 },
    { id: "43", title: "El Arte de la Guerra", author: "Sun Tzu", category: "historia", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop", archiveId: "artofwar00sunt", synopsis: "El tratado militar más antiguo e influyente de la historia. Sun Tzu establece las claves de la estrategia, el engaño y el liderazgo. Aunque escrito para la guerra, sus principios se aplican hoy en los negocios, el deporte y la vida diaria. Una guía atemporal sobre cómo vencer sin necesidad de combatir.", year: -500, pages: 68 },
    { id: "44", title: "El Mundo Clásico", author: "Mary Beard", category: "historia", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop", archiveId: "classicalworld0000bear", synopsis: "Una introducción fascinante a la historia de Grecia y Roma. Beard explora la política, la cultura, la religión y la vida cotidiana de estas civilizaciones que sentaron las bases de Occidente. Con un estilo ameno y riguroso, nos muestra lo mucho que todavía tenemos en común con los antiguos.", year: 2016, pages: 600 },
    { id: "45", title: "El Nombre de la Rosa", author: "Umberto Eco", category: "novela", cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=400&auto=format&fit=crop", archiveId: "nameofrose0000ecou", synopsis: "Misterio en una abadía medieval. El fraile franciscano Guillermo de Baskerville y su aprendiz Adso investigan una serie de muertes inexplicables. Una novela que combina la novela negra, la historia, la filosofía y la teología, explorando los conflictos entre la fe y la razón en el siglo XIV.", year: 1980, pages: 512 },
    { id: "46", title: "Los Juegos del Hambre", author: "Suzanne Collins", category: "novela", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=400&auto=format&fit=crop", archiveId: "hungergames0000coll", synopsis: "En un futuro distópico, la nación de Panem se divide en distritos. Cada año, el Capitolio obliga a un chico y una chica de cada distrito a participar en los Juegos del Hambre, una competencia a muerte televisada. Katniss Everdeen se ofrece como voluntaria para salvar a su hermana, desencadenando una lucha por la supervivencia y la rebelión.", year: 2008, pages: 374 },
    { id: "47", title: "El Código Da Vinci", author: "Dan Brown", category: "novela", cover: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=400&auto=format&fit=crop", archiveId: "davincicode0000brow", synopsis: "El profesor Robert Langdon se ve envuelto en un misterio que involucra a la Iglesia Católica, una sociedad secreta y las obras de Leonardo da Vinci. Un thriller de ritmo trepidante que combina arte, historia y criptografía, y que ha generado un enorme debate sobre sus teorías.", year: 2003, pages: 489 },
    { id: "48", title: "La Sombra del Viento", author: "Carlos Ruiz Zafón", category: "novela", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&auto=format&fit=crop", archiveId: "shadowofthewind0000ruiz", synopsis: "Daniel Sempere, un niño de diez años, descubre un libro maldito en el Cementerio de los Libros Olvidados. A partir de ahí, emprende una búsqueda para descubrir la verdad sobre su autor, Julián Carax. Un homenaje a la literatura y a la ciudad de Barcelona, lleno de misterio, amor y tragedia.", year: 2001, pages: 576 },
    { id: "49", title: "El Amor en los Tiempos del Cólera", author: "Gabriel García Márquez", category: "novela", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop", archiveId: "loveinthetimeof0000garc", synopsis: "La historia de un amor que dura toda una vida. Florentino Ariza y Fermina Daza se enamoran en su juventud, pero ella se casa con otro hombre. Florentino espera más de cincuenta años para tener otra oportunidad. Una novela tierna, divertida y profunda sobre el amor, la vejez y la persistencia.", year: 1985, pages: 368 },
    { id: "50", title: "Ficciones", author: "Jorge Luis Borges", category: "novela", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=400&auto=format&fit=crop", archiveId: "ficciones0000borg", synopsis: "Cuentos filosóficos y laberintos infinitos. Borges desafía la lógica y la realidad en relatos como 'La biblioteca de Babel' o 'El jardín de senderos que se bifurcan'. Una obra cerebral y deslumbrante que explora temas como el infinito, los espejos, las enciclopedias y el tiempo. Te cambia la forma de leer.", year: 1944, pages: 174 }
];

const state = {
    theme: localStorage.getItem('bt_theme') || 'dark',
    user: JSON.parse(localStorage.getItem('bt_user')) || null,
    saved: JSON.parse(localStorage.getItem('bt_saved') || '[]'),
    logs: JSON.parse(localStorage.getItem('bt_logs') || '[]'),
    suggestions: JSON.parse(localStorage.getItem('bt_suggestions') || '[]'),
    notes: JSON.parse(localStorage.getItem('bt_notes') || '[]'),
    currentBook: null,
    carouselIndex: 0,
    typingTimer: null,
    noteIndex: -1
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const dom = {
    // Login
    loginScreen: $('#loginScreen'), loginForm: $('#loginForm'), loginUser: $('#loginUser'), loginPass: $('#loginPass'), guestBtn: $('#guestBtn'), loginLogoBtn: $('#loginLogoBtn'),
    // App
    app: $('#app'), themeToggle: $('#themeToggle'), logoutBtn: $('#logoutBtn'), userName: $('#userName'), userRole: $('#userRole'), appLogoBtn: $('#appLogoBtn'),
    // Nav
    mainNav: $('#mainNav'), adminOnly: $$('.admin-only'),
    // Pantallas
    featuredGrid: $('#featuredGrid'), booksGrid: $('#booksGrid'), savedGrid: $('#savedGrid'), emptyLibrary: $('#emptyLibrary'),
    searchInput: $('#searchInput'), categoryChips: $('#categoryChips'),
    // Admin
    adminLogs: $('#adminLogs'), adminSuggestions: $('#adminSuggestions'), statTotalBooks: $('#statTotalBooks'), statEvents: $('#statEvents'), statSuggestions: $('#statSuggestions'), statSaved: $('#statSaved'), logoUpload: $('#logoUpload'),
    // Modales
    detailModal: $('#detailModal'), closeDetail: $('#closeDetail'), detailCover: $('#detailCover'), detailTitle: $('#detailTitle'), detailAuthor: $('#detailAuthor'), detailCategory: $('#detailCategory'), detailSynopsis: $('#detailSynopsis'), detailReadBtn: $('#detailReadBtn'), detailDownloadBtn: $('#detailDownloadBtn'), detailSaveBtn: $('#detailSaveBtn'), detailYear: $('#detailYear'), detailPages: $('#detailPages'),
    readerModal: $('#readerModal'), readerTitle: $('#readerTitle'), readerSubtitle: $('#readerSubtitle'), readerIframe: $('#readerIframe'), closeReader: $('#closeReader'), readerLoading: $('#readerLoading'),
    infoModal: $('#infoModal'), closeInfo: $('#closeInfo'),
    suggestionModal: $('#suggestionModal'), closeSuggestion: $('#closeSuggestion'), suggestionForm: $('#suggestionForm'), fabSuggest: $('#fabSuggest'), charCount: $('#charCount'),
    // Chatbot
    chatbotToggle: $('#chatbotToggle'), chatbotWindow: $('#chatbotWindow'), closeChatbot: $('#closeChatbot'), chatForm: $('#chatForm'), chatInput: $('#chatInput'), chatMessages: $('#chatMessages'),
    // Notebook
    notesList: $('#notesList'), newNoteBtn: $('#newNoteBtn'), noteTitleInput: $('#noteTitleInput'), noteContentInput: $('#noteContentInput'), saveNoteBtn: $('#saveNoteBtn'), wordCount: $('#wordCount'),
    // Extras
    toastContainer: $('#toastContainer'), loginTyping: $('#loginTyping'), heroTyping: $('#heroTyping'), bookTyping: $('#bookTyping')
};

function init() {
    initTheme();
    checkAuth();
    setupEventListeners();

    renderGrid(BOOKS_DATA.slice(0, 4), dom.featuredGrid, true);
    renderGrid(BOOKS_DATA, dom.booksGrid);
    dom.statTotalBooks.textContent = BOOKS_DATA.length;
    dom.statEvents.textContent = state.logs.length;
    dom.statSuggestions.textContent = state.suggestions.length;
    renderNotes();

    if (!state.user) {
        startTyping(dom.loginTyping, ["Ingresa a tu biblioteca digital...", "Miles de libros te esperan.", "Tu próxima gran lectura."]);
        startTyping(dom.bookTyping, ["Leer es soñar...", "Viaja sin moverte...", "Descubre mundos..."]);
    }
}

// --- TYPEWRITER ARREGLADO ---
function startTyping(element, texts) {
    if(!element) return;
    clearTimeout(element.timerId); // Evitar que se crucen las animaciones

    let textIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 30 : 80;
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        element.timerId = setTimeout(type, typeSpeed);
    }
    type();
}

// --- LOGS Y SUGERENCIAS ---
function logEvent(action, type = 'info') {
    const log = { id: Date.now(), time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), action, type };
    state.logs.unshift(log);
    if (state.logs.length > 50) state.logs.pop();
    localStorage.setItem('bt_logs', JSON.stringify(state.logs));
    dom.statEvents.textContent = state.logs.length;
    renderLogs();
}

function renderLogs() {
    dom.adminLogs.innerHTML = '';
    state.logs.forEach(log => {
        const div = document.createElement('div');
        div.className = `log-item ${log.type}`;
        div.innerHTML = `<span>${log.action}</span> <span class="log-time">${log.time}</span>`;
        dom.adminLogs.appendChild(div);
    });
}

function renderSuggestions() {
    dom.adminSuggestions.innerHTML = '';
    if(state.suggestions.length === 0) {
        dom.adminSuggestions.innerHTML = '<p style="color:var(--text-muted); text-align:center; margin-top:20px;">No hay sugerencias aún.</p>';
        return;
    }
    state.suggestions.forEach(sug => {
        const div = document.createElement('div');
        div.className = `log-item info`;
        div.style.flexDirection = 'column';
        div.style.alignItems = 'flex-start';
        div.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 4px;">${sug.name} (${sug.email}) <span class="badge" style="background:var(--accent); font-size:0.6rem;">${sug.type}</span></div>
            <div style="margin-top: 6px;">${sug.message}</div>
            <span class="log-time" style="margin-top: 6px;">${sug.date}</span>
        `;
        dom.adminSuggestions.appendChild(div);
    });
}

function showToast(title, message, type = 'success') {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    let icon = type === 'error' ? 'ph-warning-circle' : (type === 'info' ? 'ph-info' : 'ph-check-circle');
    t.innerHTML = `<i class="ph-fill ${icon} toast-icon"></i><div class="toast-content"><h4>${title}</h4><p>${message}</p></div><div class="toast-progress"></div>`;
    dom.toastContainer.appendChild(t);
    if (type === 'error') logEvent(`Error: ${title}`, 'error');
    setTimeout(() => { t.classList.add('toast-out'); setTimeout(() => t.remove(), 300); }, 3000);
}

// --- LOGIN Y VALIDACIONES ---
function setupEventListeners() {
    dom.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = dom.loginUser.value.trim();
        const pass = dom.loginPass.value.trim();
        let valid = true;

        if (!user) { dom.loginUser.parentElement.classList.add('invalid'); valid = false; }
        if (!pass) { dom.loginPass.parentElement.classList.add('invalid'); valid = false; }
        if (!valid) return;

        const btn = $('#loginBtn');
        btn.classList.add('loading');
        btn.querySelector('span').textContent = 'Verificando...';

        setTimeout(() => {
            btn.classList.remove('loading');
            btn.querySelector('span').textContent = 'Iniciar Sesión';

            if (user === 'admin' && pass === 'admin123') loginUser({ name: 'Administrador', role: 'admin' });
            else if (user === 'user' && pass === 'user123') loginUser({ name: 'Estudiante', role: 'user' });
            else showToast('Acceso Denegado', 'Credenciales incorrectas.', 'error');
        }, 1200);
    });

    dom.loginUser.addEventListener('input', () => dom.loginUser.parentElement.classList.remove('invalid'));
    dom.loginPass.addEventListener('input', () => dom.loginPass.parentElement.classList.remove('invalid'));
    dom.guestBtn.addEventListener('click', () => loginUser({ name: 'Invitado', role: 'guest' }));

    dom.logoutBtn.addEventListener('click', () => {
        logEvent(`Usuario ${state.user.name} cerró sesión`, 'info');
        state.user = null; localStorage.removeItem('bt_user');
        checkAuth(); showToast('Sesión Cerrada', 'Has salido del sistema.', 'info');
    });

    dom.themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('bt_theme', state.theme);
        initTheme();
    });

    document.addEventListener('click', (e) => {
        const navBtn = e.target.closest('[data-screen]');
        if (navBtn) {
            e.preventDefault();
            navigateTo(navBtn.dataset.screen);
            $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.screen === navBtn.dataset.screen));
        }
    });

    dom.searchInput.addEventListener('input', filterBooks);
    dom.categoryChips.addEventListener('click', handleCategory);

    // Modales
    dom.closeDetail.addEventListener('click', () => dom.detailModal.classList.add('hidden'));
    dom.detailReadBtn.addEventListener('click', () => { if(state.currentBook) openReader(state.currentBook); });
    dom.detailSaveBtn.addEventListener('click', () => { if(state.currentBook) toggleSave(state.currentBook.id); });
    dom.closeReader.addEventListener('click', closeReader);

    // Info Empresa
    dom.loginLogoBtn.addEventListener('click', () => dom.infoModal.classList.remove('hidden'));
    dom.appLogoBtn.addEventListener('click', () => dom.infoModal.classList.remove('hidden'));
    dom.closeInfo.addEventListener('click', () => dom.infoModal.classList.add('hidden'));

    // Sugerencias Form
    dom.fabSuggest.addEventListener('click', () => dom.suggestionModal.classList.remove('hidden'));
    dom.closeSuggestion.addEventListener('click', () => dom.suggestionModal.classList.add('hidden'));

    $('#sugMessage').addEventListener('input', function() {
        dom.charCount.textContent = this.value.length;
    });

    // Validaciones en tiempo real del form de sugerencias
    $('#sugName').addEventListener('input', function() { if(this.value.length < 3) this.parentElement.classList.add('invalid'); else this.parentElement.classList.remove('invalid'); });
    $('#sugEmail').addEventListener('input', function() { const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if(!r.test(this.value)) this.parentElement.classList.add('invalid'); else this.parentElement.classList.remove('invalid'); });
    $('#sugMessage').addEventListener('input', function() { if(this.value.length < 10) this.parentElement.classList.add('invalid'); else this.parentElement.classList.remove('invalid'); });

    dom.suggestionForm.addEventListener('submit', handleSuggestionSubmit);

    // Tabs Admin
    $$('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            $$('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            if(e.target.dataset.tab === 'logs') {
                dom.adminLogs.classList.remove('hidden');
                dom.adminSuggestions.classList.add('hidden');
            } else {
                dom.adminLogs.classList.add('hidden');
                dom.adminSuggestions.classList.remove('hidden');
                renderSuggestions();
            }
        });
    });

    // Logo Upload
    dom.logoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if(file) {
            showToast('Logo Actualizado', 'La marca ha sido cambiada.', 'success');
            logEvent('Administrador actualizó el logo', 'success');
        }
    });

    // Chatbot
    dom.chatbotToggle.addEventListener('click', () => {
        dom.chatbotWindow.classList.toggle('hidden');
        if(!dom.chatbotWindow.classList.contains('hidden')) dom.chatInput.focus();
    });
    dom.closeChatbot.addEventListener('click', () => dom.chatbotWindow.classList.add('hidden'));
    dom.chatForm.addEventListener('submit', handleChat);

    // Notebook
    dom.newNoteBtn.addEventListener('click', createNewNote);
    dom.saveNoteBtn.addEventListener('click', saveNote);
    dom.noteContentInput.addEventListener('input', updateWordCount);
}

function handleSuggestionSubmit(e) {
    e.preventDefault();
    const name = $('#sugName').value.trim();
    const email = $('#sugEmail').value.trim();
    const msg = $('#sugMessage').value.trim();
    const type = $('#sugType').value;

    let valid = true;
    if (name.length < 3) { $('#sugName').parentElement.classList.add('invalid'); valid = false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { $('#sugEmail').parentElement.classList.add('invalid'); valid = false; }
    if (msg.length < 10) { $('#sugMessage').parentElement.classList.add('invalid'); valid = false; }

    if (!valid) {
        showToast('Revisa el formulario', 'Hay campos incorrectos.', 'error');
        return;
    }

    state.suggestions.unshift({
        name, email, message: msg, type,
        date: new Date().toLocaleDateString('es-ES')
    });
    localStorage.setItem('bt_suggestions', JSON.stringify(state.suggestions));
    dom.statSuggestions.textContent = state.suggestions.length;

    showToast('Enviado', 'Tu mensaje ha sido recibido.', 'success');
    logEvent(`Nueva sugerencia de ${name} (${type})`, 'info');

    dom.suggestionForm.reset();
    dom.charCount.textContent = '0';
    dom.suggestionModal.classList.add('hidden');
}

// --- CHATBOT ---
function handleChat(e) {
    e.preventDefault();
    const text = dom.chatInput.value.trim().toLowerCase();
    if(!text) return;

    addChatMessage(text, 'user');
    dom.chatInput.value = '';

    setTimeout(() => {
        let botReply = "No estoy seguro de qué recomendar. ¿Podrías darme más detalles? (Prueba: 'ciencia', 'novela', 'poesía', 'historia')";

        if (text.includes('hola') || text.includes('buenos')) botReply = "¡Hola! ¿En qué puedo ayudarte hoy? Puedo recomendarte libros.";
        else if (text.includes('ciencia')) botReply = "Te recomiendo 'Cosmos' de Carl Sagan o 'El Gen Egoísta'. ¡Ve a la pestaña de Catálogo y filtra por Ciencia!";
        else if (text.includes('novela') || text.includes('ficcion')) botReply = "¡Excelente elección! 'Cien Años de Soledad' o '1984' son imperdibles. Filtra por Novela en el Catálogo.";
        else if (text.includes('poesia') || text.includes('poema')) botReply = "Te sugiero 'Veinte Poemas de Amor' de Neruda o 'Rimas y Leyendas' de Bécquer.";
        else if (text.includes('historia')) botReply = "Puedes empezar con 'Sapiens' de Harari o 'El Arte de la Guerra'. ¡Están en nuestro catálogo!";
        else if (text.includes('gracias')) botReply = "¡De nada! Disfruta tu lectura. 📚";

        addChatMessage(botReply, 'bot');
    }, 1000);
}

function addChatMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
    div.textContent = text;
    dom.chatMessages.appendChild(div);
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

// --- LÓGICA DE NOTEBOOK ---
function renderNotes() {
    dom.notesList.innerHTML = '';
    state.notes.forEach((note, index) => {
        const div = document.createElement('div');
        div.className = `note-item ${state.noteIndex === index ? 'active' : ''}`;
        div.innerHTML = `<h4>${note.title || 'Sin título'}</h4><p>${note.content || '...'}</p>`;
        div.onclick = () => loadNote(index);
        dom.notesList.appendChild(div);
    });
}

function createNewNote() {
    state.noteIndex = -1;
    dom.noteTitleInput.value = '';
    dom.noteContentInput.value = '';
    updateWordCount();
    renderNotes();
}

function loadNote(index) {
    state.noteIndex = index;
    const note = state.notes[index];
    dom.noteTitleInput.value = note.title;
    dom.noteContentInput.value = note.content;
    updateWordCount();
    renderNotes();
}

function saveNote() {
    const title = dom.noteTitleInput.value.trim();
    const content = dom.noteContentInput.value.trim();

    if (!title || !content) {
        showToast('Campos vacíos', 'Escribe un título y contenido para guardar.', 'error');
        return;
    }

    const newNote = { title, content, date: new Date().toISOString() };

    if (state.noteIndex === -1) {
        state.notes.unshift(newNote);
        state.noteIndex = 0;
    } else {
        state.notes[state.noteIndex] = newNote;
    }

    localStorage.setItem('bt_notes', JSON.stringify(state.notes));
    renderNotes();
    showToast('Guardado', 'Tu obra se ha guardado correctamente.', 'success');
    logEvent(`Nota guardada: ${title}`, 'success');
}

function updateWordCount() {
    const text = dom.noteContentInput.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    dom.wordCount.textContent = `${words} palabras`;
}

// --- AUTH & NAV ---
function loginUser(userObj) {
    state.user = userObj;
    localStorage.setItem('bt_user', JSON.stringify(state.user));
    logEvent(`Inicio de sesión: ${userObj.name} (${userObj.role})`, 'success');
    showToast('Bienvenido', `Hola ${userObj.name}, acceso concedido.`, 'success');
    checkAuth();
}

function checkAuth() {
    if (state.user) {
        dom.loginScreen.classList.add('hidden');
        dom.app.classList.remove('hidden');
        dom.userName.textContent = state.user.name;
        dom.userRole.textContent = state.user.role;

        if (state.user.role === 'admin') {
            dom.adminOnly.forEach(el => el.classList.remove('hidden'));
            renderLogs();
            renderSuggestions();
            if(dom.fabSuggest) dom.fabSuggest.classList.add('hidden');
        } else {
            dom.adminOnly.forEach(el => el.classList.add('hidden'));
            if ($('#screen-admin').classList.contains('active')) navigateTo('home');
            if(dom.fabSuggest) dom.fabSuggest.classList.remove('hidden');
        }

        startTyping(dom.heroTyping, ["El conocimiento está a un clic.", "Explora nuevas historias.", "Tu biblioteca digital."]);
    } else {
        dom.loginScreen.classList.remove('hidden');
        dom.app.classList.add('hidden');
        dom.loginUser.value = ''; dom.loginPass.value = '';
        startTyping(dom.loginTyping, ["Ingresa a tu biblioteca digital...", "Miles de libros te esperan.", "Tu próxima gran lectura."]);
        startTyping(dom.bookTyping, ["Leer es soñar...", "Viaja sin moverte...", "Descubre mundos..."]);
    }
}

function navigateTo(screen) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    const target = $(`#screen-${screen}`);
    if (target) target.classList.add('active');

    if(screen === 'admin') logEvent('Administrador abrió el Dashboard', 'info');
    if(screen === 'library') renderSaved();
}

// --- RENDERIZADO DE LIBROS ---
function createCard(book, slim = false) {
    const isSaved = state.saved.includes(book.id);
    const card = document.createElement('div');
    card.className = 'book-card';
    if (slim) card.style.flexDirection = 'row';

    card.innerHTML = `
        <div class="book-cover-wrapper" style="${slim ? 'width:90px; height:130px;' : ''}">
            <img src="${book.cover}" class="book-cover" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450?text=Portada'">
        </div>
        <div class="book-info">
            <h3 class="book-title" style="${slim ? 'font-size: 0.9rem;' : ''}">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <div class="book-actions">
                <button class="btn-card-read" data-read="${book.id}"><i class="ph ph-book-open"></i> ${slim ? '' : 'Leer'}</button>
                <button class="btn-card-save ${isSaved ? 'active' : ''}" data-save="${book.id}">
                    <i class="ph ${isSaved ? 'ph-fill ph-bookmark-simple' : 'ph-bookmark'}"></i>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', (e) => { if (!e.target.closest('button')) openDetail(book); });
    return card;
}

function renderGrid(books, container, slim = false) {
    container.innerHTML = '';
    books.forEach(b => container.appendChild(createCard(b, slim)));
}

// --- MODAL DETALLE Y LECTOR ---
function openDetail(book) {
    state.currentBook = book;
    dom.detailCover.src = book.cover;
    dom.detailTitle.textContent = book.title;
    dom.detailAuthor.innerHTML = `<i class="ph ph-pencil-simple"></i> ${book.author}`;
    dom.detailCategory.textContent = book.category;
    dom.detailSynopsis.textContent = book.synopsis;

    dom.detailYear.textContent = book.year ? (book.year < 0 ? `${Math.abs(book.year)} a.C.` : book.year) : 'Desconocido';
    dom.detailPages.textContent = book.pages || 'N/A';

    // Enlace de descarga directa corregido
    dom.detailDownloadBtn.href = `https://archive.org/download/${book.archiveId}/${book.archiveId}_text.pdf`;
    dom.detailDownloadBtn.target = "_blank";

    const isSaved = state.saved.includes(book.id);
    dom.detailSaveBtn.classList.toggle('active', isSaved);
    dom.detailSaveBtn.innerHTML = `<i class="ph ${isSaved ? 'ph-fill ph-bookmark-simple' : 'ph-bookmark'}"></i>`;

    dom.detailModal.classList.remove('hidden');
    logEvent(`Vista de libro: ${book.title}`, 'info');
}

function openReader(book) {
    if (state.user.role === 'guest') {
        showToast('Acceso Restringido', 'Debes iniciar sesión para leer los libros completos.', 'error');
        return;
    }

    dom.readerTitle.textContent = book.title;
    dom.readerSubtitle.textContent = state.user.role === 'admin' ? "Acceso completo • Archive.org" : "Vista previa • Archive.org";

    dom.readerModal.classList.remove('hidden');
    dom.detailModal.classList.add('hidden');

    // Loader y carga del iframe
    dom.readerLoading.classList.remove('hidden');
    dom.readerIframe.style.opacity = '0';
    dom.readerIframe.src = `https://archive.org/embed/${book.archiveId}`;

    dom.readerIframe.onload = () => {
        dom.readerLoading.classList.add('hidden');
        dom.readerIframe.style.opacity = '1';
    };

    logEvent(`Lectura iniciada: ${book.title}`, 'success');
}

function closeReader() {
    dom.readerModal.classList.add('hidden');
    dom.readerIframe.src = 'about:blank';
}

function toggleSave(id) {
    const idx = state.saved.indexOf(id);
    const book = BOOKS_DATA.find(b => b.id === id);

    if (idx >= 0) {
        state.saved.splice(idx, 1);
        showToast('Removido', 'Eliminado de tu biblioteca.', 'info');
        logEvent(`Libro removido: ${book.title}`, 'warning');
    } else {
        state.saved.push(id);
        showToast('Guardado', 'Añadido a tu biblioteca.', 'success');
        logEvent(`Libro guardado: ${book.title}`, 'success');
    }

    localStorage.setItem('bt_saved', JSON.stringify(state.saved));
    if (dom.statSaved) dom.statSaved.textContent = state.saved.length;

    if (state.currentBook && state.currentBook.id === id) {
        const isSaved = state.saved.includes(id);
        dom.detailSaveBtn.classList.toggle('active', isSaved);
        dom.detailSaveBtn.innerHTML = `<i class="ph ${isSaved ? 'ph-fill ph-bookmark-simple' : 'ph-bookmark'}"></i>`;
    }

    renderGrid(BOOKS_DATA, dom.booksGrid);
    if ($('#screen-library').classList.contains('active')) renderSaved();
}

function filterBooks() {
    const q = dom.searchInput.value.toLowerCase();
    const filtered = BOOKS_DATA.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    renderGrid(filtered, dom.booksGrid);
}

function handleCategory(e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const cat = chip.dataset.cat;
    const filtered = cat === 'all' ? BOOKS_DATA : BOOKS_DATA.filter(b => b.category === cat);
    renderGrid(filtered, dom.booksGrid);
    logEvent(`Filtro por categoría: ${cat}`, 'info');
}

function renderSaved() {
    if (state.saved.length === 0) {
        dom.savedGrid.innerHTML = ''; dom.emptyLibrary.classList.remove('hidden');
    } else {
        dom.emptyLibrary.classList.add('hidden');
        const savedBooks = BOOKS_DATA.filter(b => state.saved.includes(b.id));
        renderGrid(savedBooks, dom.savedGrid);
    }
}

document.addEventListener('click', (e) => {
    const readBtn = e.target.closest('[data-read]');
    if (readBtn) { e.stopPropagation(); const book = BOOKS_DATA.find(b => b.id === readBtn.dataset.read); if (book) openReader(book); }

    const saveBtn = e.target.closest('[data-save]');
    if (saveBtn) {
        e.stopPropagation();
        toggleSave(saveBtn.dataset.save);
        const isSaved = state.saved.includes(saveBtn.dataset.save);
        saveBtn.classList.toggle('active', isSaved);
        saveBtn.innerHTML = `<i class="ph ${isSaved ? 'ph-fill ph-bookmark-simple' : 'ph-bookmark'}"></i>`;
    }
});

function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    dom.themeToggle.innerHTML = state.theme === 'dark' ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
}

function initCarousel() {
    const slides = $$('.carousel-slide');
    if(slides.length === 0) return;
    setInterval(() => {
        slides[state.carouselIndex].classList.remove('active');
        state.carouselIndex = (state.carouselIndex + 1) % slides.length;
        slides[state.carouselIndex].classList.add('active');
    }, 6000);
}

document.addEventListener('DOMContentLoaded', init);
