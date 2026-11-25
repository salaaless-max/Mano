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
