
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks',
  imports: [FormsModule, CommonModule],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {
  department: string = 'All';
  itiTracks: { id: number; name: string; department: string }[];

  filteredList: { id: number; name: string; department: string }[];

  constructor() {
    this.itiTracks = [
      {
        id: 1,
        name: 'PD',
        department: 'SD',
      },
      {
        id: 2,
        name: 'UI/UX',
        department: 'Design',
      },
      {
        id: 3,
        name: 'Graphics',
        department: 'Design',
      },
      {
        id: 4,
        name: 'andriod Native',
        department: 'Mobile',
      },
      {
        id: 5,
        name: 'IOS ',
        department: 'Mobile',
      },
      {
        id: 6,
        name: 'os ',
        department: 'OS',
      },
    ];
    this.filteredList = this.itiTracks;
  }
  filterTracks() {
    this.filteredList =
      this.department == 'All'
        ? this.itiTracks
        : this.itiTracks.filter((track) => track.department == this.department);
  }
}

