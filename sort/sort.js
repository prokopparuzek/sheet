function sortSheets() {
  /*
  Seřadí listy dle abecedy
  */
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // aktuální sešit
  var sheets = spreadsheet.getSheets(); // seznam listů
  var sheetNames = []; // Jmený seznam
  
  for (var i = 0; i < sheets.length; i++) sheetNames.push(sheets[i].getName()); // zapíše jména listů do seznamu
  sortedSheets = mergeSort(sheetNames); // seřadí listy
  for (var i = 0; i < sortedSheets.length; i++) {
    var sheet = spreadsheet.getSheetByName(sortedSheets[i]); // vybere list dle seznamu
    spreadsheet.setActiveSheet(sheet); // aktivuje list
    spreadsheet.moveActiveSheet(i+1); // vloží ho na správné misto !bacha indexuje od 1, proto +1!
  }
}

function mergeSort(sheets) { // Merge sort https://cs.wikipedia.org/wiki/%C5%98azen%C3%AD_slu%C4%8Dov%C3%A1n%C3%ADm
  var sorted = []; // seřazené pole
  var l = []; // levá polovina
  var r = []; // pravá polovina
  var leftIndex = 0; // přihrádka vlevo
  var rightIndex = 0; // přihrádka vpravo

  if (sheets.length <= 1) return sheets; // pole o 1 prvku je seřazené, vrátím ho
  l = mergeSort(sheets.slice(0, sheets.length/2)); // jinak, rozpůlím
  r = mergeSort(sheets.slice(sheets.length/2, sheets.length));
  while (!(leftIndex == l.length && rightIndex == r.length)) { // projdu a seřadím, dokud nevyčerpám oba seznamy
    if (leftIndex == l.length) { // vyčerpal jsem levý seznam => doberu pravý
      sorted.push(r[rightIndex]);
      rightIndex++;
    } else if (rightIndex == r.length) { // vyčerpal jsem pravý seznam => doberu levý
      sorted.push(l[leftIndex]);
      leftIndex++;
    } else { // v obou jsou stále prvky
      if (l[leftIndex].localeCompare(r[rightIndex], "cs", {numeric:"true"}) < 0) { // vyberu menší a vložím ho pole k vrácení
        sorted.push(l[leftIndex]);
        leftIndex++;
      } else {
        sorted.push(r[rightIndex]);
        rightIndex++;
      }
    }
  }
  return sorted;
}
