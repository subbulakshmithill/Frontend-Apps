import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html'
  
})
export class ProfileListComponent implements OnInit {
  @Output() profileSelection = new EventEmitter<Profile>();
  profile: Profile[] = [
  new Profile('Education',
  ' ',
  'https://i.pinimg.com/236x/98/3d/a8/983da8b636ed7d69205f7566fcfb76fd--graduation-images-graduation-caps.jpg'),
   new Profile('Work Experience',
   ' ' ,
   'http://www.quick-bridging-loans.co.uk/images/Briefcase.png'),
    new Profile('Skills',
    ' ' ,
    'https://icon-library.net/images/icon-for-skills/icon-for-skills-12.jpg'),
     new Profile('Languages Known',
     ' ' ,
     'https://webstockreview.net/images250_/resume-clipart-education-icon-14.png')
 ];
  constructor() { }

  ngOnInit() {
  }
  onProfileSelection(profile:Profile) {
    this.profileSelection.emit(profile);
  }
}
