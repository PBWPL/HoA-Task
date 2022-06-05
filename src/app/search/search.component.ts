import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchFormControl: FormControl = new FormControl();
  searchText: string = '';

  words: string[] = [];
  filteredWords?: Observable<string[]>;

  constructor(private dataService: DataService) {
    this.dataService.getAllData().subscribe((data) => {
      this.words = data;
    });
  }

  ngOnInit(): void {
    this.filteredWords = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.getFilteredWords(value || ''))
    );
  }

  getFilteredWords(value: string): string[] {
    let filterValue = value.toLowerCase();
    return this.words.filter((word) =>
      word.toLowerCase().includes(filterValue)
    );
  }

  googleSearch() {
    window.open(
      `https://google.com/search?q=${encodeURIComponent(this.searchText)}`,
      '_blank',
      'noopener'
    );
  }
}
