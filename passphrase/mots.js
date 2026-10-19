// Liste de mots français sans accents, pour que les phrases se tapent sur n'importe quel clavier.
// La page dédoublonne et ne garde que les mots de 3 à 10 lettres minuscules.
const MOTS_FR = `
abeille agneau aigle alouette anguille antilope autruche baleine belette bison blaireau bouc bouquetin
bourdon brebis brochet buffle caille canard canari caribou carpe castor chameau chamois chat cheval
chenille chien chinchilla chouette cigale cigogne cobra coccinelle cochon colibri condor coq corbeau
coyote crabe crapaud crevette criquet crocodile cygne dauphin dindon dromadaire escargot faisan faucon
flamant fourmi frelon furet gazelle girafe gorille grenouille grillon hamster hareng hermine hibou
hippocampe hirondelle homard iguane jaguar kangourou koala lapin lama libellule limace lion loup loutre
lynx mammouth marmotte merle morse morue mouche mouette moule moustique mouton moineau mulet narval
ocelot oie orque otarie ours oursin panda paon papillon perroquet phoque pigeon pingouin poisson poney
poule poulet poulpe poussin puma putois raton renard requin rossignol sanglier sardine saumon serpent
singe souris tapir taupe taureau thon tigre tortue toucan truite vache vautour anchois corail
alpaga renne yak bouvreuil pinson geai fauvette verdier corneille pie hulotte buse milan aigrette ibis
albatros cormoran macareux manchot lamantin dugong espadon raie calamar seiche bigorneau langouste
tarentule scorpion mante cafard hanneton puceron lombric termite gerbille cobaye chiot chaton poulain
veau porcelet caneton louveteau lionceau faon

dragon licorne griffon kraken hydre minotaure gargouille korrigan farfadet lutin elfe nain gnome troll
golem cyclope centaure faune nymphe titan sphinx vampire zombie ogre sorcier mage oracle druide barde
talisman amulette grimoire potion rune totem

abricot ail amande ananas artichaut asperge aubergine avocat banane basilic beignet beurre biscuit
brioche brocoli cacao cannelle carotte cassis caramel cerise champignon chocolat chou citron citrouille
compote concombre confiture cornichon courgette couscous croissant cumin datte endive farine fenouil
figue fraise framboise fromage gaufre gingembre glace goyave groseille haricot jambon kiwi laitue lardon
lentille litchi mangue marron melon menthe miel mirabelle muscade myrtille navet noisette noix nougat
oignon olive orange origan papaye persil pistache poire poireau pois poivre poivron pomme potiron
praline prune pruneau quiche radis raisin salade semoule sirop soupe sucre tarte thym tomate truffe
vanille yaourt pain baguette galette tartine croquette omelette raclette fondue gratin risotto lasagne
ravioli pizza saucisse merguez chorizo bacon steak cookie muffin bonbon sorbet flan nectar limonade
tisane lait cidre cocktail mojito sauce moutarde vinaigre huile safran paprika curry oseille cresson
betterave panais rutabaga patate frite popcorn guimauve sucette meringue macaron madeleine chausson
tiramisu crumble clafoutis brownie bagel bretzel nachos tacos burrito sushi ramen tofu quinoa avoine
orge seigle riz sarrasin moka

arbre archipel averse azur bambou banquise bassin bois bosquet bourgeon branche brindille brise
brouillard brume buisson canyon cascade caverne cendre champ colline cristal dune embrun falaise
feuille fleur fleuve galet geyser givre glacier gland golfe granit gravier grotte horizon iceberg
jardin jungle lagon lac lande lave lichen lierre lune marais marbre mer mistral montagne mousse nuage
oasis onde orage ortie pierre plage plaine pluie prairie rocher roseau ruisseau sable sapin savane
sentier silex soleil source steppe terre tonnerre torrent toundra tornade tourbe vague vallon vent
verger volcan aurore rose lilas jasmin lavande muguet iris lotus cactus palmier bouleau saule tilleul
platane peuplier pin houx gui marguerite coquelicot tournesol pissenlit jonquille violette magnolia
glycine bruine rafale ouragan typhon mousson galaxie cosmos orbite lagune mangrove baobab acacia
mimosa romarin sauge laurier verveine camomille aneth ciboulette coriandre estragon cerfeuil
eucalyptus bananier cocotier figuier pommier poirier cerisier oranger olivier pivoine pavot tulipe

aube matin midi soir minuit nuit semaine janvier mars avril mai juin juillet septembre octobre
novembre lundi mardi mercredi jeudi vendredi samedi dimanche printemps automne hiver saison instant
minute seconde solstice

aiguille aimant ampoule ancre anneau antenne arrosoir assiette aspirateur balai balance ballon bandeau
banc bague baignoire baril barque bateau bocal boussole bougie bouchon bouclier bouilloire boulon
bouteille bracelet brosse brouette bureau cadenas cadre cahier caillou camion carafe carnet cartable
casque casserole ceinture chaise chapeau chariot chaudron chaussette chemise ciseaux clavier cloche
clou coffre collier compas coussin couteau couvercle crayon cuvette dentelle drapeau enclume entonnoir
fauteuil ficelle flacon fourchette gant gilet gobelet gong gourde grelot guitare hamac harpe horloge
lampe lanterne lasso loupe lunettes luth manteau marteau masque matelas miroir moulin mouchoir nappe
oreiller panier parapluie passoire peigne pelle pendule pinceau pioche piano plume pompe portail pot
poulie pupitre puzzle rabot radeau raquette robinet rouleau ruban sablier sac sacoche scie seau
serviette sifflet sonnette stylo tablier tabouret tambour tamis tapis tasse tenaille tiroir toupie
tournevis trompette trousse tuba tuyau valise vase verre violon voile volant wagon xylophone yoyo
bijou boucle bouton bretelle cravate mitaine bonnet sandale botte sabot pantoufle jupe robe short pull
veste blouson pyjama kimono poncho cape tunique toge turban foulard parasol transat tente jumelles
carte globe atlas microscope batterie prise lampion lustre chandelle bougeoir briquet allumette
fusible radiateur frigo four micro robot drone radar sonar laser agrafe bidon bobine bourse buvard
calendrier carton chevalet clef cordon crochet dague fouet gomme grattoir mallette marmite mortier
pilon pochette poivrier punaise rasoir tampon torchon tube ustensile verrou wok

abbaye atelier auberge avenue bastide beffroi bergerie boulevard bunker cabane cabanon cantine caserne
cave chalet chapelle citadelle cuisine donjon douane escalier ferme fontaine forteresse garage gare
grange grenier guichet hangar hameau havre igloo kiosque laverie logis mairie maison manoir palais
parc passage pavillon phare piscine place pont port portique prison quai refuge remise rempart
restaurant rotonde ruelle salon square stade studio taverne temple terrasse tour tunnel usine village
villa yourte zoo cirque bazar marina ponton digue canal barrage chantier carrefour impasse trottoir
parking banque pagode pyramide

aboyer accrocher admirer adorer agiter aider aimer ajouter allumer amuser appeler apprendre arroser
attraper avaler avancer balancer bavarder bercer bondir bouger bouillir briller broder brosser
bricoler cacher calmer camper chanter chasser chercher choisir chuchoter cligner coller compter
conduire construire coudre couler couper courir creuser croquer cuisiner danser deviner dessiner
dormir explorer fabriquer filer flotter fondre frapper freiner frotter gagner galoper glisser gonfler
grandir grimper griller grogner guetter habiller hurler imaginer inventer jardiner jongler jouer
lancer laver lire livrer manger marcher mijoter miauler monter mordre nager naviguer nettoyer nouer
offrir onduler oublier ouvrir parler partir patiner peindre penser piocher plonger plier porter
pousser ramer ranger rebondir rire rouler ronfler rougir sauter savourer sculpter siffler sonner
sourire souffler surfer tailler taper tirer tisser tomber tourner tracer travailler tricoter trotter
trouver vibrer visiter voler voyager abriter accueillir affiner ajuster alterner amarrer animer
apaiser applaudir assembler barboter baptiser bourdonner butiner cajoler caresser chahuter chiner
cogiter colorier composer cueillir dompter effleurer embrasser enchanter escalader esquiver
feuilleter flairer fredonner gambader gazouiller grignoter griffonner inviter jaillir lambiner
lustrer marmonner mitonner murmurer papoter parier patienter picorer planer polir ricaner rugir
scintiller somnoler taquiner tituber trinquer valser voguer zigzaguer

agile aimable amical ancien ardent aride audacieux austral bavard beau bizarre blanc bleu blond
bouillant brillant brave brun calme candide charmant chaud clair costaud coquet courageux cosmique
curieux discret docile dodu doux dynamique facile fameux farceur fier fin fragile frais franc fringant
frileux futile gai galant gentil glacial gourmand grand gris habile hardi heureux immense jaune joli
joyeux juste large lent libre limpide lisse loyal lucide lumineux malin massif mauve mignon minuscule
moelleux mystique noble noir nomade nordique paisible patient perplexe petit pimpant placide poli
prudent pur rapide rare ravi rebelle robuste rond rouge royal sage sauvage secret serein simple solide
sombre souple sportif subtil superbe tendre tenace timide tranquille turquoise vaillant vif violet
vert vigilant zen acide alerte altier amusant astucieux attentif aventureux bancal barbu bossu bruyant
cocasse coquin cordial cotonneux dansant festif fleuri flou fluide fougueux fugace furtif galactique
gracieux grincheux hilare insolite jovial lointain magique magnifique majestueux malicieux moqueur
naturel nocturne onirique opulent original paresseux peureux pensif piquant pointu poudreux puissant
radieux rieur rigolo rocheux romantique rustique savant soyeux spacieux splendide studieux tactile
tropical velu vibrant vigoureux volage

accord aventure balade bulle cadeau caprice carnaval chanson charade chronique cocon comptine conte
courage croquis destin devinette domino effort escapade espoir esquisse fable fanfare festival festin
flamme fortune galop harmonie histoire humour illusion jeu labyrinthe loisir magie malice merveille
mirage mission nuance ombre orchestre palette panorama parade passion pirouette promesse refrain
rythme silence souvenir surprise symphonie tango tempo trajet tribu valse vertige voyage zeste

acrobate alchimiste apprenti architecte artisan artiste astronaute berger boucher boulanger capitaine
chevalier chimiste clown cocher corsaire cosmonaute cuisinier cycliste danseur dentiste docteur ermite
facteur fermier forgeron gardien guide horloger inventeur jardinier jongleur juge magicien marin
menuisier meunier mineur moine musicien navigateur peintre pilote pirate plombier potier prince
princesse roi reine sculpteur soldat tailleur tisserand trappeur troubadour vagabond viking voyageur
ninja cowboy

banjo basson cithare clairon cornemuse harmonica hautbois mandoline maracas orgue saxophone tambourin
triangle trombone sitar ballet cantate sonate concerto fugue gamme note solo duo trio quatuor chorale
salsa samba rumba polka rock jazz blues swing reggae disco funk

arbitre badminton basket billard bowling boxe cerceau croquet cyclisme dames escrime football golf
hockey judo kayak marathon natation patin polo quille rallye rugby ski slalom sprint surf tennis
toboggan trampoline triathlon volley yoga frisbee marelle osselet bille jeton joker atout

avion canot caravane carrosse chaloupe char cargo catamaran dirigeable fiacre fourgon galion gondole
jeep moto navette paquebot planeur roulotte scooter taxi tracteur train tram tramway voilier yacht
zeppelin tandem bus autobus locomotive remorque pirogue drakkar jonque sampan

ambre argent ardoise bronze cuivre cobalt diamant fer indigo ivoire jade laiton lin nacre onyx opale
perle platine plomb quartz rubis saphir satin soie titane topaze velours zinc coton laine cuir osier
rotin carbone chrome acier brique ciment argile craie mercure azote carmin cyan magenta ocre pourpre
vermillon beige kaki marine acajou noyer merisier

buffet commode armoire placard rideau volet parquet plafond plancher cloison toiture balcon perron
grillage haie potager serre compost ruche poulailler clapier niche mangeoire nichoir

atome algorithme calcul circuit code formule fossile fusion levier matrice neutron nova photon pixel
plasma prisme proton pulsar quasar signal sonde spectre spirale vecteur virus volt watt octet binaire
puce modem routeur serveur tablette console joystick manette logiciel fichier dossier curseur onglet
script macro lien fibre hologramme capteur moteur piston turbine engrenage rouage ressort rivet vis
soudure chalumeau forge fonderie

abri affiche agenda album alibi almanach angle aquarium arc arcade archive armure astuce aubaine
avenir aviron badge bagage baie bal balise bandit banquet barbecue baroque barrique bascule bastion
bataille berceau bibelot bilan billet bistrot bivouac blason bocage bolide bonheur bordure bosse
bouquet bourrasque boutique braise brigade butin cabaret cabine cachette cadran cageot calepin
calumet camarade camelot campagne capsule caravelle carillon carrousel cartouche casino catapulte
cavalier chandail chapiteau charrette chignon cible clocher cocarde cockpit cocotte comptoir concert
confetti corvette costume couronne cuirasse diapason dinosaure duvet enclos escale escarpin estampe
estrade fanion fanal farandole feuillage figurine filet flambeau flotte folklore fourneau fresque
frimousse fronton gadget galerie gamelle garnison gazette girouette glaive gouache gouvernail gradin
grappe grimace guirlande halte harpon hublot hymne javelot kermesse lucarne luciole manivelle mascotte
matelot mezzanine minaret mirador mobile nautile origami ourson pagaie palace palissade panache pantin
papyrus parchemin pastel patio pelote pendentif pergola piolet plateau poignard pompon portrait
poterie quartier rameau ricochet rivage sabre safari sarbacane scaphandre sentinelle sextant
silhouette soucoupe spatule tapisserie tatouage tipi tonneau tourbillon tramontane traversin treillis
tremplin tricycle tuile tutu vaisseau vapeur vestibule vitrail voltige zodiaque
`;
