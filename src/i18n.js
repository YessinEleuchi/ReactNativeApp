import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
en :{
    translation:{
    email: "E-mail",
    pwd:"Password",
    eng:"English",
    fra:"French",
    lang:"Menu language",
    freng:"French -> English",
    engfr:"English -> French",
    both:"Both",
    forget_pwd:"Forgot my password ",
    login:"Login",
    guest:"Guest",
    catalog:"Catalog",
    list:"Lists",
    my_lists:"My lists",
    vocab:"Vocabulary",
    grammar:"Grammar",
    expression:"Expressions",
    inbox:"Inbox",
    acc:"Account",
    myacc:"My account",
    progress:"Progress",
    myprogress:"My progress",
    myweek:"My week",
    mylearning:"My acquisition",
    random:"Random",
    practice:"Practice",
    close:"Close",
    resume:'Resume',
    training:'Training',
    totalPractice:'Total practice duration',
    practiceSlice:'Practice time per category',
    medals:'Medals',
    gold:'Gold',
    silver:'Silver',
    bronze:'Bronze',
    quit:'Quit',
    share:'Share',
    delete:'Delete',
    report:'Report',
    back:'Back',
    info:"Informations",
    verfied_list:"Verified list",
    verfied_list_content:"These lists are proposed by pro language trainers.",
    SEverfied_list:"Semi verified list",
    SEverfied_list_content:"These lists are proposed by pro language trainers but have been modified by learners and could contain mistakes.",
    NOverfied_list:"Non verified lists",
    NOverfied_list_content:"These lists are proposed by learners and could contain mistakes.",
    create_list:"Create a new list ..",
    cancel:"Cancel",
    create:"Create list",
    list_name:"List name",
    new_list:"New list",
    list_type:"List type",
    add_element:"Add an element to the list",
    add_the_element:"Add this element",
    element:"Element",
    modify:"Modify",
    share:"Share",
    delete:"Delete",
    delete_verf:"Delete this element?",
    add_an_element:"Add an element",
    begin:'Begin',
    selectedwords:'only selected words',
    repeatfailed:'Repeat failed elements',
    //Practice Modes
    ps_learning:"Passive learning",
    ps_learning_content:"Calmly listen to your list and play in your head ;)",
    ps_content:"Choose a duration, English to French, the other way around or both, and then .. open up your chakras..uh..your ears!!",
    ac_learning:"Active learning",
    ac_learning_content:"Your turn to translate! Super Brian speeds up or slows down depending on how good you are ;)",
    ac_content:"I will not get beat by a machine, I will not get beat by a machine, I WILL NOT..",
    pronunciation:"Pronunciation",
    pronunciation_content:"Your turn to repeat! simple but really efficient!",
    ref_grammar:"Reflex grammar",
    ref_grammar_content:"Grammar rules? Good. Creating reflexes to stop thinking? Far better.",
    ref_content:`-"Je travaille ici depuis 3 ans."\n -"I've been working here for 3 years." \n A list per grammar point, 20 different sentences AND THAT IS ALL!!`,
    simon:"Simon says",
    simon_content:"Your turn to repeat! simple but really efficient!",
    sim_content:"I'm walking. With my earphones. A playlist?\n . MY list. 5 minutes training. GO.",
    //Practice
    sec:"Seconds",
    //progress
    averageperday:"Average practice duration",
    timeperday:"Minutes of training per day",
    monday:"Mon",
    tuesday:"Tue",
    wednesday:"Wed",
    thursday:"Thu",
    friday:"Fri",
    saturday:"Sat",
    sunday:"Sun",

    
}},
fr :{
    translation:{
    email: "E-mail",
    pwd:"Mot de passe",
    eng:"Anglais",
    fra:"Français",
    lang:"Langue d'affichage",
    freng:"Français > Anglais",
    engfr:"Anglais > Français",
    both:"Les deux",
    forget_pwd:"Mot de passe oublié ?",
    forgot_para:"Entrez votre adresse e-mail et nous vous enverrons un lien de récupération de mot de passe.",
    send_email:"Envoyer l'email",
    login:"Se connecter",
    guest:"Mode invité",
    catalog:"Catalogue",
    list:"Listes",
    my_lists:"Mes listes",
    vocab:"Vocabulaire",
    grammar:"Grammaire",
    expression:"Expressions",
    inbox:"Inbox",
    acc:"Compte",
    myacc:"Mon compte",
    progress:"Progrès",
    myprogress:"Mon progrès",
    myweek:"Ma semaine",
    mylearning:"Mon acquisition",
    random:"Aléatoire",
    practice:"S'entrainer",
    close:"Fermer",
    resume:'Reprendre',
    training:'Entrainement',
    totalPractice:'Durée totale d\'entrainement',
    practiceSlice:'Durée d\'entrainement par categorie',
    medals:'Médailles remportées',
    gold:'Or',
    silver:'Argent',
    bronze:'Bronze',
    quit:'Quitter',
    share:'Partager',
    delete:'Supprimer',
    report:'Signaler',
    back:'Retourner',
    info:"Informations",
    verfied_list:"Liste vérifié",
    verfied_list_content:"These lists are proposed by pro language trainers.",
    SEverfied_list:"Semi verified list",
    SEverfied_list_content:"These lists are proposed by pro language trainers but have been modified by learners and could contain mistakes.",
    NOverfied_list:"Non verified lists",
    NOverfied_list_content:"These lists are proposed by learners and could contain mistakes.",
    create_list:"Créer une nouvelle liste ..",
    cancel:"Annuler",
    create:"Créer la liste",
    list_name:"Nom de liste",
    new_list:"Nouvelle liste",
    list_type:"Type de liste",
    add_element:"Ajouter un element à la liste",
    add_the_element:"Ajouter cet element",
    element:"Element",
    modify:"Modifier",
    share:"Partager",
    delete:"Supprimer",
    delete_verf:"Supprimer cet element?",
    add_an_element:"Ajouter un element",
    begin:'Commencer',
    selectedwords:'Mots selectionnés seulements',
    repeatfailed:'Répeter les elements echouées',
    //Practice Modes
    ps_learning : "Apprentissage passif",
    ps_learning_content : "Écoutez calmement votre liste et jouez dans votre tête ;)",
    ps_content : "Choisissez une durée, de l'anglais au français, l'inverse ou les deux, et ensuite ... \n ouvrez vos chakras...euh...vos oreilles !!!",
    ac_learning : "Apprentissage actif",
    ac_learning_content : "A vous de traduire ! Super Brian accélère ou ralentit en fonction de votre talent ;)",
    ac_content : "Je ne me laisserai pas battre par une machine, je ne me laisserai pas battre par une machine, je ne me laisserai pas...",
    pronunciation : "Prononciation",
    pronunciation_content : "C'est à vous de répéter ! simple mais vraiment efficace !",
    ref_grammar : "Grammaire réflexe",
    ref_grammar_content : "Règles de grammaire ? C'est bien. Créer des réflexes pour arrêter de penser ? Encore plus mieux.",
    ref_content:`-"I've been working here for 3 years."\n-"Je travaille ici depuis 3 ans." \n Une liste par point de grammaire,\n 20 phrases différentes, C'EST TOUT!!`,
    simon : "Simon dit",
    simon_content : "C'est à vous de répéter ! simple mais vraiment efficace !",
    sim_content : "Je marche. Avec mes écouteurs. Une playlist ? MA liste. 5 minutes d'entraînement.\n C'EST PARTI !!",
    sec:"Secondes",
    //progress
    averageperday:"Durée moyenne d'entrainement",
    timeperday:"Minutes d'entrainement par jour",
    monday:"Lun",
    tuesday:"Mar",
    wednesday:"Mer",
    thursday:"Jeu",
    friday:"Ven",
    saturday:"Sam",
    sunday:"Dim",
}}}


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
