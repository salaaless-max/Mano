# Mano

Strumenti personali per l'attività di chirurgo della mano. Due parti separate:

| Parte | Cosa fa | Dove vivono i dati |
|---|---|---|
| **Consulente (Progetto Claude)** | Risponde alle domande usando i tuoi file, li rielabora, propone aggiornamenti con PubMed, aiuta con articoli/abstract/presentazioni/ECM | Claude (abbonamento Pro) – **mai dati di pazienti** |
| **Registro (app web)** | Registro interventi, finestre dei controlli, date CUP, eventi in Apple Calendar con avviso la sera prima | **Solo sul tuo iPhone** |

---

## 1. Consulente – come crearlo (circa 30 minuti, meglio da iPad)

1. Apri l'app **Claude** (o Safari → claude.ai) → **Progetti** → **Crea progetto**.
   Nome: `Mano – Consulente`.
2. Tocca **Istruzioni** e incolla il testo che trovi in
   [`assistente/istruzioni-progetto.md`](assistente/istruzioni-progetto.md) (solo la parte nel riquadro).
3. **Conoscenza del progetto → Aggiungi file** → scegli i PDF da iCloud Drive.
   - Prima di caricarli, **rinomina i file** in modo descrittivo, es.
     `Radio distale - Green cap 16 - Fratture radio distale.pdf`,
     `Flessori - Tang 2023 - Riparazione zona II.pdf`.
     Nomi chiari = ricerche molto più precise e citazioni comprensibili.
   - **Slide**: esportale in PDF prima di caricarle.
   - **Foto**: si possono caricare (JPG/PNG), meglio se con un nome descrittivo.
   - **Video**: non vengono letti. Crea un file di testo `Video - argomento.txt` con il link e due righe di appunti.
   - Comincia con i file di **2-3 argomenti** e prova; poi aggiungi il resto. Con l'abbonamento Pro c'è un limite di utilizzo: progetti molto grandi lo consumano più in fretta.
4. **PubMed**: in una chat del progetto tocca **+ / strumenti** e verifica che il connettore **PubMed** sia attivo.
5. **Voce**: nell'app Claude usa il microfono (dettatura) o la modalità vocale.

Esempi di domande:
- "Classificazione di Fernandez per il radio distale, breve"
- "Fammi una scheda rapida sul protocollo riabilitativo dei flessori zona II dai miei file"
- "Cerca su PubMed le novità dal 2024 su WALANT nel tunnel carpale"
- "Aggiorna la mia scheda sulla rizoartrosi con la letteratura degli ultimi 3 anni"
- "Aiutami a scrivere un abstract per il congresso SICM su questi dati: …"

## 2. Registro – come installarlo sull'iPhone

**Una sola volta (da Safari, sul sito di GitHub):**
1. Repository `Mano` → **Settings** → **General** → in fondo *Danger zone* → **Change visibility → Public**
   (pubblico è solo il codice: i dati restano sul telefono).
2. **Settings → Pages** → *Build and deployment* → Source **Deploy from a branch** →
   Branch `claude/confident-dijkstra-jg7zst`, cartella **/docs** → **Save**.
3. Dopo 1-2 minuti l'app è su: **https://salaaless-max.github.io/Mano/**

**Sull'iPhone:**
1. Apri il link in **Safari** → tasto **Condividi** → **Aggiungi alla schermata Home**.
2. Usa sempre l'icona "Registro" dalla Home (non la scheda di Safari: hanno memorie separate).

### Come si usa
1. **Nuovo** → data, procedura, lato, ruolo, anestesia, complicanze, note → eventuale primo controllo (7 gg, 14 gg, … o giorni a scelta).
2. In **Oggi** il controllo compare in *Da confermare con il CUP* con la finestra probabile.
   Puoi aggiungere un **Promemoria verifica** al calendario per ricordarti di controllare la data CUP.
3. Quando il CUP fissa la data → apri l'intervento → **Data CUP** → **Conferma data** → **Aggiungi al Calendario**.
   L'evento entra in Apple Calendar con avviso **la sera prima alle 20:00** (modificabile), accanto ai tuoi turni.
4. Dopo la visita → **Segna fatto** ed eventuale annotazione.

### Regole
- **Mai** nomi, iniziali, date di nascita, numeri di cartella.
- Gli eventi in Apple Calendar finiscono su iCloud: per questo di default scrivono solo il codice (`Rimozione punti post-op #12`).
  Se vuoi procedura e lato nel titolo: Impostazioni → "Procedura e lato" (scelta tua, consapevole).
- Se il calendario predefinito è condiviso con la tua ragazza, scegli un calendario non condiviso quando aggiungi l'evento.
- **Backup** ogni 2 settimane: Impostazioni → Esporta backup → Salva in File → iCloud Drive.
  Se cancelli l'icona dalla Home, i dati vengono cancellati.
