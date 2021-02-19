import { Injectable } from '@angular/core';
import { InputRaw } from '../interface/InputRaw';
import { CalculateTravelsService } from './calculate-travels.service';

@Injectable({
  providedIn: 'root',
})
export class ManageFileService {
  rawInput: InputRaw = { workDays: 0, ElementValue: [], identification: 0 };

  constructor(private travels: CalculateTravelsService) {}

  readFile(file: File, identification: number) {
    file.text().then((rsl) => {
      const rsl2 = rsl.split('\n');

      for (let index = 0; index < rsl2.length; index++) {
        if (index == 0) {
          this.rawInput.workDays = Number(rsl2[index]);
        } else {
          this.rawInput.ElementValue.push(Number(rsl2[index]));
        }
      }
      this.rawInput.identification = Number(identification);
      this.travels.calculateTravels(this.rawInput).subscribe((rslt) => {
        var result = [];

        for (var i in rslt) {
          result.push(
            rslt[i].caseDay + ': ' + rslt[i].numberMaxTravels + '\r\n'
          );
        }

        var a = document.createElement('a');
        a.href = this.makeTextFile(result);
        a.download = 'lazy_loading_example_output.txt';
        a.click();
      });
    });
  }

  textFile = null;
  makeTextFile(text) {
    var data = new Blob([text], {
      type: 'text/plain',
    });

    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile);
    }

    this.textFile = window.URL.createObjectURL(data);

    return this.textFile;
  }
}
