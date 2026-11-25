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
