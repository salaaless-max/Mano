# Da fare: installazione Ruflo (quando c'è un PC)

Stato al 25/11/2026:
- `.claude/settings.json` dichiara il marketplace `ruvnet/ruflo` e abilita `ruflo-core`.
  Nelle sessioni cloud non viene caricato (`/ruflo-status` assente).
- `npx ruflo@latest init` in cloud è stato bloccato dal controllo di sicurezza
  (gli hook di Ruflo girano su ogni comando/modifica e scaricano `ruflo@latest`).

Sul PC, con Claude Code locale:
1. `/plugin marketplace add ruvnet/ruflo`
2. `/plugin install ruflo-core@ruflo` (gli altri moduli solo se servono)
3. Verifica: `/ruflo-status`

Cautele: progetto di terzi; hook non a versione fissa.

---

# Progetto: assistente unico (stile "Jarvis") — quando c'è il PC

Obiettivo: un'unica voce per casa (luci, robot, musica — oggi su Alexa) e agenda/lavoro.

Architettura proposta:
- **Home Assistant** su apparecchio dedicato sempre acceso (~100–150 €); il PC serve solo per l'installazione.
- **Claude** come agente conversazionale tramite l'integrazione ufficiale Anthropic di Home Assistant (API a consumo).
- Accesso vocale da iPhone (app Home Assistant / Siri) o microfoni domestici dedicati.
- Dispositivi Alexa importati in Home Assistant dove possibile.

Tappe:
1. Installare Home Assistant e importare i dispositivi.
2. Collegare Claude come assistente vocale.
3. Aggiungere Google Calendar (turni "Lavoro" + calendario principale).
4. Poi: promemoria proattivi ed email.

Domande aperte: PC Mac o Windows? Acquisto apparecchio dedicato? Priorità: casa, agenda o entrambe?
Vincolo: nessun dato di pazienti nel sistema.

---

# Brain – secondo cervello (stato al 25/11/2026)

Pagina Notion privata "Brain" con sezioni: 1. Profilo, 2. Valori e obiettivi, 3. Lavoro,
4. Studio, 5. Progetti, 6. Vita e casa, 7. Indice artefatti, 8. Registro operatorio, Inbox.

Regole: nessun dato di pazienti; dati finanziari solo da Bilance.

Automatismi attivi (attività programmate su claude.ai):
- Lun-ven 7:45 – Smistamento posta; il lunedì anche 3 domande di ripasso da una scheda
  (registro in "4. Studio", priorità: radio distale, scafoide, carpo, rizoartrosi…).
- Ogni sera – Archivio e indice di Google Drive (foglio "Jarvis – Archivio file").
- Domenica 20:40 – "Brain – aggiornamento della domenica": finanze da Bilance, settimana
  in arrivo dal calendario, registro operatorio (sedute dal calendario "Lavoro" + interventi
  anonimizzati dal foglio "Mano – Registro interventi"), Inbox (lezioni dalla sala, palestra).
- Prima domenica del mese – revisione mensile in "2. Valori e obiettivi".

Da verificare:
- Primo riepilogo domenica 29/11 e primo ripasso lunedì 30/11.
- Permessi automatici dell'aggiornamento della domenica (non risultano nei dati).
- Collegamenti dell'aggiornamento della domenica: tenere almeno Notion, Bilance,
  Google Calendar, Gmail, Google Sheets.

Quando c'è il PC:
- Valutare di collegare Brain all'assistente unico (Home Assistant + Claude) come contesto.
