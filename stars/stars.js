function stars() {
      var spreadsheet = SpreadsheetApp.getActive(); 
      var ui = SpreadsheetApp.getUi();
      var rows = ui.prompt("Zadej počet řádků *"); // prompt na počet řádků
      var count = 0;
      for ( var i = 1; i <= parseInt(rows.getResponseText(), 10); i++) {
              var s = "";
              for (var j = 0; j < i; j++) { // vytvoří řetězec s daným počtem *
                        s += "*";
                      }
              spreadsheet.getCurrentCell().setValue(s); // zapíše *
              spreadsheet.getCurrentCell().offset(1, 0).activate(); // posune se o buňku dolů
              count += i; // přičte počet * k celkovému počtu *
            }
      ui.alert("Bylo zapsáno " + count + " hvězdiček."); // na konec vypíše počet *
}
