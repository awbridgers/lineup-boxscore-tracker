### Lineup Boxscore Tracker
An app used to track the stats for Wake Forest Basketball (or any team) lineups using substitution patterns and the ESPN play by play data. Live [here](https://awbridgers.github.io/lineup-boxscore-tracker/).

### How To Use
* To track a lineup manually:
   * Select the players in the game and the time and click *Submit Lineup*. Repeat for each substitution during the game.
   * At the end of the half, click the *End Half* button to switch to the 2nd half. (This will take care of subbing out the current lineup as well)
   * You must resubmit the first lineup of the 2nd half. 
  * Click *End Half* at the end of the 2nd half to finish tracking
  * Click *Sub Shooter* if the sub occurs after the 2nd free throw of a trip to the line. (This ensures the the point will be attributed to the correct lineup since the time doesn't change)
* To Upload a lineup:
   * Click the *Upload Lineup* Button
   * The File must be an excel spreadsheet formatted as such:
      * Lineup: first name then last name with a comma. **NO SPACE** between players.
      * sub times: (SubInTime)-(SubOutTime)-(NextSub InTime)-(NextSubOutTime)-...etc. **REMOVE COLONS OF TIMES**.
      * Last row should be the FT Sub Shooter times in the same format as the lineup times.
      * Put "none" for any blank times
      * Example:

| Lineup        | First Half     | Second Half |
| ------------- | ---------------| ------------|
| John Smith,Joe Williams,Will Johnson,Bob Smith| 2000-1500-1000-500-325-0       | 2000-1450 |
| FT sub Shooter| 1500-200            |   none |
* Save the completed linep as a excel sheet by pressing the *Lineup CSV* button.
* Once the lineup is finished, paste the play-by-play from ESPN into the text field
  * Start with the **first play of the game** and copy until the **final play of the game**
  * Do not include the header at the start of the play-by-play. 
  * The header between halves is automatically filtered out by the app so you only have to copy 1 continuous block.
* Click *Calculate* to parse the data and show the results.
* The Results
   * Columns end in either 'F' or 'A' (aside from lineup and time)
      * F: For - stats the lineup got for their own team (i.e. PF=Points for. Points the lineup scored.).
      * A: Against - stats the opposition got against the lineup (i.e. PA=Points against. Points scored against the lineup by the opponent).
   * Results Table Key (F or A removed for simplicity)
      * Lineup: the players on the court
      * Time: Time in seconds
      * P: Points
      * DR: Defensive Rebounds
      * OR: Offensive Rebounds
      * FTA: Free Throw Attempts
      * 2PM: 2-Pointers Made
      * 2PA: 2-Pointers Attempted
      * 3PM: 3-Pointers Made
      * 3PA: 3-Pointers Attempted
      * A: Assists
      * TO: Turnovers

###Author
Adam Bridgers