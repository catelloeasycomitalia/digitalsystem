/**
 * GOOGLE APPS SCRIPT - ISTRUZIONI PER L'INSTALLAZIONE
 * 
 * 1. Apri il tuo Google Sheet: https://docs.google.com/spreadsheets/d/1_Rs_xpPMje0aUm28XsRxxEEMiRDdg-UPV5f7EiZ0DUs/edit
 * 2. Vai su "Estensioni" -> "Apps Script".
 * 3. Incolla il codice sottostante nell'editor (sostituendo tutto il contenuto di Codice.gs).
 * 4. Clicca su "Esegui" per autorizzare lo script (ti chiederà i permessi per accedere al foglio).
 * 5. Clicca su "Nuova distribuzione" (pulsante blu in alto a destra).
 * 6. Seleziona il tipo "App Web".
 * 7. Descrizione: "Lead Collector Digital System".
 * 8. Esegui come: "Tu" (la tua email).
 * 9. Chi ha accesso: "Chiunque" (fondamentale per permettere al sito di inviare i dati).
 * 10. Clicca su "Distribuisci" e copia l'URL dell'App Web fornito.
 * 11. Incolla l'URL nelle impostazioni del tuo progetto AI Studio come variabile d'ambiente: VITE_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  var sheetId = '1_Rs_xpPMje0aUm28XsRxxEEMiRDdg-UPV5f7EiZ0DUs';
  var sheetName = 'Foglio1';
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheetByName(sheetName);
  
  // Se il foglio non esiste, lo cerchiamo per indice
  if (!sheet) {
    sheet = ss.getSheets()[0];
  }

  try {
    var data = JSON.parse(e.postData.contents);
    
    // Ordine colonne come da immagine:
    // A: Data | B: Nome e Cognome | C: Email | D: Telefono | E: Nome Azienda / Studio | F: Postazioni Lavoro | G: N° Stampanti | H: Tipologia
    sheet.appendRow([
      new Date(),
      data.nome || '',
      data.email || '',
      data.telefono || '',
      data.tipo_attivita || '', // Corrisponde a Nome Azienda / Studio
      data.postazioni || '',
      data.quantita_stampanti || '',
      data.tipologia_attuale || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Funzione per gestire le richieste OPTIONS (CORS)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
